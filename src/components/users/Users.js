import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img1 from '../assets/Testimony.jpg'

const Styles = styled.div`
   .carousel {
    top: 435px !important;
   }
`

export default function Home() {
  return (
    <div>
      <Styles>
        <div className="carousel" >
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h3></h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=""
                alt="Fifth slide"
              />

              <Carousel.Caption>
                <h3></h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Sixth slide"
              />

              <Carousel.Caption>
                <h3></h3>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Styles>
    </div>
  );
}