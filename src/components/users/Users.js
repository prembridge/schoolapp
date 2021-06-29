import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      backgroundColor:"#808080",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
}));

export default function Users() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
         
          <iframe width="600" height="315" src="https://www.youtube.com/embed/aQnR53coZmg"  frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>
          </Paper>
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
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h1>Grass Root-Based</h1>
              <p>The relief and development work by World Vision India is community-based. Our staff reside with the communities at the grassroots - live with them, learn from them, listen to them and work alongside them to find solutions to their problems. An independent board exercises overall governance leadership, 
                  managing risks and ensuring compliance to statutory requirements.</p></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}><h1>Grass Root-Based</h1>
              <p>The relief and development work by World Vision India is community-based. Our staff reside with the communities at the grassroots - live with them, learn from them, listen to them and work alongside them to find solutions to their problems. An independent board exercises overall governance leadership, 
                  managing risks and ensuring compliance to statutory requirements.</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
              <h1>Focus on Children</h1>
              <p>All development work that we perform focus on children - the bright young minds of tomorrow.</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><h1>Focus on Children</h1>
              <p>All development work that we perform focus on children - the bright young minds of tomorrow.</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><h1>Focus on Children</h1>
              <p>All development work that we perform focus on children - the bright young minds of tomorrow.</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><h1>Focus on Children</h1>
              <p>All development work that we perform focus on children - the bright young minds of tomorrow.</p></Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}