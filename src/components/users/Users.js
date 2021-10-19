
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
.ourvision h3{
  font-size: 5vw;
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
  @media (max-width: ${bp.mobile}) {
    .ourvision h3{
      margin-top: -20vw !important;
      background-color: rgb(255, 200, 217);
      margin-left: -46px;
      font-size: 10vw !important;
      font-family: 'Montserrat, sans-serif';
      top: 250vw !important;
      color: #000 !important;
    }
    .ourvision h6{
      font-size: 4vw !important;
      font-family: "Fira Sans sans-serif", 'monospace';
      // margin-top: 5.5rem !important;
      left: 25vw !important;
      top: 560vw !important;
      color: #000 !important;
      
    }
  }`


export default function Users() {
  const history = useHistory();
  function forgot() {
    history.push("./terms")
  }

  return (
    <Styles>
      <div className="ourvision">
        <Grid >
          <div>     
              <h3>OUR VISION</h3>
              <h6 >"Reaching the last, the least and the lost
                for a better tomorrow" </h6>

          </div>
          <div>
            <CarouselUser/>
          </div>
          <footer class="page-footer font-small blue">


<div class="footer-copyright text-center py-3">© 2021 Copyright:
  <a href="https://panaah.org/"> panaah.org</a>
  <br></br>
  <Link  onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
        </Grid>
      </div>
    </Styles>
  );
}
