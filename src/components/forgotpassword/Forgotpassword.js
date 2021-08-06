import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBInputGroup } from 'mdbreact';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Styles = styled.div`

.rcorners1 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
    width: 550px;
    height: 350px;
    margin-left: 30.5rem;
    margin-top: 8.5rem;
  }`
// const mailgun = require('mailgun-js')({
//  api_key = 'key-28ec2fb77b09201ee40d5d2f974ff488-360a0b2c-28fc800c',
//  domain = 'sandboxed0967b9dfa04800b666367c5b13bab0.mailgun.org'
// })

const Submit =()=>{

// const emailData = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'g.premkumar77@gmail.com',
//   subject: 'Reset Password',
//   text: `A password reset has been requested for the MusicList account connected to this email address. If you made this request, please click the following link: https://musiclist.com/account/change-password/${foundUser.passwordReset} ... if you didn't make this request, feel free to ignore it!`,
//   html: `<p>A password reset has been requested for the MusicList account connected to this email address. If you made this request, please click the following link: <a href="https://musiclist.com/account/change-password/${foundUser.passwordReset}&quot; target="_blank">https://musiclist.com/account/change-password/${foundUser.passwordReset}</a>.</p><p>If you didn't make this request, feel free to ignore it!</p>`,
// };
// mailgun.messages().send(emailData, (error, body) => {
//   if (error || !body) {
//     result = res.send(JSON.stringify({ error: 'Something went wrong while attempting to send the email. Please try again.' }));
//   } else {
//     result = res.send(JSON.stringify({ success: true }));
//   }
// });
}
const Forgotpassword = () => {

  async  function  postemail(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "email": email
      
    });
    console.log("email",email)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/forgotpass", requestOptions)
      .then(response => response.text())
      .then(result => alert("We have sent a password reset link to your registered email id. Please reset password using the link"))
      .catch(error => console.log('error', error));
  }
  
const[email,setEmail] = useState("")
  const history = useHistory()
  const nextPage = () => {
       
    history.push("./Registation");
   
   }
  return (
    <Styles>
    <div className="rcorners1">
   <h2 style={{paddingLeft:'70px',fontFamily: 'Fuggles, cursive',marginLeft:'-28px' }}> Forgot Password?</h2>
<br></br>
   <h8 style={{marginLeft:'45px'}}>Enter your email address</h8>
    <MDBContainer  style ={{marginTop:'-30px'}}>
          
           
           <MDBRow>
        
         
       
         <MDBCardBody className="mx-4 mt-4" style={{ maxWidth :'400',} }>
         
           
        
             <div>
             <MDBInputGroup  style={{}} containerClassName="mb-3" prepend="Email ID" hint=""  onChange={e => setEmail(e.target.value)} />
           
           </div>
           <br></br>
           
               <div className="text-center mb-4 mt-5">
                <button style={{marginTop:'-49px',backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50,fontFamily: 'Fuggles, cursive'}}
                  
                 type="button"
                 className="btn-block z-depth-2"
                 onClick={postemail}
                >
                Submit
                 </button>
               </div>
     
          </MDBCardBody>
     
          {/* </Grid> */}
       </MDBRow>
     </MDBContainer>
   </div>
    </Styles>
      
  );
};

export default Forgotpassword;