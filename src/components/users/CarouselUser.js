
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../assets/Testimony.jpg";
import { breakpoints as bp } from "../../GlobalStyle";

import styled from "styled-components";
const Styles = styled.div`
.carousel{
  margin-top:-7px
}
.textcar{
  margin-left: 285px;
    position: absolute;
    font-size: 18px !important;
    right: 7%;
    bottom: 172px;
    left: 58%;
    z-index: 4;
    padding-top: -63px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
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
    .carousel  h3{
     font-size: 18px !important;
  
      margin-top: 72vw !important;
      margin-left: 50vw !important;
      
    }
    .carousel  h8{
      font-size: 10px !important;
      margin-top: 20vw !important;
      margin-left: 32vw !important;
      padding-Left:'790px',
      padding-Top:"90px",
      font-Family: 'Raleway,sans-serif',
      font-Size:'20px',
      color:"white",
      font-Style: 'italic',
      text-Align:'center',
      width:'1250px',
      padding-Left:'575px'
    }

  }
  

  }`


export default function CarouselUser() {


  return (
    <Styles>
      <div className="carousel" >
      <div style={{ paddingTop: '7px' }}>
        <Carousel >
          <Carousel.Item interval={1000}>
            <img style={{ height: '550px', width: '2030px' }}
              className="d-block w-0"
              src={require("../assets/Testimony.jpg")}
              alt="First slide"

            />
            <Carousel.Caption className="textcar">
              {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
              <h6 >My Story</h6>
              <h8 >
                This is a great place to add a tagline.

                Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

                This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</h8>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img style={{ height: '550px', width: '2030px' }}
              className="d-block w-0"
              src={require("../assets/Testimony.jpg")}
              alt="First slide"

            />
            <Carousel.Caption className="textcar">
              {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
              <h6 >My Story</h6>
              <h8 >
                This is a great place to add a tagline.

                Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

                This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</h8>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img style={{ height: '550px', width: '2030px' }}
              className="d-block w-0"
              src={require("../assets/Testimony.jpg")}
              alt="First slide"

            />
            <Carousel.Caption className="textcar">
              {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
              <h6 >My Story</h6>
              <h8 >
                This is a great place to add a tagline.

                Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

                This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</h8>
            </Carousel.Caption>
          </Carousel.Item>
        
        </Carousel>
      </div>
      </div>
    </Styles>
  );
}
