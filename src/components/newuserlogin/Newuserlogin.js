import React, { Component, useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { usercontext } from '../header/Header'
import Forgotpassword from "../forgotpassword/Forgotpassword";
import { breakpoints as bp } from "../../GlobalStyle";
import {
  Link,

} from "react-router-dom";
import bg from "../assets/boy2.jpg";
const Styles = styled.div`

.rcorners1 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
    width: 550px;
    height: 450px;
    margin-left: 30.5rem;
    margin-top: 8.5rem;
}
.forgot{
  padding-left: 9rem
  
}

    @media all and (max-width: 768px) {
      .rcorners1{
        font-family: Raleway;
        border: 2px solid #000000;
        padding-right: 1.0rem;
        padding-left: 0.5rem ! important;
        padding-top: 0px;
        width: 360px !important;
        height: 400px;
        margin-left: 0.5rem;
        margin-right:2.5rem;
        
      }
      .forgot{
        padding-left: 9rem;
        width: 300px;
        
      }
  }`
const emailRegex =
  RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

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

export default function Newuserlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");
  const history = useHistory();
  const { state, dispatch } = useContext(usercontext)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function getdata() {
    // this.setState({ isLoading: true });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "email": email,
      "password": password,
    });



    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };



    await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/login", requestOptions)
      .then(response => response.json())
      //console.log(response)
      .then(json => {
        var resdata = json.token;
        localStorage.setItem("resdata", resdata)
        var res = json.message;
        seterr(res)

        console.log("json...." + JSON.stringify(json))





      }).catch(error => console.log('error', error));


    //console.log( "res,,,,"+this.state.token)
    //var myHeaders = new Headers();

    fetchdata()



  }

  async function fetchdata() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("resdata")}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/getuser", requestOptions)
      .then(response => response.json())
      .then(json => {
        var id = json.user.id
        var Address = json.user.Address
        var resdata = json.user.FirstName;
        var EmailID = json.user.EmailID;
        var phonenumber = json.user.Phonenumber
        var panid = json.user.PANID
        var lastN = json.user.LastName
        var City = json.user.City
        var State = json.user.State
        var Country = json.user.Country
        var Pincode = json.user.Pincode
        var New_plan = json.user.New_plan
        console.log("resdara", resdata)
        console.log("resdara", id)
        localStorage.setItem("New_plan", New_plan)
        localStorage.getItem("New_plan")
        localStorage.setItem("Addres", Address)
        localStorage.setItem("EmailID", EmailID)
        localStorage.setItem("phone", phonenumber)
        localStorage.setItem("panid", panid)
        localStorage.setItem("lastN", lastN)
        localStorage.setItem("City", City)
        localStorage.setItem("State", State)
        localStorage.setItem("Country", Country)
        localStorage.setItem("Pincode", Pincode)
        localStorage.getItem("phone")
        var add = localStorage.getItem("Addres")
        var email = localStorage.getItem("EmailID")

        var idd2 = localStorage.setItem("id", id)
        var idd = localStorage.getItem("id")
        console.log("newplan", localStorage.getItem("New_plan"))
        console.log("wht is in it" + JSON.stringify(json))
        var savetoken = localStorage.setItem("name", resdata)
        var tokenvalue = localStorage.getItem("name")
        console.log("wht is in it" + tokenvalue)
        dispatch({ type: 'USER', playload: true })
        history.push("./Donation");
        // var res = json.message;
        //   this.setState({

        //     err:res,
        //  })
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  function forgot() {
    history.push("./Forgotpassword")
  }

  return (

    <Styles>
      
      <div className="rcorners1">
    
        
        <h2 style={{ paddingLeft: '70px', fontFamily: 'Raleway', marginLeft: '-28px',marginTop:'30px' }}> Sign In</h2>
        <MDBContainer style={{ marginTop: '-30px' }}>


          <MDBRow>



            <MDBCardBody className="mx-4 mt-4" style={{ maxWidth: '400', }}>


              <div className="email">
                <label style={{ fontFamily:  'Raleway' }} htmlFor="email">Email ID </label>
              </div>
              <div>
                <MDBInput
                  // className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* {formErrors.email.length > 0 && (
                <span   style={{ color: 'red' }} className="errorMessage">{formErrors.email}</span>
              )} */}
              </div>
              <div className="password">
                <label style={{ fontFamily: ' Raleway' }} htmlFor="password">Password </label>
              </div>
              <div>
                <MDBInput
                  // className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* {formErrors.password.length > 0 && (
                <span  style={{ color: 'red' }} className="errorMessage">{formErrors.password}</span>
              )} */}
              </div>

              <div className="text-center mb-4 mt-5">
                <button style={{ marginTop: '-49px', backgroundColor: "#FFEDD9", width: 150, height: 50, borderRadius: 50, fontFamily: ' Raleway' }}

                  type="button"
                  className="btn-block z-depth-2"
                  onClick={getdata}>
                  Sign In
                </button>
                <div className="forgot">
                <Link  onClick={forgot}> Forgot password</Link>
                </div>
              </div>
              {/* <div>
            <Link style={{paddingLeft:'220px',marginTop:'-990px'}} onClick={forgot}> Forgot password</Link>
          </div> */}

              <h2 style={{color:'red'}}>{err}</h2>
            </MDBCardBody>

            {/* </Grid> */}
          </MDBRow>
        </MDBContainer>
      </div>
    
    </Styles>



  );



}





