import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBInputGroup } from 'mdbreact';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import {
  Link,

} from "react-router-dom";
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
  }`
// const mailgun = require('mailgun-js')({
//  api_key = 'key-28ec2fb77b09201ee40d5d2f974ff488-360a0b2c-28fc800c',
//  domain = 'sandboxed0967b9dfa04800b666367c5b13bab0.mailgun.org'
// })


const Resetpassword = () => {
  const { register, handleSubmit, errors } = useForm();
    const [id ,setId] =useState('')
    const [password ,setPassword] = useState('')
    const [confirmpass ,setConfirmpass] =useState('')


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get("token");
        setId(id)
    })


  async  function  postemail(){
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
    fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/resetpassword", requestOptions)
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
      
  }
}

  const history = useHistory()
  
  return (
    <Styles>
    <div className="rcorners1">
   <h2 style={{paddingLeft:'70px',fontFamily: 'Fuggles, cursive',marginLeft:'-28px' }}> Reset Password </h2>
<br></br>
 
    <MDBContainer  style ={{marginTop:'-30px'}}>
          
           
           <MDBRow>
        
         
       
         <MDBCardBody className="mx-4 mt-4" style={{ maxWidth :'400',} }>
         
         <div  className="password">
              <label style={{fontFamily: 'Fuggles, cursive'}} htmlFor="password"> Password </label>
              </div>
        
             <div>
             <MDBInput  placeholder="Password"
                type="password"
                name="password" style={{}} containerClassName="mb-3" prepend="New Password" hint=""  onChange={e => setPassword(e.target.value)}  />
           
           </div>
           <br></br>
        
           <div  className="password">
              <label style={{fontFamily: 'Fuggles, cursive'}} htmlFor="password"> ConfirmPassword </label>
              </div>
            
           <div>
             <MDBInput    placeholder="Password"
                type="password"
                name="password" style={{}} containerClassName="mb-3" prepend="Confirm Password" hint=""   onChange={e => setConfirmpass(e.target.value)}   />
           
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
             
     
          </MDBCardBody>
     
          {/* </Grid> */}
       </MDBRow>
     </MDBContainer>
   </div>
    </Styles>
      
  );
};

export default Resetpassword;