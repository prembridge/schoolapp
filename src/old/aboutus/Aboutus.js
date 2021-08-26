
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { Wave } from 'react-animated-text';
//import { Button } from 'bootstrap';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:1600,
      backgroundColor:'#090909'
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
    const history = useHistory();
        return(
            <div className={classes.root}>
              <div style={{color:'white' ,paddingLeft:500,paddingTop:80,paddingBottom:50}}>
              <h3 style={{ fontFamily: 'Montserrat,sans-serif',fontSize:'50px',fontWeight:'bold'}}> HOW DO WE DO IT ?
              {/* <Wave text="
HOW DO WE DO IT ?
" 
 //effect="fadeOut" effectChange={1.0}
/> */}
</h3>
<br></br>
</div>
             <div class="col-md-12 well">
             <div class="row">
        <div class="col-xs-3 col-md-6">
          <div style={{paddingLeft:'300px'}}>
          <div style={{color:'#FFEDD9'}}>
        <h1 style={{ fontFamily: 'Montserrat,sans-serif',fontSize:'30px',fontWeight:'bold'}}>1. IMPACTING YOUNG LIVES</h1>
        </div>
        <div style={{color:'white'}}>
        <h4 style={{fontFamily:'Raleway,sans-serif',paddingBottom:'90px'}}>
According to NXXXX, over 20% of children below the age of 15 years in India are deprived of access to basic education . This is due to to various factors like poor financial background, lack of school in their region, social barriers towards girl child and physical disability. We are building a channel for such children to access a better tomorrow.</h4>
</div>
</div>
        </div>
        <div class="col-xs-3 col-md-6">
            <div class="first"> 
            <img  style={{width: '220px',paddingLeft:'70px',paddingBottom:'90px'}}src={process.env.PUBLIC_URL + '/images/im2.png'}/> 
            </div>
            <div class="second"> 
             
            </div>
        </div>
    </div>
    </div>
    <br></br>
    <div class="col-md-12 well">
             <div class="row">
        <div  class="col-xs-3 col-md-6">
        <img  style={{width: '600px',paddingLeft:'380px'}}src={process.env.PUBLIC_URL + '/images/im3.png'}/>
        </div>
        <div class="col-xs-3 col-md-6">
            <div  class="first"> 
            <div style={{paddingRight:"250px",paddingTop:"10px"}}>
            <div style={{color:'#FFEDD9'}}>
           <h1 style={{fontFamily: 'Montserrat,sans-serif',fontSize:'30px',fontWeight:'bold'}}> 2. CHANGING THEIR MINDSET</h1>
           </div>
           <div style={{color:'white'}}>
           <h4 style={{fontFamily:'Raleway,sans-serif',paddingBottom:'90px'}}>These children grow up in a vulnerable environment surrounded with abuse, addictions, violence and other social evils. The Pannah volunteers reach out to the children of these vulnerable sections through the communities they are placed in to provide access to education for all. </h4>
           </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <br></br>
    <div class="col-md-12 well">
             <div class="row">
        <div class="col-xs-3 col-md-6">
          <div style={{paddingLeft:'200px',paddingTop:"70px"}}>
          <div style={{color:'#FFEDD9'}}>
        <h1  style={{ fontFamily: 'Montserrat,sans-serif',fontSize:'30px',fontWeight:'bold'}}>3. GIVING A HOPE FOR TOMORROW</h1>
        </div>
        <div style={{color:'white'}}>
        <h4  style={{fontFamily:'Raleway,sans-serif',paddingBottom:'90px'}}>
        Working together with you, we provide these children a platform to dream big. Pannah opens a gateway for a better quality life through higher education scholarships and employment guidance.</h4>
        </div>
        </div>
        </div>
        <div class="col-xs-3 col-md-6">
            <div class="first"> 
            <img  style={{width: '400px',paddingLeft:'70px',paddingBottom:'100px',paddingTop:'10px'}}src={process.env.PUBLIC_URL + '/images/im1.png'}/> 
            </div>
            <div class="second"> 
             
            </div>
        </div>
        
    </div>
   <br></br>
    </div>
    <div style={{paddingLeft:'700px',}}>
    <button   onClick={() => history.push('/Newuser')}style={{backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50}}>Partner Now</button>
    </div>
                 {/* <Grid container spacing={3}>
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
        </Grid>    */}
        </div>     
        )
    }
    



