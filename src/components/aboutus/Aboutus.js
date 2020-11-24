
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
        backgroundColor:"#c9b3c8",
      padding: theme.spacing(1),
      textAlign: 'center',
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
                backgroundColor: '#c9b3c8',
              }}
            >
              <h1>Abouts us</h1>
              <img  style={{width: '150px', height: '150px'}}src={process.env.PUBLIC_URL + '/images/chi.jpg'}/>
            <p> 
            World Vision India is one of the country’s largest child-focused humanitarian organisations. With over six decades of grassroot experience, we employ proven, effective development, public engagement and relief practices empowering vulnerable children
find more...</p>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#beedd9'}}>
              <p>World Vision India is one of the country’s largest child-focused humanitarian organisations. With over six decades of grassroot experience, we employ proven, effective development, public engagement and relief practices empowering vulnerable children and communities living in contexts of poverty and injustice to become self-sufficient and bring lasting change. We serve all children regardless of religion, race, ethnicity or gender as a demonstration of Christ’s unconditional love for all people.

World Vision India works in 123 districts impacting around 26 lakh children and their families in over 6200 communities spread across 24 states and the National Capital Region to address issues affecting children in partnership with governments, civil societies, donors and corporates.

With you, we can build a nation fit for children. Join us. Together for children. For change. For life.</p>
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
                backgroundColor: '#c9b3c8',
              }}
            >
              <h1>Our Team.</h1>
              <img  style={{width: '150px', height: '150px'}}src={process.env.PUBLIC_URL + '/images/chi.jpg'}/>
            <p> 
            World Vision India is one of the country’s largest child-focused humanitarian organisations. With over six decades of grassroot experience, we employ proven, effective development, public engagement and relief practices empowering vulnerable children
find more...</p>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#beedd9'}}>
              <p>World Vision India is one of the country’s largest child-focused humanitarian organisations. With over six decades of grassroot experience, we employ proven, effective development, public engagement and relief practices empowering vulnerable children and communities living in contexts of poverty and injustice to become self-sufficient and bring lasting change. We serve all children regardless of religion, race, ethnicity or gender as a demonstration of Christ’s unconditional love for all people.

World Vision India works in 123 districts impacting around 26 lakh children and their families in over 6200 communities spread across 24 states and the National Capital Region to address issues affecting children in partnership with governments, civil societies, donors and corporates.

With you, we can build a nation fit for children. Join us. Together for children. For change. For life.</p>
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
                backgroundColor: '#c9b3c8',
              }}
            >
              <h1>Our VISION </h1>
              <img  style={{width: '150px', height: '150px'}}src={process.env.PUBLIC_URL + '/images/chi.jpg'}/>
            <p> 
            World Vision India is one of the country’s largest child-focused humanitarian organisations. With over six decades of grassroot experience, we employ proven, effective development, public engagement and relief practices empowering vulnerable children
find more...</p>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#beedd9'}}>
              <p>World Vision India is one of the country’s largest child-focused humanitarian organisations. With over six decades of grassroot experience, we employ proven, effective development, public engagement and relief practices empowering vulnerable children and communities living in contexts of poverty and injustice to become self-sufficient and bring lasting change. We serve all children regardless of religion, race, ethnicity or gender as a demonstration of Christ’s unconditional love for all people.

World Vision India works in 123 districts impacting around 26 lakh children and their families in over 6200 communities spread across 24 states and the National Capital Region to address issues affecting children in partnership with governments, civil societies, donors and corporates.

With you, we can build a nation fit for children. Join us. Together for children. For change. For life.</p>
            </BackSide>
          </Flippy>
            </Paper>
        </Grid>
        </Grid>   
        </div>     
        )
    }
    



