import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      backgroundColor:"#d7baf7",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
    </div>
  );
}