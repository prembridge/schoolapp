import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Confetti from 'react-confetti'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../assets/ca.jpg'
import { useHistory } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BorderAllSharp, Style } from '@material-ui/icons';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBInputGroup } from 'mdbreact';
import { light } from '@material-ui/core/styles/createPalette';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import { breakpoints as bp } from "../../GlobalStyle";
import bg from "../assets/boy2.jpg";
import {
  Link,

} from "react-router-dom";
const Styles = styled.div`
.inform {
  padding: 70px;
    text-align: center;
}
.or p{
  margin-top: 150px;
}
.bun button{
  margin-top: 1.5rem;
  margin-left: 9.5rem;
}

.rcorners1 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 550px;
    height: 260px;
    margin-left: -9.5rem;
    margin-top: 1.5rem;
  }   
  .rcorners2 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 80px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 550px;
    height: 260px;
    margin-top: 1.5rem;
  }
  .rcorners3 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 85px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 550px;
    height: 260px;
    margin-left: 35.5rem;
    margin-top: -2rem;
  }

  @media all and (max-width: 768px) {
    .or p{
      text-align: center;
      margin-top: 24px;
      /* margin-right: 15px; */
      padding-right: 47px
    }
    .bun button{
      
  margin-left: 7.5rem;
    }
    .inform {
      
      margin-left: -1rem 
    }
    .rcorners1 {
      border-radius: 45px;
      border: 2px solid #000000;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 320px;
      height: 280px;
      margin-left: -4rem;
      margin-top: 3.5rem;
    }   
    .rcorners2 {
      border-radius: 45px;
      border: 2px solid #000000;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 320px;
      height: 260px;
      margin-left: -4rem;
      margin-top: 3.5rem;
    }
    .rcorners3 {
      border-radius: 45px;
      border: 2px solid #000000;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 320px;
      height: 260px;
      margin-left: 2rem;
      margin-top: 3.5rem;
    }
  
}`
export default function Newuser() {
  
  function forgot() {
    history.push("./terms")
  }

  const { register, handleSubmit, errors } = useForm();
  const [NewuserEmail, setFirstName] = useState('');
  const [GuestuserEmail, setGuestuserEmail] = useState('');
  const [VolunteerEmail, setVolunteerEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [messageguest, setMessageguest] = useState('');
  const [messagevol, setMessagevol] = useState('');
  const classes = useStyles();
  const history = useHistory();
  var NewuserEmaill = NewuserEmail
  var GuestuserEmaill = GuestuserEmail
  var VolunteerEmaill = VolunteerEmail
  localStorage.setItem("Newuseremail", NewuserEmaill)
  localStorage.setItem("GuestuserEmail", GuestuserEmaill)
  var getem = localStorage.getItem("Newuseremail")
  var getgu = localStorage.getItem("GuestuserEmail")
  console.log("name", getgu)
  console.log("guest", GuestuserEmaill)
  console.log("volunteer", VolunteerEmaill)



  const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i


  async function Vemail() {

    const email = NewuserEmaill

    console.log(email, "constemail")

    if (emailRegex.test(email)) {
      setIsValid(true);
     




      console.log("bbbbbbbbbbbbb")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "EmailID": NewuserEmaill
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/mailcheck", requestOptions)
        .then(response => response.json())
        .then(json => {
          var message = json.message
          var otp_verified = json.otp_verified
          console.log(otp_verified)
          console.log(json)
          if (message === "The E-mail already in use") {

            if (message === "The E-mail already in use" && otp_verified === "0") {
              //message = "You have already registered.Please complete OTP validation"
              alert("You have already registered.Please complete OTP validation.")
              Swal.fire({
                title: 'Enter vaild OTP',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function (email) {
                  return new Promise(function (resolve, reject) {
                    setTimeout(function () {

                      var myHeaders = new Headers();
                      myHeaders.append("Content-Type", "application/json");
                      var raw = JSON.stringify({
                        "otp": email,
                        "email": localStorage.getItem("Newuseremail")
                      });
                      var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                      };
                      fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/otpcheck", requestOptions)
                        .then(response => response.json())
                        .then(json => {
                          var message = json.message
                          // if(message === 'wrong otp"'){
                          //   alert("InVaild OTP")
                          // }
                          if (message === "correct otp") {

                            window.location = "./Newuserlogin";
                            reject('This email is already taken.')
                          } else {

                            resolve()
                            alert("Enter Valid OTP..");
                          }
                          console.log(json, "result in otp ver")
                        })
                        //.then(result => console.log(result ,"result in otp ver")

                        .catch(error => console.log('error', error));

                    }, 2000)
                  })
                },
                allowOutsideClick: false
              }).then(function () {

                // window.location = "./guestprofile";
              })
            } else {
              if (message === "The E-mail already in use" && otp_verified === "1") {
                alert("User is already registered. Please sign in")
                history.push('/Newuserlogin')
              }
            }

          } else {
            history.push('/Registation')
          }
          console.log(message, "json.........")
        })
        .catch(error => console.log('error', error));
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  }


  function guest() {
    const email = GuestuserEmail
    if (emailRegex.test(email)) {
      setIsValid(true);
     
      history.push('/Login')
    } else {
      setIsValid(false);
      setMessageguest('Please enter a valid email!');
    }

  }
  function volunteer() {
    const email = VolunteerEmail
    if (emailRegex.test(email)) {
      setIsValid(true);
     



      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "email": VolunteerEmail
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/volunteer", requestOptions)
        .then(response => response.text())
        .then(result => alert("Thank you so much for volunteering.With Us Our team will get back to you shortly "))
        .catch(error => console.log('error', error));
    } else {
      setIsValid(false);
      setMessagevol('Please enter a valid email!');
    }
  }
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
      <Container className="container">
        <div style={{ paddingLeft: '70px' }}>
          <Row>

            <Col>
              <div className="rcorners1">
                <h3>New Partner Registration</h3>

                <div


                  style={{ paddingTop: '40px', borderRadius: '40px' }}>

                  <MDBInputGroup containerClassName="mb-3" prepend="Email ID" hint=""
                    type="email" onChange={e => setFirstName(e.target.value)} required />

                  {/* {formErrors.firstName.length > 0 && (
              <span style={{ color: 'red' }} className="errorMessage">{formErrors.firstName}</span>
            )} */}
                </div>
                <div className="bun">
                  <button disabled={!NewuserEmail} onClick={Vemail} style={{ backgroundColor: "#FFEDD9", width: 150, height: 50, borderRadius: 50 }}>SIGN UP</button>
                </div>
                <div className={`message ${isValid ? 'success' : 'error'}`}>
                  {message}
                </div>
              </div>

            </Col>
            <div className="or">
            <p > OR</p>
            </div>
            <Col><div className="rcorners2">
              <h3>Guest Sponsor</h3>
              <div
                style={{ paddingTop: '40px', borderRadius: '40px' }}>

                <MDBInputGroup style={{}} containerClassName="mb-3" prepend="Email ID" hint="" onChange={e => setGuestuserEmail(e.target.value)} />

                {/* {formErrors.firstName.length > 0 && (
                <span style={{ color: 'red' }} className="errorMessage">{formErrors.firstName}</span>
              )} */}
              </div>
              {/* style={{ paddingLeft: '300px', }} */}
              <div className="bun">
                <button disabled={!GuestuserEmail} onClick={guest} style={{ backgroundColor: "#FFEDD9", width: 150, height: 50, borderRadius: 50 }}> SUBMIT</button>

              </div>
              <div className={`message ${isValid ? 'success' : 'error'}`}>
                {messageguest}
              </div>
            </div></Col>
          </Row>
        </div>
      </Container>
      {/* style={{ paddingTop: '40px', paddingLeft: "450px" }} */}
      <div className="inform">
        <h4>IMPORTANT </h4>
        <h6>
          - To be a regular partner to sponsor a child, please click SIGN UP</h6>
        <h6>
          - To donate a one time payment as a guest, please click SUBMIT </h6>
        <h6>
          - To join our team as a volunteer, please enter your details and click JOIN </h6>
      </div>

      <div className="rcorners3">
      {/* style={{ paddingLeft: '300px', paddingBottom: '10px' }} */}
        <div >
          <h3>Volunteer</h3>
        </div>
        <div

// style={{ paddingLeft: '150px', borderRadius: '40px', width: '550px' }}
          // style={{paddingTop:'0px' , paddingLeft:'150px',borderRadius:'40px',width:'550px'}}>
          >
          <MDBInputGroup style={{ backgroundColor: '#FFEDD9' }} containerClassName="mb-3" prepend="Email ID" hint="" type="email" onChange={e => setVolunteerEmail(e.target.value)}
            name="email" />

          {/* {formErrors.firstName.length > 0 && (
              <span style={{ color: 'red' }} className="errorMessage">{formErrors.firstName}</span>
            )} */}
        </div>
        {/* style={{ paddingLeft: '402px' }} */}
        <div  className="bun" >
          <button disabled={!VolunteerEmail} onClick={volunteer}
            style={{ backgroundColor: "#FFEDD9", width: 150, height: 50, borderRadius: 50 }}>JOIN</button>
        </div>
        <div className={`message ${isValid ? 'success' : 'error'}`}>
          {messagevol}
        </div>
      </div>

      <div style={{ paddingTop: '50px' }}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/fi.png")}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/second.png")}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/th.png")}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
      </div>
      <footer style ={{backgroundColor:' #FFEDD9'}}  class="page-footer font-small blue">


<div class="footer-copyright text-center py-3"> <h7 style={{color:'black' ,fontSize:'15px'}}>© 2021 Copyright</h7>
  <a style={{marginLeft:'10px' ,color:'black'}} href="https://panaah.org/"> www.panaah.org</a>
  <br></br>
  <Link style={{color:'black'}} onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
      </div>
    </Styles>

  );
}
const STYLE = {
  infoColor: {
    color: 'green'
  },
  warningColor: {
    color: 'orange'
  },
  errorColor: {
    color: 'red'
  }
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root1: {
    maxWidth: 2050,
    borderColor: "#0A0A09",
    BorderAllSharp: '2px'
  },
  media: {
    height: 150,
  },


  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));