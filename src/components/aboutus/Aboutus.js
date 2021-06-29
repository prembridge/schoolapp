
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        backgroundColor:"#808080",
      padding: theme.spacing(4),
      textAlign: 'justify',
      color: theme.palette.text.secondary,
     
    },
  }));
  export default function Aboutus() {
    const classes = useStyles();
       
        return(
            <div className={classes.root}>
                 <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
          <Paper elevation={0} className={classes.paper}>
          <Flippy 
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '400px', height: '400px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#F7EB00',
              }}
            >
              <h1>Our Story</h1>
              <img  style={{width: '90px', height: '90px'}}src={process.env.PUBLIC_URL + '/images/announce.png'}/> 
            <p> 
            The story of how APS Society came into existance
</p>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#F7EB00'}}>
              <p>The story of how APS Society came into existance.</p>
            </BackSide>
          </Flippy>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper elevation={3} className={classes.paper}>
          <Flippy 
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '400px', height: '400px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#ffffff',
              }}
            >
              <h1>Our Vision.</h1>
               <img  style={{width: '75px', height: '75px'}}src={process.env.PUBLIC_URL + '/images/target.png'}/> 
            <p> 
            The Vision statement of APS Society will appear here
</p>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#ffffff'}}>
              <p>The Vision statement of APS Society will appear here
</p>
            </BackSide>
          </Flippy>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper elevation={0} className={classes.paper}>
          <Flippy 
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '400px', height: '400px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#fcba03',
              }}
            >
              <h1>Projects</h1>
               <img  style={{width: '75px', height: '75px'}}src={process.env.PUBLIC_URL + '/images/project.png'}/> 
            <p> 
            All about how Project Panaah
</p>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#fcba03'}}>
              <p>All about how Project Panaah
</p>
            </BackSide>
          </Flippy>
            </Paper>
        </Grid>
        </Grid>   
        </div>     
        )
    }
    



