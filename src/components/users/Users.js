import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import CarouselUser from './CarouselUser';
import { breakpoints as bp } from "../../GlobalStyle";
import { useHistory } from "react-router-dom";
import {
  Link,

} from "react-router-dom";
import styled from "styled-components";
const Styles = styled.div`
.ourvision {
  background-color: rgb(255, 237, 217);
  margin-top: -20vw !important;
  height: 50%;
  width: 100%;
  
}
.ourvision h4{
  font-size: 4vw;
font-family: 'Montserrat, sans-serif';
margin-top: 4.5rem;
left: 35vw !important;
top: 225vw !important;
text-align: center ;
color: #000 !important;
left: 5vw;
}
.ourvision h6{
  font-size: 36px;
  font-family: "Raleway,sans-serif";
  margin-top: 0.5rem;
  left: 25vw !important;
  top: 530vw !important;
  color: #757575 !important;
  left: 5vw;
 
  font-Size:40px,
  
  font-Style: italic,
  text-Align:center
}
  @media (max-width: ${bp.mobile}){
    .ourvision h4{
     font-size: 8vw !important;
     font-family: "Raleway,sans-serif";
   
    }
    .ourvision h6{
      font-size: 25px;
      font-family: "Raleway,sans-serif";
   
     }
  }`


export default function Users() {
  const history = useHistory();
  function forgot() {
    history.push("./terms")
  }

  return (
    <div>
    <Styles>
      <div className="ourvision">
        <Grid >
          <div >     
              <h4>OUR VISION</h4>
              <h6 >"Reaching the last, the least and the lost
                for a better tomorrow" </h6>

          </div>
          <div>
            <CarouselUser/>
          </div>
          <footer class="page-footer font-small blue">


<div class="footer-copyright text-center py-3"> <h7 style={{color:'black' ,fontSize:'15px'}}>© 2021 Copyright</h7>
  <a style={{marginLeft:'10px',color:'black'}} href="https://panaah.org/"> www.panaah.org</a>
  <br></br>
  <Link style={{color:'black'}} onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
        </Grid>
      </div>
    </Styles>
    </div>
  );
}