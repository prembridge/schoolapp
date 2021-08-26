import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import styled from "styled-components";
import img2 from "../assets/black.jpg";
import img3 from "../assets/im2.png";
import img4 from "../assets/im3.png";
import img5 from "../assets/im1.png";

const Button = styled.div`
  margin-top: -45.5rem !important
  height: 50
  border-radius: 50
  z-index: 5
  color: #FFEDD9

`

const Styles = styled.div`
@import url(https://fonts.googleapis.com/css?family=Expletus+Sans:600);
/*==========SCALE-IN==========*/
@-webkit-keyframes scale-in {
     0%   {transform: scale(10, 10); opacity: 0;}
    100% {transform: scale(1, 1); opacity: 1;}
}

@keyframes scale-in {
    0%   {transform: scale(10, 10); opacity: 0;}
    100% {transform: scale(1, 1);  opacity: 1;}
}
/*==========ROLL-OUT==========*/
@-webkit-keyframes roll-out {
    0%   {width: 0;}
    100% {width: 100%; }
}
@keyframes roll-out {
    0%   {width: 0;}
    100% {width: 100%; }
}
body{
   background: #392f28;
}
main{
  width: 100%;
  overflow: hidden;
  font-family: 'Expletus Sans', cursive;
}
.hero2{
  width: 100%;
  max-width: 1550px;
  height: 438px;
  text-align: center;
  margin: 0 auto;
  background: #392f28;
  position: relative; 
  color: #ffffff;
}

.hero2 h1{
  font-size: 4.2rem;
  color: #fff !important;
  font-family: "Fira Sans sans-serif", 'monospace';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: 30px !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.hero2 h2{
  font-size: 3.5em;
  font-family: "Montserrat,sans-serif";
  margin: auto;
  position: absolute; 
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; 
}
.hero2 p{
  font-size: 1.5em;
//   font-family: 'Expletus Sans', cursive;
  font-family: "Lucida Console", "Courier New", monospace;
  margin: auto;
  position: absolute; 
  top: 300px;
  left: 0;
  right: 0;
  bottom: 0;
   z-index: 1;
}
.hero2 img{
  width: 100% !important;
  height: 300% !important;
}
.bar{
  width: 100%;
  height: 250px;
//   background: -moz-linear-gradient(289deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
//   background: -webkit-linear-gradient(289deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
//   background: -ms-linear-gradient(289deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
//   background: linear-gradient(161deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
  ///
  background: -moz-linear-gradient(289deg, #000000 0%, #000000 36%, #c60a09 100%);
  background: -webkit-linear-gradient(289deg, #000000 0%, #000000 36%, #c60a09 100%);
  background: -ms-linear-gradient(289deg, #000000 0%, #000000 36%, #c60a09 100%);
  background: linear-gradient(161deg, #000000 0%, #000000 36%, #c60a09 100%);
  opacity: 0.3;
  position: absolute; 
  z-index: 0;
  left: 0;
  top: 50px;
  -ms-transform-origin: 100% 0%;
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
   -webkit-animation: roll-out 1.2s ease-out;
  -moz-animation: roll-out 1.2s ease-out ;
    animation: roll-out 1.2s ease-out ; 
}
.hero2 h1, .hero2 p{
  -webkit-animation: scale-in 1.3s ease-out;
  -moz-animation: scale-in 1.3s  ease-out;
    animation: scale-in 1.3s ease-out; 
}

.heading1 h3 {
  font-size: 2.1rem;
  color: #fff !important;
  font-family: "Fira Sans sans-serif", 'monospace';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: -70.5rem !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.heading1 p {
  top: -66.5rem !important;
  left: 2.5rem !important;
  text-align: center !important
}
.first img {
  margin-top: -125.5rem !important;
  width: 20% !important;
}
.heading2 h3 {
  font-size: 2.1rem;
  color: #fff !important;
  font-family: "Fira Sans sans-serif", 'monospace';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: -50.5rem !important;
  left: 45rem !important;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.heading2 p {
  top: -48.5rem !important;
  left: 45rem !important;
  text-align: center !important;
  position: relative !important;
}
.second img {
  margin-top: -85.5rem !important;
  margin-left: -100.5rem; !important;
  width: 30% !important;
  height: 30% !important;
}
.heading3 h3 {
  font-size: 2.1rem;
  color: #fff !important;
  font-family: "Fira Sans sans-serif", 'monospace';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: -40.5rem !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.heading3 p {
  top: -36.5rem !important;
  left: 2.5rem !important;
  text-align: center !important
  position: relative !important;
}
.third img {
  margin-top: -65.5rem !important;
  margin-right: -5.5rem; !important;
  width: 50% !important;
  height: 50% !important;
}
// .partner button{
//   margin-top: -45.5rem !important;
//   height: 50;
//   border-radius: 50;
//   z-index: 5;
// }

@media all and (max-width: 768px) {
  .hero2{
    height: 50vw;
  }
  .hero2 img{
    width: 100%;
    height: 120%;
  }
  .bar{
    height: 30vw;
    top: 2vw;
  }
  .hero2 h1{
    font-size: 8vw;
    font-family: "Fira Sans sans-serif", 'monospace';
    margin-top: 3.5rem;
    top: 8vw;
    left: 5vw;
  }
  .hero2 h2{
    font-size: 6vw;
    font-family: "Times New Roman", Times, serif;
    top: 18vw;
  }
  .hero2 p{
    font-size: 4vw;
    font-family: 'Expletus Sans', cursive;
    // font-family: "Lucida Console", "Courier New", monospace;
    top: 32vw;
  }
  .heading1 h3 {
    font-size: 5vw;
    font-family: "Fira Sans sans-serif", 'monospace';
    margin-top: 42.5rem;
    margin-left: -5rem;
    top: 28vw;
    left: 2vw;
     
  }
  .heading1 p {
    
    font-family: "Fira Sans sans-serif", ;
    margin-top: 42.5rem;
    margin-left: 0rem;
    margin-right: -5rem;
    padding-left: 10px;
    padding-right: 20px;
    top: 28vw;
    left: 5vw;
  }
  .first img {
    width: 100%;
    height: 120%;
    margin-top: 43.5rem;
    margin-left: -12rem;
  }
}
`
export default function Aboutus() {
  // const classes = useStyles();
  const history = useHistory();
  return (
    <div >
     
      <Styles>
        <div className="hero2">
          <img src={img2} />

          <h1>
            HOW DO WE DO IT ?
          </h1>

         
          {/* 1 */}
          <div class="col-md-12 well">
            <div class="row">
              <div class="col-xs-3 col-md-6">
                <div className="heading1">
                  <div >
                    <h3>1. IMPACTING YOUNG LIVES</h3>
                  </div>
                  <div>
                    <p>
                      According to NXXXX, over 20% of children below the age of 15 years in India are deprived of access to basic education . This is due to to various factors like poor financial background, lack of school in their region, social barriers towards girl child and physical disability. We are building a channel for such children to access a better tomorrow.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-3 col-md-6">
                <div class="first">
                  <img src={img3} />
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div class="col-md-12 well">
            <div class="row">
              <div class="col-xs-3 col-md-6">
                <div className="heading2">
                  <div >
                    <h3>2. CHANGING THEIR MINDSET</h3>
                  </div>
                  <div >
                    <p>
                      These children grow up in a vulnerable environment surrounded with abuse, addictions, violence and other social evils. The Pannah volunteers reach out to the children of these vulnerable sections through the communities they are placed in to provide access to education for all.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-3 col-md-6">
                <div className="second">
                  <img src={img4} />
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div class="col-md-12 well">
            <div class="row">
              <div class="col-xs-3 col-md-6">
                <div className="heading3">
                  <div>
                    <h3>3. GIVING A HOPE FOR TOMORROW</h3>
                  </div>
                  <div >
                    <p>
                      Working together with you, we provide these children a platform to dream big. Pannah opens a gateway for a better quality life through higher education scholarships and employment guidance.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-3 col-md-6">
                <div class="third">
                  <img src={img5} />
                </div>    
              </div>
            </div>
          </div>
        </div>
      </Styles>
    </div>
  )
}




