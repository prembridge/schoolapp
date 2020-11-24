import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
//import Login, { Groups } from './Campaigns'
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};




export default class Registation extends Component {
    
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.state = {
        showComponent: false,
      // username: "",
      // password: "",
      message: "",
      open: false,
      UserName: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
     mobileNo:null,
      formErrors: {
        firstName: "",
        lastName: "",
        UserName:"",
        email: "",
        password: "",
       mobileNo:""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();
//console.log(this.state.MobileNo ,"checking")
    // if (formValid(this.state)) {
    //   // console.log(JSON.stringify(`
    //   //   --SUBMITTING--
    //   //   userName:${this.state.UserName}
    //   //   First Name: ${this.state.firstName}
    //   //   Last Name: ${this.state.lastName}
    //   //   Email: ${this.state.email}
    //   //   Password: ${this.state.password}
    //   // `));
    // } else {
    //   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    // }
    if (this.state.username === this.state.username && this.state.password === this.state.password) {
      this.setState({
        open: true,
        message: "You have successfully Logged In!"
      });
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!"
      });
    }
    var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic c3VzaGlsOkphY29iNw==");
            myHeaders.append("Content-Type", "application/json");
            var raw = "";
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            fetch("https://oacloud.fmi.filemaker-cloud.com/fmi/data/vLatest/databases/OA_Master/sessions", requestOptions)
              .then(response => response.json())
              .then(result => {
                var resultdata = result.response.token
                var savetoken =localStorage.setItem("token" ,resultdata)
                var tokenvalue = localStorage.getItem("token")
                console.log("wht is in it"+tokenvalue)
              })
              .catch(error => console.log('error', error));
              
           
          
    
      var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"fieldData":{"Title":"Mr","First_name":this.state.firstName,"Last_name":this.state.lastName,"Mobile_number":this.state.mobileNo,"Email":this.state.email,"D_o_b":"02-02-2020","Address_1":"pluto","Country":"plutonia","State":"plutoki","City":"pluf","Pancard":"7567546756769","Pin_code":"226025","Username":this.state.UserName,"Password":this.state.password}});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://oacloud.fmi.filemaker-cloud.com/fmi/data/vLatest/databases/OA_Master/layouts/Aps_users/records", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
        case "UserName":
          formErrors.UserName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
        case "mobileNo":
          formErrors.mobileNo =
            value.length < 10 ? "minimum 10 characaters required" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };






  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  sayHello =()=> {
    this.props.history.push("./Login");
   // history.push("/Login");
  }
 handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { formErrors } = this.state;
   // let history = useHistory();

    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a 
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                > Click
                  Sign up
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>,
      <Grid container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '110vh' }}>
      <MDBCard variant="outlined" className={styles.card}  style={{ backgroundColor:'#8cb6fa'} }>
        <CardContent align-items-center>
      <div className="wrapper">
      <div className="form-wrapper">
        <h3> Create Account</h3>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
           < label htmlFor="firstName">First Name* </ label>
            </div>
            <div>
            <MDBInput
              className={formErrors.firstName.length > 0 ? "error" : null}
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          
          <div >
          <label htmlFor="lastName">Last Name* </label>
            </div>
            <div>

            <MDBInput  style={{borderColor: 'gray', borderWidth: 1 }}
              className={formErrors.lastName.length > 0 ? "error" : null}
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
          <div className="UserName">
            <label htmlFor="UserName">User Name*</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.UserName.length > 0 ? "error" : null}
              placeholder=" UserName"
              type="text"
              name="UserName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.UserName.length > 0 && (
              <span className="errorMessage">{formErrors.UserName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email ID *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Password *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="mobileNo">
            <label htmlFor="mobileNo">Mobile No *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.mobileNo.length > 0 ? "error" : null}
              placeholder="MobileNo"
              type="mobileNo"
              name="mobileNo"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.mobileNo.length > 0 && (
              <span className="errorMessage">{formErrors.mobileNo}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Date of Birth *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Date of Birth"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Address *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Address"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Country *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Country"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">State *</label>
            </div>
            <div>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="State"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          
          <div className="password">
            <label htmlFor="password">City *</label>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="City"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">PAN Card No *</label>
            <MDBInput
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="PAN Card No."
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button  onClick={this.handleSubmit} type="submit">Create Account</button>
            <button onClick={this.sayHello} type = "submit">Already Have an Account?</button>
            {/* {this.state.showComponent ?
           <Groups/> :
           null
        } */}
          </div>
        </form>
      </div>
    </div>
    </CardContent>
    </MDBCard>
    </Grid>
    );
  }
}
const styles = 
 {
 card: {
   maxWidth: 1000,
   margin: "top",
   transition: "0.3s",
   boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
   "&:hover": {
     boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
   }
 },
 media: {
   paddingTop: "56.25%"
 },
 typography: {
  textAlign: 'center',
  alignSelf:'stretch'
  

},

 
   };
