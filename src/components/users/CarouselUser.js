
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Carousel from 'react-bootstrap/Carousel'
import img1 from "../assets/Testimony.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { breakpoints as bp } from "../../GlobalStyle";

import styled from "styled-components";
const Styles = styled.div`
.carousel{
  margin-top:-7px
}
.textcar{
  margin-left: 285px;
    position: absolute;
    font-size: 21px !important;
    right: 7%;
    bottom: 130px;
    left: 58%;
    z-index: 4;
    padding-top: -50px;
    padding-bottom: -10px;
    color: #fff;
    text-align: 'justify';
    
    font-Family: 'Montserrat, sans-serif'
}
  .carousel  h3{
    top: 25vw !important;

    margin-top: 72vw !important;
    margin-left: 40vw !important;
    
  }
  // .carousel  h8{
  //   width:'1250px'
  //   font-size: 23px !important;
  //   margin-top: 20vw !important;
  //   margin-left: 398vw !important;
  // }
  @media (max-width: ${bp.mobile}) {
    // .carousel {
     
   
    //   height: 380 px;
    //  margin-left: 5vw!important;
    // width: 311px;
       
    //  }
    .imgcar img{
      min-width: 100%;
      }
    .carousel  h8{
      font-size: 10px !important;
      margin-top: 20vw !important;
      margin-left: 32vw !important;
      padding-Left:'790px',
      padding-Top:"90px",
      font-Family: 'Montserrat, sans-serif',
      font-Size:'20px',
      color:"white",
      font-Style: 'italic',
      text-Align:'justify',
      width:'1250px',
      padding-Left:'575px'
    }
    // .textcar{
    //   margin-left: 28px;
    //     position: absolute;
    //     font-size: 25px !important;
    //     right: 7%;
    //     bottom: 130px;
    //     left: 40%;
    //     z-index: 4;
    //     padding-top: -50px;
    //     padding-bottom: -10px;
    //     color: #fff;
    //     text-align: 'justify';
        
    //     font-Family: 'Montserrat, sans-serif'
    // }
  }
  

  }`


export default function CarouselUser() {


  return (
    
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
  );
}
