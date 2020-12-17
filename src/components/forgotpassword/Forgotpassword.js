import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { useHistory } from "react-router-dom";
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
  
  const history = useHistory()
  const nextPage = () => {
       
    history.push("./Registation");
   
   }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard style={{ backgroundColor:'#8cb6fa'} } > 
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Forgotpassword
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
          
              <MDBInput
                label="Your Email "
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={Submit}
                >
                  Submit
                </MDBBtn>
              </div>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Forgotpassword;