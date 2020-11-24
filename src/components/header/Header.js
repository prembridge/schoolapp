import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import Carousel from 'react-bootstrap/Carousel'
import Carousel from '../carousel/Carousel'
import Project from '../projects/Project'
import Home from '../home/Home'
import Nav from '../navbar/Navbar'
import Login from '../login/Login'
import Donation from '../donation/Donation'
import Registation from '../registation/Registation'
import Groups from '../groups/Groups'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
//import Home from '../home/Home';
// import {
//     BrowserRouter as Router,
//     Switch, Route, Link
//   } from "react-router-dom";
const useStyles = makeStyles({
    appbar: {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpeg"})`,
   
     },
     root:{
        //  display:'flex',
        //  justifyContent:'center',
        //  alignItems:'center',
        //  height:'100vh'
         
     },
     appbartitle:{
         flexGrow:'1',
         width:'50%',
         marign:'0 auto'
     },
     appbarwarper:{
         width:'80%',
         marign:'0 auto'
     }
});

function Header() {
  //const history = useHistory();
 const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const sayHello =() => {

    return  <Switch>
    <Route path="/project" exact component={Project} />
    
</Switch>
}
  return (
    <div>
      
    <Router>
    <div className ={classes.root}>

     
       <Nav/>
       
       <Switch>
      
       <Route 
       path="/Project" component={Project}></Route>
       <Route 
       path="/Home" component={Home}></Route>
         <Route 
       path="/Login" component={Login}></Route>
       <Route 
       path="/Donation" component={Donation}></Route>
         <Route 
       path="/Registation" component={Registation}></Route>
       <Route 
       path="/Groups" component={Groups}></Route>
        <Route 
       path="/" component={Home}></Route>
       </Switch>
         
<div>
    
</div>

    </div>
    </Router>
    <div>
      {/* <Home/> */}
    </div>
    </div>
  );
}

export default Header;






