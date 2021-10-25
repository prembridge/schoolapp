import React, { Component, useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { useHistory } from "react-router-dom";
//import car from  '../assets/cantact.jpeg'
import { Button } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import bg from "../assets/boy2.jpg";

import {
  Link,

} from "react-router-dom";
import { breakpoints as bp } from "../../GlobalStyle";
import styled from "styled-components";

const Styles = styled.div`


.rcorners1 {
    //   border-radius: 45px;
    //  border: 2px solid #000000;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 0px;
    padding-bottom: 20px;
    width: 800px;
    height: 700px;
    margin-left: 25.5rem;
    margin-top: 10px;
  }
  @media (max-width: ${bp.mobile}) {
    .rcorners1{
      border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 40px;
    padding-right: 20px;
    padding-top: 0px;
    padding-bottom: 20px;
    width: 340px;
    height: 600px;
    margin-left: 0.5rem;
    margin-top: 10px;
      
    }
  
  `
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);



export default function Contactus() {
  const history = useHistory();
  function forgot() {
    history.push("./terms")
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function postdata() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "subject": subject,
      "message": message
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/contact", requestOptions)
      .then(response => response.text())
      .then(result => alert("Thank you for getting in touch. Our team will get in touch shortly."))
      .catch(error => console.log('error', error));

  }
  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: '100%',
        color: "#000000",
      }}
    >
      <Styles>
        {/* <div
          class="bg_image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#000000",
          }}
        > */}
        <div className="rcorners1">
          <div class="container contact">
            <div class="row" >
              <div>
                <div class="contact-info">
                  {/* <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/> */}

                  <h4 >We would love to hear from you !</h4>

                </div>
              </div>
              <div class="col-md-9">
                <div class="contact-form">
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="fname">Name:</label>
                    <div class="col-sm-10">
                      <MDBInput type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"
                        onChange={(e) => setName(e.target.value)}></MDBInput>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="lname">Email:</label>
                    <div class="col-sm-10">
                      <MDBInput type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"

                        onChange={(e) => setEmail(e.target.value)}> </MDBInput>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Subject:</label>
                    <div class="col-sm-10">
                      <MDBInput type="email" class="form-control" id="email" placeholder="Enter email" name="email"
                        onChange={(e) => setSubject(e.target.value)}></MDBInput>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-2" for="comment">Message:</label>
                    <div class="col-sm-10">
                      <textarea
                        onChange={(e) => setMessage(e.target.value)} class="form-control" rows="5" id="comment"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <Button style={{ backgroundColor: "#FFEDD9", width: 150, height: 50, borderRadius: 50  }} type="submit" class="btn btn-default" onClick={postdata}>Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Styles>
      <br></br>
      <footer style ={{backgroundColor:' #FFEDD9'}} class="page-footer font-small blue">


<div class="footer-copyright text-center py-3"> <h7 style={{color:'black' ,fontSize:'15px'}}>© 2021 Copyright</h7>
  <a style={{marginLeft:'10px',color:'black'}} href="https://panaah.org/"> panaah.org</a>
  <br></br>
  <Link style={{color:'black'}} onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
    </div>
  );
}
