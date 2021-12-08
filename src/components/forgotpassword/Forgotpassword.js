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
}
    @media all and (max-width: 768px) {
      
      .rcorners1{
        margin-top: 50px;
        margin-left: -91px
       
        }
        
    
  }`
// const mailgun = require('mailgun-js')({
//  api_key = 'key-28ec2fb77b09201ee40d5d2f974ff488-360a0b2c-28fc800c',
//  domain = 'sandboxed0967b9dfa04800b666367c5b13bab0.mailgun.org'
// })

const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
const Forgotpassword = () => {
  const[emaill,setEmail] = useState("")
  const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const history = useHistory()
 
  async  function  postemail(){
    const email = emaill;
    if (emailRegex.test(email)) {
      setIsValid(true);
     
   
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "email": emaill
      
    });
    console.log("email",emaill)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/forgotpass", requestOptions)
      .then(response => response.text())
      .then(result => alert("We have sent a password reset link to your registered email id. Please reset password using the link"))
      .catch(error => console.log('error', error));
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }}
  

  const nextPage = () => {
       
    history.push("./Registation");
   
   }
  return (
    <Styles>
    <div className="rcorners1">
   <h2 style={{paddingLeft:'70px',fontFamily: ' Raleway',marginLeft:'-28px' }}> Forgot Password?</h2>
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
                <button style={{marginTop:'-49px',backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50,fontFamily: ' Raleway'}}
                  
                 type="button"
                 className="btn-block z-depth-2"
                 onClick={postemail}
                >
                Submit
                 </button>
               </div>
     <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
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