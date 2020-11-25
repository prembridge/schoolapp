
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { useHistory } from "react-router-dom";
//import car from  '../assets/cantact.jpeg'

import { Height } from "@material-ui/icons";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function Groups() {
  return (
      <div>
    <div className="App" style={{ backgroundImage: `url(${require("../assets/cantact.jpeg")})` , height: '450px'}}>
      <WhiteTextTypography variant="h3">
      Get in touch with us
      </WhiteTextTypography>
    </div>
    <div style={{align:'center'}}> 
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard style={{ backgroundColor:'#dfbf9f'} } > 
            <div className="header pt-3 grey lighten-2">
              
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                label="Your Mobile Number"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
               <MDBInput
                label="Your Message"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
             <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Submit
                </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <div>
      
    </div>
    </div>
  );
}
