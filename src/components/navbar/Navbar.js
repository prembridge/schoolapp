import React ,{useState,useEffect,useContext} from 'react';
// import logo from './logo.svg';
//import './App.css'
// import Header from './components/header/Header'
 import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline'
import Home from '../home/Home'
import {Link ,useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {usercontext} from '../header/Header'
//import {usercontext} from '../header/Header'
//import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles ((theme) => ({
  root: {
    minHeight :'100vh',
  
    display: 'flex',
    justifyContent:'space-between',
     alignitems:'center',
   minHeight: '15vh',
   backgroundColor:'#FFEDD9',
   
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  navlink:{
     display: 'flex',
    alignitems: 'center',
    //justifyContent:'space-between',                // height is '0' so that the view will not occupy space
    width: '40%',              // as much as you want to 'Stretch' the underline
    listStyleType: "none",
    fontFamily: 'Fuggles, cursive',
    fontSize:18,
    paddingRight:90
  },
  
}));

function Navbar() {
 const [name, setname] =useState('');
 const {state , dispatch }= useContext(usercontext)
 //const [state ,dispatch ] = useContext(usercontext)
  function logOut() {

    localStorage.clear();
    dispatch({type:'USER',playload:false})
    history.push("/Newuserlogin");
  };
  
  async function getstate () {
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("resdata")}`);
  
   var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
    await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/getuser", requestOptions)
    .then(response => response.json())
    .then(json =>{
     var resdata =  json.user.FirstName;
      localStorage.setItem("log",resdata)
      localStorage.getItem("log")
      //dispatch({type:''})
      setname(resdata)
      console.log("resdara",name)
     
     
    //   this.setState({
       
    //     err:res,
    //  })
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
  
  //  var data =  await localStorage.getItem("name")
  //  console.log("ddddddddddddddddddd",data)
  //  setData(data)

 }
  const classes = useStyles();
  const history = useHistory();
  const [open,  setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  //const [value , setvalue] =React.useState("")
  React.useEffect(() => {
   getstate()
   // window.location.reload();
    // if (prevOpen.current === true && open === false) {
    //   anchorRef.current.focus();
    // }
   // window.location.reload(false);

// setvalue({valuee:localStorage.getItem('name')})
//  console.log("vvvvvvvvvvvvvvv",localStorage.getItem('name'))
//  console.log(value)
    prevOpen.current = open;
  }, [open]);
  const navstayle ={
    color:'#17202A',
    paddingRight:20,
    //fontFamily:'Raleway'
  }
  return (
    <div>
    <nav className={classes.root}>
    <div style={{paddingLeft:100,paddingTop:0}}>
        <img  style={{width: '140px', height: '70px',}}src={process.env.PUBLIC_URL + '/images/Panaah3.png'}/> 
       </div>
        <ul className= {classes.navlink}>
        {state?
        
        (
          <>
        <Link style={navstayle}to='/Home'>
            <li >Home</li>
            </Link>
            <Link style={navstayle}to ='/Groups'>
            <li>OurStories</li>
            </Link>
            <Link style={navstayle}to ='/Donation'>
            <li>Donate </li></Link>
            <Link style={navstayle}to ='/Project'>
            <li>ContactUs </li></Link>
           
          <Button style={{fontFamily: 'Fuggles, cursive'}}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Hi!{localStorage.getItem("log")}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                    <MenuItem onClick={() => history.push('/Userprofile')}>Profile</MenuItem>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
            </>
        )
            : (
              <>
            <Link style={navstayle}to='/Home'>
            <li>Home</li>
            </Link>
            <Link style={navstayle}to='/Newuser'>
            <li>GetInvolved</li>
            </Link>
            <Link style={navstayle}to ='/Groups'>
            <li>OurStories</li>
            </Link>
            <Link style={navstayle}to ='/Project'>
            <li>ContactUs </li>
            </Link>
            <Link style={navstayle}to='/Newuserlogin'>
            <li>Login</li>
           </Link>
            </>
            )}

            {/* <Link style={navstayle}to='/Donation'>
            <li>Donation</li>
            </Link> */}
          
        </ul>
        {/* <div style={{paddingRight:100}}>
        <img  style={{width: '140px', height: '100px'}}src={process.env.PUBLIC_URL + '/images/Panaah_Logo.png'}/> 
       
        </div> */}
        
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
