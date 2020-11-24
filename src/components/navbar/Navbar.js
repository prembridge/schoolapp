import React from 'react';
// import logo from './logo.svg';
//import './App.css'
// import Header from './components/header/Header'
 import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline'
import Home from '../home/Home'
import {Link} from "react-router-dom"
const useStyles = makeStyles({
  root: {
    //minHeight :'100vh',
   // backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpeg"})`,
     backgroundRepeat:'no-repeat',
     backgroundSize:'cover',
    display: 'flex',
    justifyContent:'space-between',
     alignitems:'center',
   minHeight: '10vh',
   backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpeg"})`,
  //liststyle: 'none',
  //width: '550',
  color:' #ffffff'
  },
  navlink:{
     display: 'flex',
    alignitems: 'center',
    justifyContent:'space-between',                // height is '0' so that the view will not occupy space
    width: '30%',              // as much as you want to 'Stretch' the underline
    listStyleType: "none"
  },
  
});

function Navbar() {
  const classes = useStyles();
  const navstayle ={
    color:'white',
  }
  return (
    <div>
    <nav className={classes.root}>
        <h3>School Project</h3>
        <ul className= {classes.navlink}>
        <Link style={navstayle}to='/Home'>
            <li>Home</li>
            </Link>
            <Link style={navstayle}to ='/Groups'>
            <li>Our Stories</li>
            </Link>
            <Link style={navstayle}to ='/Project'>
            <li>Contact Us </li>
            </Link>
            
            
            <Link style={navstayle}to='/Donation'>
            <li>Donation</li>
            </Link>
            <Link style={navstayle}to='/Login'>
            <li>Login</li>
            </Link>
        </ul>
    </nav>
   <div>
     
   {/* <Content>
            <div className="page-content" />
            <h3>School Project</h3>
        </Content> */}
   
   
   </div>
    </div>
    
  );
}

export default Navbar;
