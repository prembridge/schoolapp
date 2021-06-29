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
      <div style={{paddingLeft:100,paddingTop:1}}>
        <video controls autostart autoPlay src={video} type="video/mp4" />

        <div style={{width:1000,
      height: 70,
      backgroundColor:'black',
      position:'absolute',
      bottom:-90,
      
      right:350,
      left:100}}>
        <h1 style={{color:'white',letterSpacing: 4,marginLeft: 10,marginTop:10}}>   FOR A BETTER FUTURE   </h1>
        </div>
        <div style={{
      height:50,
      position:'absolute',
      bottom:-80,
      right:30,
      
      left:800}}>
        <Button   style={{height: '50px', width : '300px',fontSize:22,marginLeft:-10, backgroundColor:"#F7EB00"}}variant="contained" color="#F7EB00" size="lg" onClick={() => history.push('/Newuser')}>
        I want Support
      </Button>
        </div>
        
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
    <br/>
    <div>
    <Aboutus/>
    </div>
    <br/>
 <div>
 <Users/>
 </div>
    </div>

    



  )
  
};
export default Home;