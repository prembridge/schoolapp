import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBInputGroup } from 'mdbreact';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";
import {
  Link,

} from "react-router-dom";
import { breakpoints as bp } from "../../GlobalStyle";
const Styles = styled.div`

.rcorners1 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
    width: 550px;
    height: 550px;
    margin-left: 30.5rem;
    margin-top: 8.5rem;
}
@media all and (max-width: 768px) {
  .rcorners1{
   
    border: 2px solid #000000;
    padding-right: 30rem;
  
    padding-top: 0px;
    width: 800px;
    height: 500px;
    margin-left: -5rem;
    
  }
  }`
// const mailgun = require('mailgun-js')({
//  api_key = 'key-28ec2fb77b09201ee40d5d2f974ff488-360a0b2c-28fc800c',
//  domain = 'sandboxed0967b9dfa04800b666367c5b13bab0.mailgun.org'
// })






const Resetpassword = () => {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
    const [id ,setId] =useState('')
    const [password ,setPassword] = useState('')
    const [confirmpass ,setConfirmpass] =useState('')
    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      criteriaMode: "all"
    });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,10}$/;

 

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get("token");
        setId(id)
    })


  async  function  postemail(){
    const pass = password;
    if (passwordRegex.test(pass)) {
      setIsValid(true);
     // setMessage('');
   
    if (password !== confirmpass) {
        alert("Passwords don't match");
    } else {
        // make API call
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "pass": password,
      "token": id
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/resetpassword", requestOptions)
      .then(response => response.json())
      .then(result =>  {
        var data = result.data
        if(data === "Password successfully changed")
        console.log(data)
        alert("The password has been changed successfully")
        history.push("/Newuserlogin")
        // nextPage()
      })
     
      .catch(error => console.log('error', error));
      
  } } else {
    setIsValid(false);
    setMessage('Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character');
  }
}

  const history = useHistory()
  
  return (
    <Styles>
    <div className="rcorners1">
   <h2 style={{paddingLeft:'70px',  fontFamily: 'Montserrat,sans-serif',marginLeft:'-28px' }}> Reset Password </h2>
<br></br>
 
    <MDBContainer  style ={{marginTop:'-30px'}}>
          
           
           <MDBRow>
        
         
       
         <MDBCardBody className="mx-4 mt-4" style={{ maxWidth :'400',} }>
        
         <div  className="password">
              <label style={{  fontFamily: 'Montserrat,sans-serif'}} htmlFor="password"> Password </label>
              </div>
        
             <div>
             <MDBInput   
                 type="password" {...register('password', { required: true,maxLength: 6,
                  })}  onChange={e => setPassword(e.target.value)}   />
                 
           
           </div>
           <br></br>
        
           <div  className="password">
              <label style={{  fontFamily: 'Montserrat,sans-serif'}} htmlFor="password"> ConfirmPassword </label>
              </div>
            
           <div>
             <MDBInput   
                 type="password" {...register('password', { required: true, maxLength:6,
                  })}  onChange={e => setConfirmpass(e.target.value)}   />
                 
    
           
           </div>
           <br></br>
           
               <div className="text-center mb-4 mt-5">
                <button disabled={!password ||!confirmpass}  style={{marginTop:'-49px',backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50,fontFamily: 'Fuggles, cursive'}}
                  
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
     {/* <form onSubmit={handleSubmit(onSubmit)}>
     <label>First Name</label>

<MDBInput type="firstName" {...register('firstName', { required: true, pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          }})} />
{errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
       <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
      <input type="submit" />
    </form> */}
   </div>
    </Styles>
      
  );
};

export default Resetpassword;
