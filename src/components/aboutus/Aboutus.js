


import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import styled from "styled-components";
import img2 from "../assets/black.jpg";
import img3 from "../assets/im2.png";
import img4 from "../assets/im3.png";
import img5 from "../assets/im1.png";
import { breakpoints as bp } from "../../GlobalStyle";

const Button = styled.div`
  margin-top: -45.5rem !important
  height: 50
  border-radius: 50
  z-index: 5
  color: #FFEDD9

`

const Styles = styled.div`

body{
   background: #392f28;
}
main{
  width: 100%;
  overflow: hidden;
  font-family: 'Raleway';
}
.hero2{
  width: 100%;
  
  height: 200vh;
  text-align: center;
  margin: 0 auto;
  background-color: #000;
 
  color: #ffffff;
}
.btnpartner{
  margin-top: 10px !important;
  margin-left: 733px
}

.hero2 h1{
  font-size: 4.2rem;
  color: #fff !important;
  font-family: 'Raleway';
  font-weight: bold;
  margin-top: 15.5rem !important;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  // top: 20px !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.hero2 h2{
  font-size: 3.5em;
  font-family: "Raleway,sans-serif" 
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
//   font-family: "Raleway,sans-serif" 
font-family: 'Raleway';
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


.heading1 h3 {
  font-size: 1.5;
  color: #FFEDD9 !important;
  font-family: 'Raleway';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: 10.5rem !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.heading1 p {
  font-family: 'Raleway';
  font-size: 1.5px;
  padding: 5px 25px 15px 35px !important;
  top: 13.5rem !important;
  // left: 2.5rem !important;
  text-align: center !important;
}
.first img {
  margin-top: 8.5rem !important;
  width: 20% !important;
}
.heading2 h3 {
  font-size: 2.1rem;
  color: #FFEDD9 !important;
  font-family: 'Raleway';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: 5.5rem !important;
  left: 45rem !important;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.heading2 p {
  top: 9.5rem !important;
  left: 45.5rem !important; 
  text-align: center !important;
  position: relative !important;

  // top: 9.5rem !important;
  // left: 2.5rem !important;
  // text-align: center !important
  // position: relative !important;
  
}
.second img {
  margin-top: 3.5rem !important;
  margin-left: -100.5rem; !important;
  width: 30% !important;
  height: 30% !important;
}
.heading3 h3 {
  font-size: 2.1rem;
  color: #FFEDD9 !important;
  font-family: 'Raleway';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: center !important;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: relative; 
  top: 5.5rem !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.heading3 p {
  top: 9.5rem !important;
  left: 2.5rem !important;
  text-align: center !important
  position: relative !important;
}
.third img {
  margin-top: -0.5rem !important;
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

@media (max-width: ${bp.mobile}) {
  .hero2{
    width: 100%;
    height: 290vh;
    background-color: #000;

  }

  .hero2 h1{
    font-size: 8vw;
    font-family: 'Raleway';
    margin-top: -5.5rem !important;
    float: center;
    top: 80vw !important;
    left: 5vw;
  }
  .hero2 h2{
    font-size: 6vw;
    font-family: 'Raleway';
    top: 18vw;
  }
  .hero2 p{
    font-size: 4vw;
    font-family: 'Raleway';
    // font-family: "Lucida Console", "Courier New", monospace;
    top: 32vw;
  }
  .heading1 h3 {
    font-size: 5vw;
    font-family: 'Raleway';
    margin-top: -2.5rem;
    margin-left: -5rem;
    top: 50vw;
    left: 2vw;
    color: #FFEDD9 !important;
     
  }
  .heading1 p {
    font-family: 'Raleway';
    text-aline:'Justfiy'
    margin-top: 492.5rem;
    margin-left: 0rem;
    margin-right: -5rem;
    padding-left: 10px;
    padding-right: 20px;
    top: 65vw !important;
    left: 5vw;
  }
  .first img {
    width: 100%;
    height: 120%;
    margin-top: 13.5rem !important;
    margin-left: 0rem;
  }
  .heading2 h3 {
    font-size: 5vw;
    font-family: Raleway;
    margin-top: -7.5rem !important;
    margin-left: -93rem !important;
    top: 50vw !important;
    left: 2vw;
  }
  .heading2 p {
    font-family: Raleway;
    margin-top: 500.5rem;
    margin-left: -47rem !important;
    margin-right: -5rem;
    padding-left: 10px;
    padding-right: 718px !important;
    top: 70vw !important;
    position: relative !important;
    font-size: 5vw;
    left: 5vw;
    text-aline:Justfiy
    // font-family: "Fira Sans sans-serif" ;
    // margin-top: 492.5rem;
    // margin-left: 0rem;
    // margin-right: -5rem;
    // padding-left: 10px;
    // padding-right: 20px;
    // top: 65vw !important;
    // left: 5vw;
  }
  .second img {
    width: 100%;
    height: 120%;
    margin-top: 15.5rem !important;
    margin-left: -4.5rem !important;
  }
  .heading3 h3 {
    font-size: 5vw;
    font-family: Raleway;
    margin-top: -2.5rem !important;
    margin-left: -2.5rem !important;
    top: 68vw;
    left: 2vw;
     
  }
  .heading3 p {
    font-family: 'Raleway';
    margin-top: -2.5rem !important;
    margin-left: -6.5rem !important;
    padding-left: 70px !important;
    padding-right: 20px;
    text-aline:'Justfiy'
    top: 62vw;
             
  }
  .third img {
    width: 100%;
    height: 120%;
    margin-top: 11.5rem !important;
    margin-left: 0rem;
  }
  .btnpartner{
    margin-left: 112px;
    margin-top: 20px !important;
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
          {/* <img src={img2} /> */}
            <h1>
              HOW DO WE DO IT ?
            </h1>
          {/* 1 */}
          <div class="col-md-12 well">
            <div class="row">
              <div class="col-xs-3 col-md-6">
                <div className="heading1">
                  <div>
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
                  <div>
                    <h3>2. CHANGING THEIR MINDSET</h3>
                  </div>
                  <div>
                    <p class="text-center">
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
              <div className='btnpartner'>
    <button  onClick={() => history.push('/Newuser')}style={{backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50}}>Partner Now</button>
    </div>
            </div>
          </div>
        </div>
      </Styles>
    </div>
  )
}











