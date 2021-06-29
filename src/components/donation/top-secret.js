import React, { useEffect, useState } from "react";
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    maxHeight:700
  },
 
}));



export default function Donation() {
  
  var tot = 0;
  var sum = 0;
   
    var tota = 0;
    var cho = 0;
    var dis = 0;
    var second =0;
    var child=0;
    var children=0;
    var years = 0;
    var total = 0;
  const classes = useStyles();
  const [refs] = useState({
    child: React.createRef(),
    second: React.createRef(),
    sum: React.createRef(),
    cho: React.createRef()
    });
    
    const [vars] = useState({
    child: 0,
    second: 0,
    sum: 0,
    cho :0
    });
    
    const [value,setValue]=useState('');
    
    const onChange = (e) => {
    const { name, value } = e.target;
    vars[name] = value;
    // Could've used vars, but just use refs because we keep references to all 3
    child = parseInt(refs.child.current.value, 10);
     second = parseInt(refs.second.current.value, 10);
    // const opt = refs.choice.current.value;
    sum = parseInt(refs.sum.current.value, 10);
     cho = refs.cho.current.value;
    // const che = parseInt(refs.div.current.value,10);
    console.log(second,"poof");
    
    if (name === "child") {children = refs.sum.current.value = child * (second * 7500);
    tot = children;
    if(cho=="full"){
      dis = tot ;
     }
     if(cho=="anual"){
       dis = tot/second;
     }
     if(cho=='half'){
       dis = tot/(2*second);
     }
     if(cho=='qua'){
       dis =tot/(4*second);
     }
     if(cho=='mon'){
       dis =tot/(12*second);
     }} 
    console.log(children,"children..")
    if (name === "second") {years = refs.sum.current.value = child * (second * 7500);
    tot = years;
    if(cho=="full"){
      dis = tot ;
     }
     if(cho=="anual"){
       dis = tot/second;
     }
     if(cho=='half'){
       dis = tot/(2*second);
     }
     if(cho=='qua'){
       dis =tot/(4*second);
     }
     if(cho=='mon'){
       dis =tot/(12*second);
     }}
    console.log("years",years)
    if (name === "sum") { total = refs.second.current.value = child * (second * 7500);
    tot = total;
    if(cho=="full"){
      dis = tot ;
     }
     if(cho=="anual"){
       dis = tot/second;
     }
     if(cho=='half'){
       dis = tot/(2*second);
     }
     if(cho=='qua'){
       dis =tot/(4*second);
     }
     if(cho=='mon'){
       dis =tot/(12*second);
     }
  // tot.toString();
}
if (name === "choice") { 
  var tp = refs.sum.current.value = child * (second * 7500)
  tot = tp;
  if(cho=="full"){
    dis = tot ;
   }
   if(cho=="anual"){
     dis = tot/second;
   }
   if(cho=='half'){
     dis = tot/(2*second);
   }
   if(cho=='qua'){
     dis =tot/(4*second);
   }
   if(cho=='mon'){
     dis =tot/(12*second);
   }
 
// tot.toString();
}

tota = tot;
// annual = (tot/second);




setValue(dis)
    console.log(tot,"t");
    };

    const handleSelect=(e)=>{

      dis = 0;
        console.log(child,"child");
        const { name, value } = e.target;
    vars[name] = value;
        child = parseInt(refs.child.current.value, 10);
        second = parseInt(refs.second.current.value, 10);
       // const opt = refs.choice.current.value;
       sum = parseInt(refs.sum.current.value, 10);
       // const che = parseInt(refs.div.current.value,10);
       console.log(second,"poof");
       
       if (name === "child") {children = refs.sum.current.value = child * (second * 7500);
       tot = children;} 
       console.log(children,"children..")
       if (name === "second") {years = refs.sum.current.value = child * (second * 7500);
       tot = years;}
       console.log("years",years)
       if (name === "sum") { total = refs.second.current.value = child * (second * 7500);
       tot = total;}

        const cho = refs.cho.current.value;
      // onChange(e);

      // var choice= refs.tot.current.value;
      // console.log(choice.toString(),"ch");
      console.log(cho,"poog");
      if(cho=="full"){
        dis = tot ;
       }
       if(cho=="anual"){
         dis = tot/second;
       }
       if(cho=='half'){
         dis = tot/(2*second);
       }
       if(cho=='qua'){
         dis =tot/(4*second);
       }
       if(cho=='mon'){
         dis =tot/(12*second);
       }
      tota = tot;
      // annual = (tot/second);




      setValue(dis)
    }
    
    return (
     <div >
       <div>
      <h4 style={{color:"black",textAlign:'justify', flexDirection: 'column',flex: 1,
    justifyContent: 'center',
    alignItems: 'center',width:'50%',fontSize:'8'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h4>
  
 </div> 
      <MDBContainer fluid class="d-flex justify-content-cente"  >
      <div style={{paddingLeft:900,marginTop:-5,paddingBottom:2000}}>
      <MDBRow >
       
        
          <MDBCard  style={{ backgroundColor:'#FFFFFF',borderColor:"#5D6D7E", width: "30rem", borderRadius:'10px'} }>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">SPONSOR NOW</p>
                <label htmlFor="child" >Number of children</label>

    <input
    min="1" max="10"
    ref={refs.child}
    onChange={onChange}
    defaultValue={vars.child}
    name="child"
    id="child"
    type="number"
    className="form-control"
    />
    
    <label htmlFor="second">Sponsorship Duration in Year's</label>
    <div>
    <input
    min="1" max="10"
    ref={refs.second}
    onChange={onChange}
    defaultValue={vars.second}
    name="second"
    id="second"
    type="number"
    className="form-control"
    />
    </div>
    <label htmlFor="sum">Sponsorship Amount</label>
    <div>
    <input
   
    ref={refs.sum}
    onChange={onChange}
    defaultValue={vars.sum}
    // id="sum"
    // name="sum"
    // type="number"
    className="form-control"
    />
   </div>
   {/* <DropdownButton
      alignRight
      name="spc"
      ref={refs.tot}
    // onChange={onChange}
      title="Payment Plan"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="full"  >Full Amount</Dropdown.Item>
              <Dropdown.Item eventKey="anual">Annual</Dropdown.Item>
              <Dropdown.Item eventKey="half">Half yearly</Dropdown.Item>
              <Dropdown.Item eventKey="qua">quarterly</Dropdown.Item>
              <Dropdown.Item eventKey="mon">Monthly</Dropdown.Item>
              
      </DropdownButton> */}
   <label htmlFor="sum">Payment Plan</label>
   <div>
        <select className="browser-default custom-select"  name="choice"
      ref={refs.cho}
    // onChange={onChange}  
      title="Payment Plan"
      id="dropdown-menu-align-right"
      onChange={onChange}>
          <option disabled>Choose your option</option>
          <option  value="full">Full Amount</option>
          <option  value="anual">Annual</option>
          <option  value="half">Half yearly</option>
          <option  value="qua">quarterly</option>
          <option value="mon">Monthly</option>
        </select>
        <h4>You selected {value} </h4>
      </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn onClick={() => {
      window.open(
       ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
      );
    }} >
                     Pay Now
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
       
       
      </MDBRow>
      </div>
    </MDBContainer>
  
    </div>
   
  
    );
   };

  // function repeatStringNumTimes(string, times, choice) {
  //   // string fun = choice;
  //   var chi = "";
  //   if (choice === "yearly") {
  //     chi = 6000;
  //   } else if (choice === "half") {
  //     chi = 3000;
  //   } else if (choice === "quat") {
  //     chi = 1500;
  //   } else if (choice === "month") {
  //     chi = 500;
  //   }
  
  //   // var chi = 6000;
  
  //   // console.log(count);
  //   return string * (times * chi);
  // }
  
  // var top = repeatStringNumTimes(2, 1, "quat");
  // console.log(top);
  // repeatStringNumTimes = (index, val,quat) => {
  //   this.setState({
  //     products: this.state.products.map((product, i) => (
  //       i === index ? {...product, count: val} : product
  //     ))
  //   })
  // }

  // return (
  //   <div className="App">
  //     <div>
  //     <label>
  //         Name:
          
  //    <input 
  //         type="number" min="1" max="10" title="child"
        
        
  //       onChange={e => repeatStringNumTimes(i, parseInt(e.target.value) || 0)}
  //       /> 
  //       </label>
  //       </div>
  //       <label>
  //         Name:
          
  //       <input
  //         type="number" min="1" max="10" title="years" 
         
  //         fullWidth={true}
  //       // value={product.count}
  //       // onChange={e => onChange(i, parseInt(e.target.value) || 0)}
  //       />   </label>
  //       <h3>
  //   Price: 
    
  // </h3>
  //   </div>
  // );
//}



// class Donation extends React.Component {
 
  
//   state = {
//     products: [
    
//       {title: ' Child', count: 0, price:3000},
  
//       {title: ' Years', count: 0, price: 3000},
     
//     ],
   
//   }
  
//   onChange = (index, val) => {
//     this.setState({
//       products: this.state.products.map((product, i) => (
//         i === index ? {...product, count: val} : product
//       ))
//     })
//   }
  

//   render () {
//     return (
//       <MDBContainer >
    
//        <div > <h3> select child</h3></div>

//    <div>
//          <ProductList products={this.state.products} onChange={this.onChange} />
//         <Total products={this.state.products} /> 
      
//         </div>
     
//       </MDBContainer>
//     )
//   }
//   sayHello =()=> {
//   console.log("ffffffffffffffffffffffffffff")
//   return <BrowserRouter>
//   <div className="App">
   
//   <Route path='/Donation' component={() => { window.location = 'https://pages.razorpay.com/pl_Fz1E4oQPaI1DW5/view'; return null;} }/>
//   </div>
//   </BrowserRouter>
  
 
// }
// }

// const ProductList = ({ products, onChange }) => (
//   <ul>
//     {products.map((product, i) => (
//       <li key={i}>
//         {product.title}
      
//         { <input 
//           type="number" min="1" max="10" 
//           value={product.count}
//           onChange={e => onChange(i, parseInt(e.target.value) || 0)}
//         /> } 
//       </li>
//     ))}
//   </ul>
// );

//  const Total = ({ products }) => (

//   <h3>
//     Price: 
//     {products.reduce((sum, i) => (
//       sum = i.count * i.price
//     ), 0)}
//   </h3>
// )
// export default Donation;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
// import Box from '@material-ui/core/Box';
// import { Dropdown } from 'react-bootstrap';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
// const useStyles = makeStyles({
//   root: {
//     Width: 2050,
    
   
//   },
//   media: {
//     height: 240,
    
    
//   },
//   margin:{
//     float: "right"
    
//   }
// });

// export default function Donation() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
//   return (
    
//     <Grid
//   container
//   spacing={0}
//   direction="column"
//   alignItems="center"
//   justify="center"
//   style={{ minHeight: '150vh' }}
//  >
//    <Grid item xs={3}>
  
//     <MDBCard className={classes.root}>
     
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//           Sponsor child
//           </Typography>
//           <Typography gutterBottom variant="h5" component="h2">
//           Number of children:
//           </Typography>
         
//       <FormControl className={classes.margin}>
     
//         <Select
//           labelId="demo-customized-select-label"
//           id="demo-customized-select"
//           value={age}
//           onChange={handleChange}
        
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>1</MenuItem>
//           <MenuItem value={20}>2</MenuItem>
//           <MenuItem value={30}>3</MenuItem>
//           <MenuItem value={10}>4</MenuItem>
//           <MenuItem value={20}>5</MenuItem>
//           <MenuItem value={30}>6</MenuItem>
//           <MenuItem value={10}>7</MenuItem>
//           <MenuItem value={20}>8</MenuItem>
//           <MenuItem value={30}>9</MenuItem>
//           <MenuItem value={10}>10</MenuItem>
//           <MenuItem value={20}>11</MenuItem>
//           <MenuItem value={30}>12</MenuItem>
//         </Select>
//       </FormControl>
      

//       <Typography gutterBottom variant="h5" component="h2">
//           Number of years:
//           </Typography>
//           <FormControl className={classes.margin}>
     
//      <Select
//        labelId="demo-customized-select-label"
//        id="demo-customized-select"
//        value={age}
//        onChange={handleChange}
     
//      >
//        <MenuItem value="">
//          <em>None</em>
//        </MenuItem>
//        <MenuItem value={10}>1</MenuItem>
//        <MenuItem value={20}>2</MenuItem>
//        <MenuItem value={30}>3</MenuItem>
//        <MenuItem value={10}>4</MenuItem>
//        <MenuItem value={20}>5</MenuItem>
//        <MenuItem value={30}>6</MenuItem>
//        <MenuItem value={10}>7</MenuItem>
//        <MenuItem value={20}>8</MenuItem>
//        <MenuItem value={30}>9</MenuItem>
//        <MenuItem value={10}>10</MenuItem>
//        <MenuItem value={20}>11</MenuItem>
//        <MenuItem value={30}>12</MenuItem>
//      </Select>
//    </FormControl>
//           <Typography gutterBottom variant="h5" component="h2">
//           Total Amount:
//           </Typography>
         
//         </CardContent>
//         <CardActions>
//         <MDBBtn size="small" color="primary">
//           pay
//         </MDBBtn>
        
//       </CardActions>
//         <CardActionArea>
//         {/* <CardMedia
//           className={classes.media}
//           image="https://www.nicesnippets.com/upload/thumbnail/footer-social-icon-design-example-using-bootstrap-4.png"
//           title="Contemplative Reptile"
//         /> */}
//         <Carousel>
//   <Carousel.Item interval={1000}>
//     <img style={{width: '550px', height: '450px'}}
//       className="d-block w-100"
//       src={require("../assets/DSC_0501.JPG")}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img style={{width: '550px', height: '450px'}}
//       className="d-block w-100"
//       src={require("../assets/DSC_0503.JPG")}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img style={{width: '550px', height: '450px'}}
//       className="d-block w-100"
//       src={require("../assets/dsc.JPG")}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//       </CardActionArea>
     
//     </MDBCard>

//     </Grid>
//     </Grid>
    
//   );
// }

