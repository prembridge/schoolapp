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
export default function Guestprofile() {
  
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
     <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
     backgroundSize:'cover'}} >
    
    <MDBCard  style={{ backgroundColor:'#FFFFFF',borderColor:"#5D6D7E", width: "60rem", borderRadius:'10px',marginLeft:330,} }>
            <MDBCardBody>
              <MDBRow>
                <h1 className="h4 text-center py-4">Grant Sponsorship</h1>

                <h5 style={{paddingLeft:180}} >Sponsorship Amount</h5>
                <div>
                <button style={{width:100,alignItems:'center',marginLeft:5,marginBottom:10}}> 7000</button>
                </div>
              
                <button  onClick={() => {
      window.open(
       ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
      );
    }} style={{width:150,alignItems:'center',marginLeft:390,marginBottom:10, color:'white',backgroundColor:'brown'}}>Pay</button>
              
                </MDBRow>
                </MDBCardBody>
                </MDBCard>
                <div style={{paddingLeft:500}}> <h5> OR </h5></div>
                
 <div>
      <h5 style={{color:"black",textAlign:'justify', flexDirection: 'column',flex: 1,
    justifyContent: 'center',
    alignItems: 'center',width:'50%',fontSize:'8'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
  
 </div> 
 <div style={{paddingLeft:900,paddingBottom:900 ,display:'flex',flexDirection:'row',}}>
      <MDBContainer fluid class="d-flex justify-content-cente"  >
      <div >
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
  /</div>
    </div>
   
    </div>
    );
   };

  
