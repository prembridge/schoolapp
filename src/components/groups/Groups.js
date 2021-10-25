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
     margin-left: -56px;
    padding-top: 20px;
    padding-left: -5rem;
    font-size: 5vw;
    font-family: 'Raleway';
      
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
    <div >
      <h1 style={{paddingTop:'10px',fontFamily:'Raleway,sans-serif',fontSize: '65px',}}>
      Our Story
      </h1>
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
   {/* <h4 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}>SCOPE</h4>
    </div> 
    <div style={{marginLeft:'100',marginRight:'100'}}>
      <h6 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}> 
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </h6>
    </div>
    <div>
   <h4 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}>ELIGIBILITY</h4>
    </div>
    <div>
      <h6 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}> 
      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </h6>
    </div>
    <div>
   <h4 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}>DURATION</h4>
    </div>
    <div>
      <h6 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}> 
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio 
      </h6> */}
    </div>
    </div>
    <div>
             <Carousel>
  <Carousel.Item interval={2500}>
    <img style={{ height: '550px',width: '2030px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'850px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic', textAlign: 'center', width: '1250px', paddingLeft: '875px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img style={{ height: '550px',width:'2030px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'850px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic', textAlign: 'center', width: '1250px', paddingLeft: '875px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img style={{ height: '550px',width:'2030px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'850px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic', textAlign: 'center', width: '1250px', paddingLeft: '875px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item interval={500}> */}
    {/* <img style={{ height: '550px'}}
      className="d-block w-100"
      src={require("../assets/Testimony.jpg")}
      alt="Third slide"
    /> */}
     {/* <Carousel.Caption> */}
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      {/* <h5>My Story</h5>
      <p style={{width:500,paddingLeft:700}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p> */}
    {/* </Carousel.Caption> */}
  {/* </Carousel.Item> */}
  {/* <Carousel.Item> */}
    {/* <img style={{height: '550px'}}
      className="d-block w-100"
      src={require("../assets/Testimony.jpg")}
      alt="Third slide"
    /> */}
    {/* <Carousel.Caption> */}
    {/* <Carousel.Caption> */}
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      {/* <h5>My Story</h5>
      <p style={{width:500,paddingRight:100}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p> */}
    {/* </Carousel.Caption>
    </Carousel.Caption> */}
  {/* </Carousel.Item> */}
</Carousel> 
        </div>
        <footer style ={{backgroundColor:' #FFEDD9'}}  class="page-footer font-small blue">


<div class="footer-copyright text-center py-3"> <h7 style={{color:'black' ,fontSize:'15px'}}>© 2021 Copyright</h7>
  <a style={{marginLeft:'10px',color:'black'}} href="https://panaah.org/"> panaah.org</a>
  <br></br>
  <Link style={{color:'black'}} onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
     </div>
    
     </Styles>
    
  );
}
