import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
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




 export default class Login extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      items:'',
      token:'',
      isLoaded:false,
      username: "",
      password: "",
      message: "",
      open: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      panid:null,
      mobileNo:null,
      formErrors: {
        firstName: "",
        lastName: "",
        UserName:"",
        email: "",
        password: "",
        panid:"",
        mobileNo:"",
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    this.getdata();
  };
  // this.getdata()
  // getdata =()=>{

  // }

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
          formErrors.lastName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
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
    this.props.history.push("./Registation");
  }
  saypay =()=> {
    this.props.history.push("./guestprofile");
  }
  forgotpassword =()=> {
    this.props.history.push("./Forgotpassword");
  }
componentDidMount(){
  // For initial data
 // this.getdata();
}
getdata =()=>{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "FirstName": this.state.firstName,
  "LastName": this.state.lastName,
  "EmailID": this.state.email,
  "Phonenumber": this.state.mobileNo,
  "panid": this.state.panid
});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/guest", requestOptions)
.then(response => response.json())
.then(json =>{ 
  var resdata =  json.otp;
  console.log("resdara",resdata)
  var savetoken =localStorage.setItem("otp" ,resdata)
  var tokenvalue = localStorage.getItem("otp")
  console.log("wht is in it"+tokenvalue)
  if(tokenvalue == "undefined"){
// return null;
  }else{
      {
    Swal.fire({
      title: 'Enter vaild OTP',
  input: 'text',
  showCancelButton: true,
  confirmButtonText: 'Submit',
  showLoaderOnConfirm: true,
  preConfirm: function (email) {
    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        if (email === tokenvalue) {
         
          window.location = "./guestprofile";
          reject('This email is already taken.')
        } else {
         
         resolve()
         alert("Enter Valid OTP..");
        }
      }, 2000)
    })
  },
  allowOutsideClick: false
    }).then(function() {
     
     // window.location = "./guestprofile";
  })
  }



  }
   
  
})
.then(result => console.log(result))
.catch(error => console.log('error', error));


 
  
 


}




  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { formErrors,items } = this.state;
      console.log(items ,"values")
    

    return (
      <MDBContainer >
       
        
         <MDBRow>
         <Grid container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '110vh' }}>
         
         <MDBCard style={{ maxWidth :'100',borderColor:"#1c1a14",} } > 
        
         <div className="header pt-3 grey lighten-2" style={{  paddingRight :400} } >
            
            <MDBCol  className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Guest Login
               </h3>
             </MDBCol>
            </div>
           
        
        {/* <img style={{position:"center", top:100 , width:150,height:150}}  src={process.env.PUBLIC_URL + '/images/login.svg'} /> */}
        
      
        <MDBCardBody className="mx-4 mt-4" style={{ maxWidth :'400'} }>
        <form onSubmit={this.handleSubmit} noValidate>
          
        <div className="firstName"  style={{  paddingRight :800} } >
           < label htmlFor="firstName">First Name* </ label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1 }}
              className={formErrors.firstName.length > 0 ? "error" : null}
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              
              onChange={this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span style={{ color: 'red' }} className="errorMessage">{formErrors.firstName}</span>
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
              <span   style={{ color: 'red' }}className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
        
          <div className="email">
            <label htmlFor="email">Email ID *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1 }}
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span   style={{ color: 'red' }} className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="mobileNo">
            <label htmlFor="mobileNo">Mobile No *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1 }}
              className={formErrors.mobileNo.length > 0 ? "error" : null}
              placeholder="MobileNo"
              type="mobileNo"
              name="mobileNo"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.mobileNo.length > 0 && (
              <span   style={{ color: 'red' }} className="errorMessage">{formErrors.mobileNo}</span>
            )}
          </div>
       
          <div className="panid">
            <label htmlFor="password">PAN Card No *</label>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1 }}
              className={formErrors.panid.length > 0 ? "error" : null}
              placeholder="PAN Card No."
              type="panid"
              name="panid"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.panid.length > 0 && (
              <span  style={{ color: 'red' }}className="errorMessage">{formErrors.panid}</span>
            )}
          </div>
          {/* <p className="font-small grey-text d-flex justify-content-end">
                Forgot
               <a  onClick={this.forgotpassword}
                   href="#!"
                 className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
               </a>        
                </p> */}
              <div className="text-center mb-4 mt-5">
               <MDBBtn
                  color="danger"
                type="button"
                className="btn-block z-depth-2"
                onClick={this.handleSubmit}     >
                 Log in
                </MDBBtn>
              </div>
            {/* <p className="font-small grey-text d-flex justify-content-center">
               New User Register.
                 <a onClick={this.sayHello}
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
               > Click
                 Register
            </a>
          </p> */}
          </form>
         </MDBCardBody>
         </MDBCard>
         </Grid>
      </MDBRow>
    </MDBContainer>
    );
  }
}

const styles = 
 {
 card: {
   maxWidth: 900,
   margin: "auto",
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

