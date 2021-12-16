import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";
import bg from "../assets/boy2.jpg";
import { useHistory } from "react-router-dom";
import {
  Link,

} from "react-router-dom";
const Styles = styled.div`
.App{
  padding-top: 20px; 
  padding-left: 3rem;
  font-size: 1.3vw;
    font-family: 'Raleway';
 width:100%
 font-Style: italic,
  text-aline:'Justfiy'
  
}




  @media all and (max-width: 768px) {
    .App{
      margin-left: -23 px;
      margin-right: 45px;
    padding-top: 20px;
    padding-left: -5rem;
    font-size: 5vw;
    font-family: 'Raleway';
    text-aline:'Justfiy'
      
    }
   .ourstory{
    font-size: 3vw;
   }
  
}`

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function Groups() {
  const history = useHistory();
  function forgot() {
    history.push("./terms")
  }
  return (
    <Styles>
        <div
          class="bg_image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "130vh",
            width:"100%",
            color: "#000000",
          }}
        >
      <div className="App">
    <div className="ourstory">
      <h2 style={{paddingTop:'10px',fontFamily:'Raleway,sans-serif',fontSize: '50px',}}>
      Our Story
      </h2>
    </div>
    <div  style={{ textAlign:"justify"}}>
    {/* style={{fontFamily:'Raleway,sans-serif',fontSize: '25px', textAlign:"justify",paddingBottom:'90px', paddingLeft: '100px', paddingRight: '100px'}} */}
      <p>
      Our history dates back to the winter of 1988 in the slums of Ambedkar Nagar in Ludhiana, Punjab. A young zealous couple demonstrated responsibility toward the education of children in the slum in their neighbourhood. Surender was a carpenter and lived in a one room house with his wife and three children. While Surender went to work every day, his wife used her time to teach basic education to a few children in the slum, she would also provide some snack to those she taught tuition. These children otherwise would play on the road, beg, or pick rags from the garbage as their parents were migrant workers and couldn’t even afford a proper meal for them.  Soon she had 11 children from the slum visiting her home and she encouraged them by being consistent in serving them. However, as the numbers went up, Surender and his wife found it difficult to sustain this support (Surender was the only earning member for the family and this initiative).  
<br/>
<br/> 

Around this time Dr. Annie and her friends visited the slum to celebrate Christmas with the community. Surender and his wife shared their burden and constrains of not being able to help all the children due to their limitations. The need was significant and leaving these children in their condition was certainly not a sensible option.  They all realized helping these people was not just about celebrating with them and giving gifts but something more and sustainable was needed. As they prayed, Dr. Annie felt the call to serve these children in the slum. Soon she was involved in organising a space and other provisions required to continue the informal education support for the poor children of Ambedkar Nagar along with Surender’s wife. She got the support of her friend the principal of a renown Christian convent in Ludhiana. Together they traded few young women and social workers to be able to teach primary school education.   
<br/>
<br/>

 

Families in the slums saw hope for future and wanted their children to be educated. Gradually the numbers grew and there was a need for a larger space and scope for formal education. This was the birth of APS society, a committee of 4-5 came together to establish a school for poor. Agape Public School was born as the first project of APS society. Today around Agape Public School (Punjab Broad) caters to 600 underprivileged children, providing standard education and support for education.   
<br/>
<br/>

 

The story is not yet over. APS Society now carries the burden of enabling education to those who are unable to afford standard education in India. Looking back we can say APS School is fruit of the team who carried our burden as theirs. This gave birth to Project Panaah where you join the team to serve and support the education of all those who cannot afford education. 
<br/>
<br/>

 

Here we are today inviting you to Join the team Project Panaah - An Initiative For A Better Tomorrow. Let us complete the story together by building the life of million children.  

 

      </p>

    </div>
    </div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/fi.png")}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/second.png")}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/th.png")}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
      
   
        <footer style ={{backgroundColor:' #FFEDD9'}}  class="page-footer font-small blue">


<div class="footer-copyright text-center py-3"> <h7 style={{color:'black' ,fontSize:'15px'}}>© 2021 Copyright</h7>
  <a style={{marginLeft:'10px',color:'black'}} href="https://panaah.org/"> www.panaah.org</a>
  <br></br>
  <Link style={{color:'black'}} onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
     </div>
    
     </Styles>
    
  );
}
