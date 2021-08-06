import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function Groups() {
  return (
      <div>
    <div className="App" >
      <h1 style={{paddingTop:'10px'}}>
      Our Story
      </h1>
    </div>
    <div>
   <h4 style={{fontFamily:'Raleway,sans-serif',paddingLeft:"95px",paddingRight:"95px"}}>SCOPE</h4>
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
      </h6>
    </div>
    <div>
             <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{ height: '550px',width:'1530px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'790px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic',textAlign:'center',width:'1250px',paddingLeft:'575px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{ height: '550px',width:'1530px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'790px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic',textAlign:'center',width:'1250px',paddingLeft:'575px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{ height: '550px',width:'1530px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'790px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic',textAlign:'center',width:'1250px',paddingLeft:'575px'}}>
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
      
     </div>
    
 
    
  );
}
