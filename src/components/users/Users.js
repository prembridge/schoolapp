
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import CarouselUser from './CarouselUser';
import { breakpoints as bp } from "../../GlobalStyle";

import styled from "styled-components";
const Styles = styled.div`
.ourvision {
  background-color: rgb(255, 237, 217);
  margin-top: -20vw !important;
  height: 50%;
  width: 100%;
  
}
.ourvision h3{
  font-size: 5vw;
font-family: "Fira Sans sans-serif", 'monospace';
margin-top: 4.5rem;
left: 35vw !important;
top: 225vw !important;
text-align: center ;
color: #000 !important;
left: 5vw;
}
.ourvision h6{
  font-size: 36px;
  font-family: "Fira Sans sans-serif", 'monospace';
  margin-top: 2.5rem;
  left: 25vw !important;
  top: 530vw !important;
  color: #000 !important;
  left: 5vw;

  @media (max-width: ${bp.mobile}) {
    
    // .ourvision {
    //   background-color: rgb(255, 200, 217);
    //   height: 200px;
    //   width: 908px;
    //   padding-top: -20rem !important;
    // }
    .ourvision h3{
      margin-top: -20vw !important;
      background-color: rgb(255, 200, 217);
      margin-left: -46px;
      font-size: 26vw !important;
      font-family: "Fira Sans sans-serif",'monospace';
      top: 250vw !important;
      color: #000 !important;
    }
    .ourvision h6{
      font-size: 4vw !important;
      font-family: "Fira Sans sans-serif", 'monospace';
      // margin-top: 5.5rem !important;
      left: 25vw !important;
      top: 560vw !important;
      color: #000 !important;
      
    }
  }`


export default function Users() {

  return (
    <Styles>
      <div>
        <Grid >
          <div className='ourvision'>     
              <h3>OUR VISION</h3>
              <h6 >Reaching the last, the least and the lost
                for a better tomorrow </h6>

          </div>
          <div>
            <CarouselUser />
          </div>

        </Grid>
      </div>
    </Styles>
  );
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import styled from "styled-components";
// import { Carousel } from "react-bootstrap";
// import img1 from '../assets/Testimony.jpg'

// const Styles = styled.div`
//    .carousel {
//     top: 100px !important;
//    }
// `

// export default function Home() {
//   return (
//     <div>
//       <Styles>
//         <div className="carousel" >
//           <Carousel fade>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3></h3>
//                 <p></p>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Second slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Fourth slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src=""
//                 alt="Fifth slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Sixth slide"
//               />

//               <Carousel.Caption>
//                 <h3></h3>

//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </div>
//       </Styles>
//     </div>
//   );
// }