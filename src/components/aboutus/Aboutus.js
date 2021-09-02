


// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Flippy, { FrontSide, BackSide } from 'react-flippy'
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { useHistory } from 'react-router-dom';
// import { Wave } from 'react-animated-text';
// //import { Button } from 'bootstrap';

// import styled from "styled-components";
// const Styles = styled.div`

// // .text1 {
  
// //   margin-left: 335px;
   
   
// // }
// .cview{
//   padding-top: 31px;
//   margin-left: 380px;
// }
// @media all and (max-width: 768px) {
//       .len{
//         background-color: #090909;
       
//         height: 3076px;
//       }
//     .textm{
//       margin-top: -77px;
//       padding-left: 39px;
//       margin-left: -537px
    
     
//       }
//       .textI{
//         margin-top: -23px;
//         padding-left: 31px;
//         margin-left: -331px;
//       }
//       .textA{
//         margin-top: 2px;
//         padding-left: 31px;
//         margin-left: -331px;
//       }
//       .textch{
//         margin-top: -792px;
//         padding-left: 270px;
//         margin-left: -238px;
//         width: 695px;
//       }
//       .textTh{
//         width: 575px;
//         margin-top: 2px;
//         padding-left: 275px;
//         margin-left: -265px;
//       }
//       .imagep{
//         margin-bottom: 31px;
//         padding-top: 344px;
//         margin-left: -364px;
//         margin-top: 109px
        
        
//       }
//       .textgiv{
//         width: 591px;
//         margin-top: -105px;
//         padding-left: 275px;
//         margin-left: -455px;
//       }
//       .textwork{
//         width: 591px;
//         margin-top: 30px;
//         padding-left: 275px;
//         margin-left: -455px;
//       }
//       .imgth{
//         width: 400px;
//         padding-left: 70px;
//         padding-bottom: 100px;
//         padding-top: 10px;
//         margin-left: -139px;
//       }
//       .btnpar{
//         margin-top: -68px;
//     margin-left: -609px;
    
    
//       }
//   }`
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       height:1600,
//       backgroundColor:'#090909'
//     },
//     paper: {
//         backgroundColor:"#808080",
//       padding: theme.spacing(4),
//       textAlign: 'justify',
//       color: theme.palette.text.secondary,
     
//     },
//   }));
//   export default function Aboutus() {
//     const classes = useStyles();
//     const history = useHistory();
//         return(
//           <Styles>
//             <div className="len">
//             <div className={classes.root}>
//               <div className="textm">
//               <div style={{color:'white' ,paddingLeft:500,paddingTop:80,paddingBottom:50}}>
                
//               <h3 style={{ fontFamily: 'Montserrat,sans-serif',fontSize:'50px',fontWeight:'bold'}}> HOW DO WE DO IT ?
//               {/* <Wave text="
// HOW DO WE DO IT ?
// " 
//  //effect="fadeOut" effectChange={1.0}
// /> */}
// </h3>
// </div>
// <br></br>
// </div>
//              <div class="col-md-12 well">
//              <div class="row">
//         <div class="col-xs-3 col-md-6">
//           <div style={{paddingLeft:'300px'}}>
//           <div style={{color:'#FFEDD9'}}>
//           <div className="textI">
//         <h1 style={{ fontFamily: 'Montserrat,sans-serif',fontSize:'30px',fontWeight:'bold'}}>1. IMPACTING YOUNG LIVES</h1>
//         </div>
//         <div style={{color:'white'}}>
//         <div className="textA">
//         <h4 style={{fontFamily:'Raleway,sans-serif',paddingBottom:'90px'}}>
// According to NXXXX, over 20% of children below the age of 15 years in India are deprived of access to basic education . This is due to to various factors like poor financial background, lack of school in their region, social barriers towards girl child and physical disability. We are building a channel for such children to access a better tomorrow.</h4>
// </div>
// </div>
// </div>
// </div>
//         </div>
//         <div class="col-xs-3 col-md-6">
//             <div class="first"> 
//             <img  style={{width: '220px',paddingLeft:'70px',paddingBottom:'90px'}}src={process.env.PUBLIC_URL + '/images/im2.png'}/> 
//             </div>
//             <div class="second"> 
             
//             </div>
//         </div>
//     </div>
//     </div>
//     <br></br>
//     <div class="col-md-12 well">
//              <div class="row">
//         <div  class="col-xs-3 col-md-6">
//           <div className='imagep'>
//         <img  style={{width: '600px',paddingLeft:'380px'}}src={process.env.PUBLIC_URL + '/images/im3.png'}/>
//         </div>
//         </div>
//         <div class="col-xs-3 col-md-6">
//             <div  class="first"> 
//             <div style={{paddingRight:"250px",paddingTop:"10px"}}>
//             <div style={{color:'#FFEDD9'}}>
//               <div className="textch">
//            <h1 style={{fontFamily: 'Montserrat,sans-serif',fontSize:'30px',fontWeight:'bold'}}> 2. CHANGING THEIR MINDSET</h1>
//            </div>
//            </div>
//            <div style={{color:'white'}}>
//              <div className="textTh">
//            <h4 style={{fontFamily:'Raleway,sans-serif',paddingBottom:'90px'}}>These children grow up in a vulnerable environment surrounded with abuse, addictions, violence and other social evils. The Pannah volunteers reach out to the children of these vulnerable sections through the communities they are placed in to provide access to education for all. </h4>
//            </div>
//            </div>
//             </div>
//             </div>
//         </div>
//     </div>
//     </div>
//     <br></br>
//     <div class="col-md-12 well">
//              <div class="row">
//         <div class="col-xs-3 col-md-6">
//           <div style={{paddingLeft:'200px',paddingTop:"70px"}}>
//           <div style={{color:'#FFEDD9'}}>
//             <div className="textgiv">
//         <h1  style={{ fontFamily: 'Montserrat,sans-serif',fontSize:'30px',fontWeight:'bold'}}>3. GIVING A HOPE FOR TOMORROW</h1>
//         </div>
//         </div>
//         <div style={{color:'white'}}>
//           <div className="textwork">
//         <h4  style={{fontFamily:'Raleway,sans-serif',paddingBottom:'90px'}}>
//         Working together with you, we provide these children a platform to dream big. Pannah opens a gateway for a better quality life through higher education scholarships and employment guidance.</h4>
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-xs-3 col-md-6">
//             <div class="first"> 
//             <div className='imgth'>
//             <img  style={{width: '400px',paddingLeft:'70px',paddingBottom:'100px',paddingTop:'10px'}}src={process.env.PUBLIC_URL + '/images/im1.png'}/> 
//             </div>
//             </div>
//             <div class="second"> 
             
//             </div>
//         </div>
        
//     </div>
//    <br></br>
//     </div>
//     <div className='btnpar'>
//     <div style={{paddingLeft:'700px',}}>
//     <button  onClick={() => history.push('/Newuser')}style={{backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50}}>Partner Now</button>
//     </div>
//     </div>       
//         </div>  
//         </div> 
//         </Styles>  

//         )
//     }
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
  font-family: 'Expletus Sans', cursive;
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
  font-family: "Fira Sans sans-serif", 'monospace';
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


.heading1 h3 {
  font-size: 1.5;
  color: #fff !important;
  font-family: "Fira Sans sans-serif", 'monospace';
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
  color: #fff !important;
  font-family: "Fira Sans sans-serif", 'monospace';
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
  margin-left: -120.5rem; !important;
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
    font-family: "Fira Sans sans-serif", 'monospace';
    margin-top: -5.5rem !important;
    float: center;
    top: 80vw !important;
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
    margin-top: 0.5rem;
    margin-left: -5rem;
    top: 50vw;
    left: 2vw;
     
  }
  .heading1 p {
    font-family: "Fira Sans sans-serif" ;
  
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
    font-family: "Fira Sans sans-serif", 'monospace';
    margin-top: -6.5rem !important;
    margin-left: -93rem !important;
    top: 50vw !important;
    left: 2vw;
  }
  .heading2 p {
    font-family: "Fira Sans sans-serif";
    margin-top: 500.5rem;
    margin-left: -47rem !important;
    margin-right: -5rem;
    padding-left: 10px;
    padding-right: 718px !important;
    top: 65vw !important;
    position: relative !important;
    left: 5vw;

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
    margin-top: 14.5rem !important;
    margin-left: -4.5rem !important;
  }
  .heading3 h3 {
    font-size: 5vw;
    font-family: "Fira Sans sans-serif", 'monospace';
    margin-top: -2.5rem !important;
    margin-left: -2.5rem !important;
    top: 68vw;
    left: 2vw;
     
  }
  .heading3 p {
    font-family: "Fira Sans sans-serif" ;
    margin-top: -2.5rem !important;
    margin-left: -5.5rem !important;
    padding-left: 90px !important;
    padding-right: 20px;
    top: 62vw;
             : -5vw !important;
  }
  .third img {
    width: 100%;
    height: 120%;
    margin-top: 11.5rem !important;
    margin-left: 0rem;
  }
  .btnpartner{
    margin-left: 112px;
    margin-top: 8px !important;
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











