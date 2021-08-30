
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from "styled-components";
const Styles = styled.div`


@media all and (max-width: 768px) {
    
    .ourvision {
      margin-left: -534px;
    
     
    }
    .textvis{
      margin-left:20px
    }
    .textinfo{
      width:100px
    }
  }`

const STYLE = {
  infoColor: {
      color: 'green'
  },
  warningColor: {
      color: 'orange'
  },
  errorColor: {
      color: 'red'
  }
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      backgroundColor:"#808080",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },paper: {
     backgroundColor:"#f7daf7",
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

export default function Users() {
  const classes = useStyles();

  return (
    <Styles>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className='ourvision'>
        <div style={{backgroundColor:"#FFEDD9",height:400,width:'1530px',paddingTop:100}}>
          <div className='textvis'>
          <h1 style={{fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',paddingLeft:"65px",paddingLeft:600,}}>OUR VISION</h1>
          </div>
          <div className='textinfo'>
          <div style={{paddingTop:50, fontFamily:'Raleway,sans-serif',fontSize:'130px',}} >
          
          <h6 style={{fontFamily: 'Raleway,sans-serif',fontSize:'40px',color:"#757575",fontStyle: 'italic',width:"1100px",textAlign:'center',paddingLeft:350}}>Reaching the last, the least and the lost 
          for a better tomorrow </h6>
            {/* <h6 style={{fontFamily: 'Raleway,sans-serif',fontSize:'30px',color:"#757575",fontStyle: 'italic'}}>for a better tomorrow</h6> */}
</div>
</div>
        </div>
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
      <h6 style={{paddingLeft:'790px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story1</h6>
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
      <h6 style={{paddingLeft:'790px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story2</h6>
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
      
      </Grid>
    </div>
    </Styles>
  );
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import styled from "styled-components";
// import { Carousel } from "react-bootstrap";
// import img1 from '../assets/Testimony.jpg'

// const Styles = styled.div`
//    .carousel {
//     top: 100px !important;
//    }
// `

// export default function Home() {
//   return (
//     <div>
//       <Styles>
//         <div className="carousel" >
//           <Carousel fade>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3></h3>
//                 <p></p>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Second slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Fourth slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src=""
//                 alt="Fifth slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Sixth slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </div>
//       </Styles>
//     </div>
//   );
// }