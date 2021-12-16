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
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
//import Login, { Groups } from './Campaigns'
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

import { breakpoints as bp } from "../../GlobalStyle";
import bg from "../assets/boy2.jpg";
import styled from "styled-components";
const Styles = styled.div`


  @media (max-width: ${bp.mobile}) {
    
    .textmain {
      width: 908px;
      margin-left: -580px;
     
     
    }
    .cardm{
      margin-left: -371px;
    }
    
  }`
const emailRegex = RegExp(
  RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
);
const PanRegex = RegExp(
  RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
);
const passRegex = RegExp(
RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/)
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
   // const useHistory = history;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.state = {
        showComponent: false,
        redirect: false,
      // username: "",
      // password: "",
      message: "",
      input: {},
      open: false,
      UserName: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmpassword:null,
     mobileNo:null,
     Address:null,
     Pincode:null,
     City:null,
     State:null,
     Country:null,
     Pincode:null,
     panid:null,
     disable: true,
      formErrors: {
        firstName: "",
        lastName: "",
        UserName:"",
        email: "",
        password: "",
        confirmpassword:"",
       mobileNo:"",
       Address:"",
       Pincode:"",
       City:"",
       State:"",
       Country:"",
       Pincode:"",
       panid:""
      }
    };
  }
  saypay =()=> {
    this.props.history.push("./Donation");
  }

 
  handleSubmit = e => {
  
    localStorage.setItem("Fname",this.state.firstName)
     
    
    e.preventDefault();

     if (formValid(this.state)) {
      
     } else {
      // alert("FORM INVALID - DISPLAY ERROR MESSAGE");
     }
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
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "FirstName":this.state.firstName,
      "LastName":this.state.lastName,
      "EmailID":localStorage.getItem("Newuseremail"),
      "Phonenumber":this.state.mobileNo,
      "password":this.state.password,
      "Address":this.state.Address,
      "Pincode":this.state.Pincode,
      "City":this.state.City,
      "State":this.state.State,
      "Country":this.state.Country,
      "panid":this.state.panid
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/register", requestOptions).then(response => response.text())
    .then(result => { var text = JSON.parse(result)
      alert("Thank you!Registration successfully completed!")
      console.log('result', text.message)
      console.log("otp",text.otp)
      localStorage.setItem("otp",text.otp)
      var tokenvalue = localStorage.getItem("otp")
      console.log(text.message);
      if(text.message === 'The E-mail already in use')
      {
        this.props.history.push('/Registation');
      } 
      else {
        Swal.fire({
          title: 'Enter OTP',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: function (email) {
        return new Promise(function (resolve, reject) {
          setTimeout(function() {
            if (email === tokenvalue) {
              window.location ="./Newuserlogin"
              //reject('This email is already taken.')
            } else {
             
             resolve()
             alert("please enter a Valid  OTP..");
            }
          }, 2000)
        })
      },
      allowOutsideClick: false
        }).then(function() {
       //  {"data":"Succesfully registered.","otp":5972}
         // window.location = "./guestprofile";
      })
      }
      

      
      
      // alert(result)
        // this.props.history.push('/Newuserlogin');
         
      }).catch(error => console.log('error', error));
    
      
   
  
    
  };

  handleChange = e => {
    //this.setState({disable: e.target.value === ''})
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    //console.log("formerror=",formErrors.firstName)

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
        formErrors.password = passRegex.test(value) ? "" :"Minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
          // value.length < 6 ? "minimum 6 characaters required" : "";
        break;
        case "confirmpassword":
          formErrors.confirmpassword =  this.state.password !== this.state.confirmpassword ? " ": "Passwords don't match" ;
        break;
        case "panid":
          formErrors.panid =PanRegex.test(value)
            ? ""
            : "invalid PAN ";
          break;
        case "mobileNo":
          formErrors.mobileNo =
            value.length < 10 ? "minimum 10 characaters required" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    console.log("formerror in state",this.state.formErrors)
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
    this.props.history.push("./Newuserlogin");
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
    <Styles>
       <div
          class="bg_image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "130vh",
            color: "#000000",
          }}
        >
      <Grid container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>
        <div class="container-fluid">
        <div className='textmain'>
          <h3 style={{paddingLeft:'590px', alignItems:"center"}}>New Partner Registation</h3>
          </div> 
          <div className ='cardm'>
      <MDBCard variant="outlined" className={styles.card}  style={{ maxWidth :'1100px',borderColor:"#1c1a14",paddingLeft:'25px',marginLeft:'350px',} }>
        <CardContent align-items-center>
      
      <div className="wrapper">
      <div className="form-wrapper">
      

        <form onSubmit={this.handleSubmit} noValidate>
        <div class="form-row">
        <div class=" col-md-6">
          <div className="firstName"> 
           < label htmlFor="firstName">First Name* </ label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.firstName.length > 0 ? "error" : null}
              hint="First Name"
              type="text"
              name="firstName"
              noValidate
              
              onChange={this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span style={{ color: 'red' }} className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          </div>
          
          <div class=" col-md-6">
          <label htmlFor="lastName">Last Name* </label>
           <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.lastName.length > 0 ? "error" : null}
              hint="Last Name"
              type="text"
              name="lastName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span   style={{ color: 'red' }}className="errorMessage">{formErrors.lastName}</span>
            )}
           </div>
        
        <div class="col-md-6">
          <div className="email">
            <label htmlFor="email">UserName/Email ID *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.email.length > 0 ? "error" : null}
              hint={localStorage.getItem("Newuseremail")}
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
              disabled />
            {formErrors.email.length > 0 && (
              <span   style={{ color: 'red' }} className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          </div>
          <div class="col-md-6">
          <div className="password">
            <label htmlFor="password">Password *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.password.length > 0 ? "error" : null}
              hint="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span  style={{ color: 'red' }} className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          </div>
          <div class="col-md-6">
          <div className="password">
            <label htmlFor="password">ConfirmPassword *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.confirmpassword.length > 0 ? "error" : null}
              hint="password"
              type="password"
              name="confirmpassword"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.confirmpassword.length > 0 && (
              <span  style={{ color: 'red' }} className="errorMessage">{formErrors.confirmpassword}</span>
            )}
          </div>
          </div>
          <div class="col-md-6">
          <div className="mobileNo">
            <label htmlFor="mobileNo">Mobile No *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.mobileNo.length > 0 ? "error" : null}
              hint="MobileNo"
              type="mobileNo"
              name="mobileNo"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.mobileNo.length > 0 && (
              <span   style={{ color: 'red' }} className="errorMessage">{formErrors.mobileNo}</span>
            )}
          </div>
       </div>
       
       <div class="col-md-6">
          <div className="Address">
            <label htmlFor="Address">Address *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.Address.length > 0 ? "error" : null}
              hint="Address"
              type="Address"
              name="Address"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.Address.length > 0 && (
              <span   style={{ color: 'red' }} className="errorMessage">{formErrors.Address}</span>
            )}
          </div>
          </div>
         
          <div class=" col-md-6">
          <div className="State">
            <label htmlFor="password">State *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.State.length > 0 ? "error" : null}
              hint="State"
              type="State"
              name="State"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.State.length > 0 && (
              <span   style={{ color: 'red' }}className="errorMessage">{formErrors.State}</span>
            )}
          </div>
          </div>
          <div class=" col-md-6">
          <div className="City">
            <label htmlFor="password">City *</label>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.City.length > 0 ? "error" : null}
              hint="City"
              type="City"
              name="City"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.City.length > 0 && (
              <span  style={{ color: 'red' }} className="errorMessage">{formErrors.City}</span>
            )}
          </div>
          </div>
          <div class="col-md-6">
          <div className="Pincode">
            <label htmlFor="Pincode">Pincode *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.Pincode.length > 0 ? "error" : null}
              hint="Pincode"
              type="Pincode"
              name="Pincode"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.Pincode.length > 0 && (
              <span  style={{ color: 'red' }} className="errorMessage">{formErrors.Pincode}</span>
            )}
          </div>
          </div>
          <div class="col-md-6">
          <div className="Country">
            <label htmlFor="Country">Country *</label>
            </div>
            <div>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.Country.length > 0 ? "error" : null}
              hint="Country"
              type="Country"
              name="Country"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.Country.length > 0 && (
              <span   style={{ color: 'red' }}className="errorMessage">{formErrors.Country}</span>
            )}
          </div>
          </div>
          <div class=" col-md-6">
          <div className="panid">
            <label htmlFor="password">PAN Card No *</label>
            <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'450px' }}
              className={formErrors.panid.length > 0 ? "error" : null}
              hint="PAN Card No."
              type="panid"
              name="panid"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.panid.length > 0 && (
              <span  style={{ color: 'red' }}className="errorMessage">{formErrors.panid}</span>
            )}
          </div>
          </div>
          {/* <div className="createAccount">
            <button  onClick={this.handleSubmit} type="submit">Submit</button>
            <button onClick={this.sayHello} type = "submit">Already Have an Account?</button> */}
            {/* {this.state.showComponent ?
           <Groups/> :
           null
        } */}
          
          </div>
         
        </form>
        <div  style={{   display: "flex",
          justifyContent: "center",
          alignItems: "center"}} className="createAccount">
            <button disabled={!this.state.firstName|| !this.state.lastName ||!this.state.password|| !this.state.confirmpassword ||!this.state.panid } style={{backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50 }} onClick={this.handleSubmit} type="submit">Submit</button>
            {/* disabled={!this.state.firstName|| !this.state.lastName ||!this.state.password|| !this.state.confirmpassword ||!this.state.panid||!this.state.email } */}
            {/* <h5 onClick={this.sayHello} type = "submit">Already Have an Account?</h5> */}
            </div>
      </div>
    </div>
    </CardContent>
    </MDBCard>
    </div>
    </div>
    </Grid>
    </div>
    </Styles>
    );
  } 
}
const styles = 
 {
 card: {
   maxWidth: 500,
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
