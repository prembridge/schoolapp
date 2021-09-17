import React, { useState, useEffect, useContext } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components";
import logo from "../assets/Panaah3.png";
import { breakpoints as bp } from "../../GlobalStyle";
import { usercontext } from '../header/Header'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';

const Styles = styled.div`
img {
  margin-left: 0.5rem;
}
  .navbar {
    background-color: #FFEDD9;
    fontFamily: 'Fuggles, cursive' !important,
    // height: 63px;
  }
  .navbar-toggler-icon {
    color: #404040
  }
  .ml-auto {
    margin: 5 !important;
  }
  .basic-navbar-nav {
    color: #FFEDD9;
  }
  .Brand {
    padding-left: 15px;
  }
  .logo {
    padding-left: 15px;
  }
  .HeaderDrop {
    float: left;
  }
  .links {
    padding-top: 2rem;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    padding-right: 3.5rem;
    padding-left: 1.5rem;
    &:hover {
      color: white;
      position: sticky;
    }
    @media (max-width: ${bp.mobile}) {
      .navbar {
        background-color: #000;
      }
     
    }
  }
`;

function Header() {
  const [name, setName] = React.useState("");
  const { state, dispatch } = useContext(usercontext)
  //const [state ,dispatch ] = useContext(usercontext)
  function logOut() {
    localStorage.clear();
    dispatch({ type: 'USER', playload: false })
    history.push("/Newuserlogin");
  };

  async function getstate() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("resdata")}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/getuser", requestOptions)
      .then(response => response.json())
      .then(json => {
        var firstname = json.user.FirstName;
        localStorage.setItem("log", firstname)
        localStorage.getItem("log")
        //dispatch({type:''})
        setName(firstname)
        console.log("name............", firstname)
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  // const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
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
  }; function handleListKeyDown(event) {
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
    //prevOpen.current = open;
  },
  );

  return (
    <div>
      <Styles>
        <Navbar className="navbar" expand="lg" >
          <img
            alt=""
            src={logo}
            width="100"
            height="70"
            href="/Home"
            className="d-inline-block align-top"
            onClick={() => history.push('/Home')}
          />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav_bar_wrapper">
              {state ?
                (
                  <>
                    {/* <h3>Welcome, {username.user.FirstName} {username.user.LastName}</h3> */}
                    <Nav className="links">
                      <Nav.Item>
                        <Nav.Link href="/Home">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="./about">Our Story</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/home">Donate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                      </Nav.Item>
                      <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      >
                        Hi !{localStorage.getItem("log")}
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
                                  <MenuItem onClick={() => history.push('/Userprofile')}>Profile</MenuItem>
                                  <MenuItem onClick={logOut}>Logout</MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </Nav>
                  </>
                ) : (
                  <>
                    <Nav.Item>
                      <Nav.Link href="/Home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Newuser">Get Involved</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Groups">Our Story</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Project">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Newuserlogin">Login</Nav.Link>
                    </Nav.Item>
                  </>
                )}
            </Nav>
            <Nav className="HeaderDrop">
              {localStorage.getItem("user-info") ? (
                <>
                  {/* <NavDropdown title={tokenvalue}>
                    <NavDropdown.Item href="/profile">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                  </NavDropdown> */}
                </>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </div>

  );
}

export default Header;
