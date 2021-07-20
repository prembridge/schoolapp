import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Confetti from 'react-confetti'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../assets/ca.jpg'
import { useHistory } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BorderAllSharp } from '@material-ui/icons';
export default function Newuser() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
     
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
             <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            New user Registation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{height: '50px', width : '300px',fontSize:22,marginLeft:20, backgroundColor:"#F7EB00"}} onClick={() => history.push('/Registation')} size="small" color="primary">
        Click here Registation
        </Button>
       
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
    <Card className={classes.root1}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Guest Login
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button style={{height: '50px', width : '300px',fontSize:22,marginLeft:50, backgroundColor:"#F7EB00"}} onClick={() => history.push('/Login')} size="small" color="primary">
        Click here Guest Login 
      </Button>
      
    </CardActions>
  </Card>
  </Paper>
  
  <br></br>
  <div style={{alignItems:'center'}}>
    <h2>IMPORTANT</h2>
    <h6>
- To be a regular partner to sponsor a child, please click SIGN UP
- Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Utwisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
 </h6>
  </div>
         </Grid>
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid> 
      <div>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{width: '550px', height: '450px'}}
      className="d-block w-100"
      src={require("../assets/pc4.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{width: '550px', height: '450px'}}
      className="d-block w-100"
      src={require("../assets/pc1.jpg")}
      alt="Third slide"
    />
     <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width: '550px', height: '450px'}}
      className="d-block w-100"
      src={require("../assets/pc2.jpg")}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
    
    </Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
      </div>
    </div>
  );
}
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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root1: {
    maxWidth: 2050,
    borderColor:"#0A0A09",
    BorderAllSharp:'2px'
  },
  media: {
    height: 150,
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