import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from '../users/Users'
import Aboutus from '../aboutus/Aboutus'
import { useHistory } from 'react-router-dom';
import img2 from "../assets/Panaah.jpg"
import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";

const Styles = styled.div`
@import url(https://fonts.googleapis.com/css?family=Expletus+Sans:600);
/*==========SCALE-IN==========*/
@-webkit-keyframes scale-in {
     0%   {transform: scale(10, 10); opacity: 0;}
    100% {transform: scale(1, 1); opacity: 1;}
}

@keyframes scale-in {
    0%   {transform: scale(10, 10); opacity: 0;}
    100% {transform: scale(1, 1);  opacity: 1;}
}
/*==========ROLL-OUT==========*/
@-webkit-keyframes roll-out {
    0%   {width: 0;}
    100% {width: 100%; }
}
@keyframes roll-out {
    0%   {width: 0;}
    100% {width: 100%; }
}
body{
   background: #392f28;
}
main{
  width: 100%;
  overflow: hidden;
  font-family: 'Expletus Sans', cursive;
}
.hero{
  width: 100%;
  max-width: 1550px;
  height: 350px;
  text-align: center;
  margin: 0 auto;
  background: #392f28;
  position: relative; 
  color: #ffffff;
}

.hero h1{
  font-size: 4.5rem;
  color: #FFEDD9;
  font-family: "Fira Sans sans-serif", 'monospace';
  font-weight: bold;
  margin: auto;
  letter-spacing: 0rem;
  text-align: left;
  line-height: 1.0;
  text-shadow: 2px 1px 2px black;
  position: absolute; 
  top: 350px ;
  left: 100px;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.hero h2{
  font-size: 3.5em;
  font-family: "Montserrat,sans-serif";
  margin: auto;
  position: absolute; 
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; 
}
.hero p{
  font-size: 1.5em;
//   font-family: 'Expletus Sans', cursive;
  font-family: "Lucida Console", "Courier New", monospace;
  margin: auto;
  position: absolute; 
  top: 300px;
  left: 0;
  right: 0;
  bottom: 0;
   z-index: 1;
}
.hero img{
  width: 100%;
  height: 150%;
}
.bar{
  width: 100%;
  height: 250px;
//   background: -moz-linear-gradient(289deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
//   background: -webkit-linear-gradient(289deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
//   background: -ms-linear-gradient(289deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
//   background: linear-gradient(161deg, #c60a09 0%, #f23332 36%, #c60a09 100%);
  ///
  background: -moz-linear-gradient(289deg, #000000 0%, #000000 36%, #c60a09 100%);
  background: -webkit-linear-gradient(289deg, #000000 0%, #000000 36%, #c60a09 100%);
  background: -ms-linear-gradient(289deg, #000000 0%, #000000 36%, #c60a09 100%);
  background: linear-gradient(161deg, #000000 0%, #000000 36%, #c60a09 100%);
  opacity: 0.3;
  position: absolute; 
  z-index: 0;
  left: 0;
  top: 50px;
  -ms-transform-origin: 100% 0%;
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
   -webkit-animation: roll-out 1.2s ease-out;
  -moz-animation: roll-out 1.2s ease-out ;
    animation: roll-out 1.2s ease-out ; 
}
.hero h1, .hero p{
  -webkit-animation: scale-in 1.3s ease-out;
  -moz-animation: scale-in 1.3s  ease-out;
    animation: scale-in 1.3s ease-out; 
}

@media all and (max-width: 768px) {
  .hero{
    height: 40vw;
  }
  .hero img{
    width: 100%;
    height: 120%;
  }
  .bar{
    height: 30vw;
    top: 2vw;
  }
  .hero h1{
    font-size: 8vw;
    font-family: "Fira Sans sans-serif", 'monospace';
    margin-top: 0.5rem;
    top: 9vw;
    left: 5vw;
  }
  .hero h2{
    font-size: 6vw;
    font-family: "Times New Roman", Times, serif;
    top: 15vw;
  }
  .hero p{
    font-size: 2.5vw
    font-family: 'Expletus Sans', cursive;
    text-align: justify;
    position: relative;
    margin-left: -70px;
    margin-top: -50px;
    // font-family: "Lucida Console", "Courier New", monospace;
    top: 28vw;
    left: 10vw;
    right: 5vw;
  }


}
`

const Home = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  // const classes = useStyles();
  const history = useHistory();
  
  return (
    <div >
      <Styles >
        <div class="hero">
          <img src={img2} />
          <h1> An initiative <br/> For a better tomorrow </h1>
      
            <Aboutus />        
           
            <Users/>
  
        </div>
      </Styles>
    </div>





  )

};
export default Home;