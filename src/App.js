import React from 'react';
// import logo from './logo.svg';
 import './App.css';
import Header from './components/header/Header'
import Home from '../src/components/home/Home'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles({
  root: {
    // minHeight :'100vh',
    // backgroundImage: `url(${process.env.PUBLIC_URL + "/images/ind.jpeg"})`,
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'cover'
   // backgroundColor:"#FFFFE0"
  },
});

function App() {
  const classes = useStyles();
  return (
    <div style={{
      backgroundColor: ' #ffffff',
    }} >
     <CssBaseline />
     < Header/>
     <div>
     {/* <Home/> */}
     </div>

    </div>
  );
}

export default App;
