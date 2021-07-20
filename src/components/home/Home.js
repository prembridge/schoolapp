import React from 'react';
import Swiper from 'react-id-swiper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from '../users/Users'
import Newuser from '../newuser/Newuser';
import Login from '../login/Login'
import Aboutus from '../aboutus/Aboutus'
import { useHistory } from 'react-router-dom';
import video from '../assets/title sketch.mp4'
import TextTransition, { presets } from "react-text-transition";
//import GradientText from "react-gradient-text"
const TEXTS = [
  "An initiative",
  "For a better tomorrow",
  
];
const useStyles = makeStyles({
  root: {
    
    maxWidth: 345,
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
  
});
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
const Home = () => {
  
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const classes = useStyles();
  const history = useHistory();
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  
  return (
      <div >
        <div >
          <img  style={{height:'554px'}}src={process.env.PUBLIC_URL + '/images/Panaah.jpg'}/>
       
         </div>
        <div style={{
      height: 20,
     //backgroundColor:'white',
      position:'absolute',
      top:480,
     // paddingBottom:'1000px',
     //right:350,
     left:100
      }}>
        <h3 style={{color:'#FFEDD9',letterSpacing: -1, fontFamily:'Fira Sans sans-serif',fontSize:'80px',fontWeight: 'bold',lineHeight:'14px',textShadow:' 1px 1px 2px black'}}>  
        {/* <TextTransition
        
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.stiff } />  */}
        An initiative </h3>
        <h3 style={{color:'#FFEDD9  ',letterSpacing: -1, fontFamily:'Fira Sans sans-serif',fontSize:'80px',fontWeight: 'bold',textShadow:' 1px 1px 2px black'}}>  
      
       For a better tomorrow </h3>
      
     
        {/* <h1  style={{color:'#FB9946',letterSpacing: 4,marginLeft: 50,marginTop:10 ,fontFamily:'Sacramento',fontSize:'70px'}}> 
                        </h1> */}
        </div>
        {/* <div style={{
      height:50,
      position:'absolute',
      bottom:-80,
      right:30,
      
      left:800}}>
        <Button   style={{height: '50px', width : '300px',fontSize:22,marginLeft:-10, backgroundColor:"#F7EB00"}}variant="contained" color="#F7EB00" size="lg" onClick={() => history.push('/Newuser')}>
        I want Support
      </Button>
        </div> */}
         
    {/* <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{width: '550px', height: '450px'}}
      className="d-block w-100"
      src={require("../assets/DSC_0501.JPG")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{width: '550px', height: '450px'}}
      className="d-block w-100"
      src={require("../assets/DSC_0503.JPG")}
      alt="Third slide"
    />
     <Carousel.Caption>
      <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width: '550px', height: '450px'}}
      className="d-block w-100"
      src={require("../assets/dsc.JPG")}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Carousel.Caption>
      <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1>
    
    </Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
  
    <div>
    <Aboutus/>
    </div>
   
 <div>
 <Users/>
 </div>
    </div>

    



  )
  
};
export default Home;