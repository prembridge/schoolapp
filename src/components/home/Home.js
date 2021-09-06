
// import React from 'react';
// import Swiper from 'react-id-swiper';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Users from '../users/Users'
// import Newuser from '../newuser/Newuser';
// import Login from '../login/Login'
// import Aboutus from '../aboutus/Aboutus'
// import { useHistory } from 'react-router-dom';
// import video from '../assets/title sketch.mp4'
// import TextTransition, { presets } from "react-text-transition";
// import img2 from "../assets/Panaah.jpg"

// import { breakpoints as bp } from "../../GlobalStyle";
// import styled from "styled-components";
// const Styles = styled.div`
// .hero{
//   width: 50px;
// }
// .hero img{
//   height:'554px'
// }
// .textmain h1{
//   font-size: 3.5rem;
//     color: #FFEDD9;
//     font-family: "Fira Sans sans-serif", 'monospace';
//     font-weight: bold;
//     margin: auto;
//     letter-spacing: 0rem;
//     text-align: left;
//     line-height: 1.0;
//     text-shadow: 2px 1px 2px black;
//     position: absolute; 
//     top: -217px;
//     left: 100px;
//     right: 0;
//     bottom: 0;
//     z-index: 1;
//     width: 570px
// }
//  @media (max-width: ${bp.mobile}) {
//    .hero{
    
//   }
//   .hero img{
//     padding-top:  422px;
//     margin-top: -422px;
//       }
      
//       .textmain{
//         margin-top: -322px
//       }
//       .textmain h1{
//         margin-top: -107px;
//         margin-left: -186px;
//         font-size: 8vw;
//       }
//   }`
// //import GradientText from "react-gradient-text"
// const TEXTS = [
//   "An initiative",
//   "For a better tomorrow",
  
// ];


// const useStyles = makeStyles({
//   root: {
    
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },paper: {
//      backgroundColor:"#f7daf7",
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   }
  
// });
// const STYLE = {
//   infoColor: {
//       color: 'green'
//   },
//   warningColor: {
//       color: 'orange'
//   },
//   errorColor: {
//       color: 'red'
//   }
// };
// const Home = () => {
  
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(() =>
//       setIndex(index => index + 1),
//       3000 // every 3 seconds
//     );
//     return () => clearTimeout(intervalId);
//   }, []);
//   const classes = useStyles();
//   const history = useHistory();
//   const params = {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   }
  
//   return (
//     <Styles>
//       <div >
//         <div className="hero">
//           {/* <img  src={process.env.PUBLIC_URL + '/images/Panaah.jpg'}/> */}
//           <img  style={{height:'554px'}} src={img2} />
//          </div>
//         <div style={{
//       height: 20,
//      //backgroundColor:'white',
//       position:'absolute',
//       top:480,
//      // paddingBottom:'1000px',
//      //right:350,
//      left:100
//       }}> 
//       <div className="textmain">
//       {/* style={{color:'#FFEDD9',letterSpacing: -1, fontFamily:'Fira Sans sans-serif',fontSize:'80px',fontWeight: 'bold',lineHeight:'14px',textShadow:' 1px 1px 2px black'}} */}
       
//       <h1> An initiative <br/> For a better tomorrow </h1>
//         {/* <h3>   */}
        
//         {/* <TextTransition
        
//         text={ TEXTS[index % TEXTS.length] }
//         springConfig={ presets.stiff } />  */}
//         {/* An initiative </h3> */}
//         {/* <h3 style={{color:'#FFEDD9  ',letterSpacing: -1, fontFamily:'Fira Sans sans-serif',fontSize:'80px',fontWeight: 'bold',textShadow:' 1px 1px 2px black'}}>  
      
//        For a better tomorrow </h3> */}
//        </div>
     
//         {/* <h1  style={{color:'#FB9946',letterSpacing: 4,marginLeft: 50,marginTop:10 ,fontFamily:'Sacramento',fontSize:'70px'}}> 
//                         </h1> */}
//         </div>
//         {/* <div style={{
//       height:50,
//       position:'absolute',
//       bottom:-80,
//       right:30,
      
//       left:800}}>
//         <Button   style={{height: '50px', width : '300px',fontSize:22,marginLeft:-10, backgroundColor:"#F7EB00"}}variant="contained" color="#F7EB00" size="lg" onClick={() => history.push('/Newuser')}>
//         I want Support
//       </Button>
//         </div> */}
         
//     {/* <Carousel>
//   <Carousel.Item interval={1000}>
//     <img style={{width: '550px', height: '450px'}}
//       className="d-block w-100"
//       src={require("../assets/DSC_0501.JPG")}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1>
    
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img style={{width: '550px', height: '450px'}}
//       className="d-block w-100"
//       src={require("../assets/DSC_0503.JPG")}
//       alt="Third slide"
//     />
//      <Carousel.Caption>
//       <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1>
    
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img style={{width: '550px', height: '450px'}}
//       className="d-block w-100"
//       src={require("../assets/dsc.JPG")}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//     <Carousel.Caption>
//       <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1>
    
//     </Carousel.Caption>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel> */}
  
//     <div>
//     <Aboutus/>
//     </div>
   
//  <div>
//  <Users/>
//  </div>
//     </div>
//     </Styles>
//   )
  
// };
//  export default Home;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from '../users/Users'
import Aboutus from '../aboutus/Aboutus'
import { useHistory } from 'react-router-dom';
import img2 from "../assets/Panaah.jpg"
import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";

const Styles = styled.div`


body{
   background: #392f28;
}
main{
  width: 100%;
  overflow: hidden;
  font-family: Raleway;
}
.hero{
  width: 100%;
  // max-width: 1550px;
  height: 35rem;
  text-align: center;
  margin: 0 auto;
  background: #392f28;
  position: relative; 
  color: #ffffff;
}

.hero h1{
  font-size: 4.5rem;
  color: #FFEDD9;
  font-family: Raleway;
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: left;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: absolute; 
  top: 350px ;
  left: 100px;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.hero h2{
  font-size: 3.5em;
  font-family: Raleway;
  margin: auto;
  position: absolute; 
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; 
}
.hero p{
  font-size: 1.9em;
//   font-family: 'Expletus Sans', cursive;
font-family: Raleway;
  margin: auto;
  position: relative !important; 
  top: 300px;
  left: 0;
  right: 0;
  bottom: 0;
   z-index: 1;
   text-align: justify;
}
.hero img{
  width: 100%;
  height: 100%;
}

.hero h1, .hero p{
  -webkit-animation: scale-in 1.3s ease-out;
  -moz-animation: scale-in 1.3s  ease-out;
    animation: scale-in 1.3s ease-out; 
}

@media (max-width: ${bp.mobile}) {
  .hero{
    height: 40vw;
    
  }
  .hero img{
    width: 100%;
    height: 120%;
  }
  .bar{
    height: 30vw;
    top: 2vw;
  }
  .hero h1{
    font-size: 8vw;
    font-family: Raleway;
    margin-top: 6.5rem;
    top: 0vw;
    left: 5vw;
  }
  .hero h2{
    font-size: 6vw;
    font-family: Raleway;
    top: 15vw;
  }
  .hero p{
    font-size: 2.5vw
    font-family: Raleway;
    text-align: center;
    position: relative;
    margin-left: -70px;
    margin-top: -50px;
    // font-family: "Lucida Console", "Courier New", monospace;
    top: 28vw;
    left: 10vw;
    right: -25vw !important;
  }


}
`

const Home = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  // const classes = useStyles();
  const history = useHistory();
  
  return (
    <div >
      <Styles >
        <div class="hero">
          <img src={img2} />
          <h1> An initiative <br/> For a better tomorrow </h1>
            <Aboutus />        
            <Users/>
        </div>
      </Styles>
    </div>
  )

};
export default Home;
