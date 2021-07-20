import React, { useEffect, useState } from "react";
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { OpenWithRounded } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    maxHeight:700
  },
  floatcontainer: {
    border: '3px solid #fff',
    padding: '20px'
},

floatchild: {
    width: '50%',
    float: 'left',
    padding: '20px',
    border: '2px solid red'
}  
 
}));



export default function Donation() {
  const [Nchild,setNchild] = useState('');
  const [Nyear, setNyear] = useState('');
  const [NMonth, setNMonth] = useState('');

  const history = useHistory();
  
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
    
    const onChange = ( setIdentifierState ,e) => {
      setIdentifierState(e.target.value);
      // (e.target.value)
    //  setNyear(e.target.value)
    // setNMonth(e.target.value)
      
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
    if(cho=="fullAmount"){
      dis = tot ;
     }
     if(cho=="annual"){
       dis = tot/second;
     }
     if(cho=='halfYearly'){
       dis = tot/(2*second);
     }
     if(cho=='quarterly'){
       dis =tot/(4*second);
     }
     if(cho=='monthly'){
       dis =tot/(12*second);
     }} 
    console.log(children,"children..")
    if (name === "second") {years = refs.sum.current.value = child * (second * 7500);
    tot = years;
    if(cho=="fullAmount"){
      dis = tot ;
     }
     if(cho=="annual"){
       dis = tot/second;
     }
     if(cho=='halfYearly'){
       dis = tot/(2*second);
     }
     if(cho=='quarterly'){
       dis =tot/(4*second);
     }
     if(cho=='monthly'){
       dis =tot/(12*second);
     }}
    console.log("years",years)
    if (name === "sum") { total = refs.second.current.value = child * (second * 7500);
    tot = total;
    if(cho=="fullAmount"){
      dis = tot ;
     }
     if(cho=="annual"){
       dis = tot/second;
     }
     if(cho=='halfYearly'){
       dis = tot/(2*second);
     }
     if(cho=='quarterly'){
       dis =tot/(4*second);
     }
     if(cho=='monthly'){
       dis =tot/(12*second);
     }
  // tot.toString();
}
if (name === "choice") { 
  var tp = refs.sum.current.value = child * (second * 7500)
  tot = tp;
  if(cho=="fullAmount"){
    dis = tot ;
   }
   if(cho=="annual"){
     dis = tot/second;
   }
   if(cho=='halfYearly'){
     dis = tot/(2*second);
   }
   if(cho=='quarterly'){
     dis =tot/(4*second);
   }
   if(cho=='monthly'){
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
      if(cho=="fullAmount"){
        dis = tot ;
       }
       if(cho=="annual"){
         dis = tot/second;
       }
       if(cho=='halfYearly'){
         dis = tot/(2*second);
       }
       if(cho=='quarterly'){
         dis =tot/(4*second);
       }
       if(cho=='monthly'){
         dis =tot/(12*second);
       }
      tota = tot;
      // annual = (tot/second);



   
      setValue(dis)
    }
    useEffect(() => {
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/getplan/"+localStorage.getItem("id"), requestOptions)
        .then(response => response.json())
        .then(json => {
          console.log("jssssssssssssss",JSON.stringify(json))
         var mon = json.data.Payment_type
         var No_of_child = json.data.No_of_child
         var No_of_year = json.data.No_of_year
         var New_entry = json.data.New_entry
         var amount = json.data.Total
         var pkid =json.data.Pk_id
           localStorage.setItem("paymentplan",mon)
           localStorage.setItem("No_of_child",No_of_child)
           localStorage.setItem("No_of_year",No_of_year)
           localStorage.setItem("amount",amount)
           localStorage.getItem("No_of_year")
           localStorage.setItem("New_entry",New_entry)
           localStorage.getItem("New_entry")
           localStorage.getItem("amount")
            var child =localStorage.getItem("No_of_child")
            var year = localStorage.getItem("No_of_year")
            var amt = localStorage.getItem("amount")
           var get = localStorage.getItem("paymentplan")
           console.log(No_of_child)
           console.log(No_of_year)
           console.log(amount)
          console.log("pkid",pkid)
          console.log("json..",json)
          console.log("get",child)
          console.log("year",year)
          console.log("amount",amt)
          console.log("newentery", localStorage.getItem("New_plan"))
        }
         )
        .catch(error => console.log('error', error));
      })
    function postdata () {
      var val = localStorage.getItem("value")
      console.log(val)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
       var raw = JSON.stringify({
        "uid": localStorage.getItem("id"),
        "noc": Nchild,
        "noy": Nyear,
        "tot": localStorage.getItem('value'),
        "pay": NMonth,
        "New_entry": "1"
      });
      
       
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
       
      
      fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/plans", requestOptions)
        .then(response => response.json())
        .then(json => {
          //var mon = json.data.Payment_type
          var pkid =json.data.insertId
            localStorage.setItem("pkid",pkid)
           // localStorage.setItem("pkid",pkid)
            var get = localStorage.getItem("pkid")
           console.log("pkid",pkid)
           console.log("json.. data",json)
           var message = json.message
           alert(message)
           if(message === "Succesfully inserted"){
           window.open(
          ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
         );
           } else {
             if(message === "" )
             alert("please Enter Valid details.")
           }
         }
          )
        .then(result =>  console.log(result,"resulttt afrer posting"))
        .catch(error => console.log('error', error));


        // window.open(
        //   ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
        //  );

    }
function opendata(){
   window.open(
          ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
         );
}
     
    return (
      ( localStorage.getItem("New_plan"))==1?
      
     <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
     backgroundSize:'cover'}} >
       <div class="float-container" style={{ border: '2px black',
    padding: '20px',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
     backgroundSize:'cover'
    }}>

<div class="float-child" style={{ width: '50%',
    float: 'left',
    padding: '20px',
    border: '1px black',backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}}>
  
  <div stlye={{display:'flex', flexdirection:'row'}}>
      

      <h5 style={{color:"black",width:'50%'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
  <h5 style={{color:"black",
    width:'50%'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
  
      <h5 style={{color:"black",textAlign:'justify', flexDirection: 'column',flex: 1,
    justifyContent: 'center',
    alignItems: 'center',width:'50%',fontSize:'8'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
  
 
 </div>
</div>

<div class="float-child" style={{ width: '50%',
    float: 'left',
    padding: '20px',
    border: '1px ', backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}}>
    
<MDBContainer fluid class="d-flex justify-content-cente"  >
  
<div>
  
<MDBRow >
  
  <MDBCard  style={{ backgroundColor:'#FFFFFF',borderColor:"#5D6D7E", width: "30rem", borderRadius:'10px'} }>
      <MDBCardBody>
        <form>
          <p className="h4 text-center py-4">SPONSOR NOW</p>
          <label htmlFor="child" >Number of children</label>

<input
disabled
min="1" max="10"
ref={refs.child}
onChange={onChange.bind(this, setNchild)}
//defaultValue={vars.child}
name="child"
id="child"
type="number"
className="form-control"
placeholder={localStorage.getItem("No_of_child")}
/>

<label htmlFor="second">Sponsorship Duration in Year's</label>
<div>
<input disabled
min="1" max="10"
ref={refs.second}
onChange={onChange.bind(this, setNyear)}
//defaultValue={vars.second}
name="second"
id="second"
type="number"
className="form-control"
placeholder={localStorage.getItem("No_of_year")}
/>
</div>
<label htmlFor="sum">Sponsorship Amount</label>
<div>
<input
disabled
ref={refs.sum}
onChange={onChange}
//defaultValue={vars.sum}
// id="sum"
// name="sum"
// type="number"
className="form-control"
placeholder={localStorage.getItem("amount")}
/>
</div>

<label htmlFor="sum">Payment Plan</label>

<div>
  <select className="browser-default custom-select"  name="choice"
ref={refs.cho}
disabled
// onChange={onChange}  
title="Payment Plan"
id="dropdown-menu-align-right"
//placeholder={localStorage.getItem("payment")}
onChange={onChange.bind(this, setNMonth)}>
    <option disabled>Choose your option</option>
    <option> CurrentPlan:{localStorage.getItem("paymentplan")}</option>
    <option  value="fullAmount">Full Amount</option>
    <option  value="annual">Annual</option>
    <option  value="halfYearly">Half yearly</option>
    <option  value="quarterly">quarterly</option>
    <option value="monthly">Monthly</option>
  </select>
  {localStorage.setItem("value",value)}
  <h4>Total Amount: {value} </h4>
</div>
{/* <div> <Button onClick={postdata}> submit</Button></div> */}
          <div className="text-center py-4 mt-3">
            <Button style={{border:'2px',backgroundColor:'brown'}} 
            onClick={
              opendata
              //   window.open(
              //  ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
              //     )
                 } >
               PayNow
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </Button>
          </div>
        </form>
       
      </MDBCardBody>
    </MDBCard>
   
 
</MDBRow>
</div>
</MDBContainer>

</div>
<button onClick={() => history.push('/Userprofile')}>Profile</button>
</div>


    </div>
   :  <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}} >
      <div class="float-container" style={{ border: '2px black',
   padding: '20px',
   backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
   }}>

<div class="float-child" style={{ width: '50%',
   float: 'left',
   padding: '20px',
   border: '1px black',backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
   backgroundSize:'cover'}}>
 
 <div stlye={{display:'flex', flexdirection:'row'}}>
     

     <h5 style={{color:"black",width:'50%'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
 <h5 style={{color:"black",
   width:'50%'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
 
     <h5 style={{color:"black",textAlign:'justify', flexDirection: 'column',flex: 1,
   justifyContent: 'center',
   alignItems: 'center',width:'50%',fontSize:'8'}} >

A person can adopt irrespective of their marital status and whether or not he or she has a biological son or daughter. 3. A single female can adopt a child of any gender but a single male shall not be eligible to adopt a girl child. In case of a married couple, both spouses should give their consent for adoption</h5>
 

</div>
</div>

<div class="float-child" style={{ width: '50%',
   float: 'left',
   padding: '20px',
   border: '1px ', backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
   backgroundSize:'cover'}}>
   
<MDBContainer fluid class="d-flex justify-content-cente"  >
 
<div>
 
<MDBRow >
 
 <MDBCard  style={{ backgroundColor:'#FFFFFF',borderColor:"#5D6D7E", width: "30rem", borderRadius:'10px'} }>
     <MDBCardBody>
       <form>
         <p className="h4 text-center py-4">SPONSOR NOW</p>
         <label htmlFor="child" >Number of children</label>

<input
min="1" max="10"
ref={refs.child}
onChange={onChange.bind(this, setNchild)}
defaultValue={vars.child}
name="child"
id="child"
type="number"
className="form-control"
//placeholder={localStorage.getItem("No_of_child")}
/>

<label htmlFor="second">Sponsorship Duration in Year's</label>
<div>
<input
min="1" max="10"
ref={refs.second}
onChange={onChange.bind(this, setNyear)}
defaultValue={vars.second}
name="second"
id="second"
type="number"
className="form-control"
//placeholder={localStorage.getItem("No_of_year")}
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
//placeholder={localStorage.getItem("amount")}
/>
</div>

<label htmlFor="sum">Payment Plan</label>

<div>
 <select className="browser-default custom-select"  name="choice"
ref={refs.cho}
// onChange={onChange}  
title="Payment Plan"
id="dropdown-menu-align-right"
//placeholder={localStorage.getItem("payment")}
onChange={onChange.bind(this, setNMonth)}>
   <option disabled>Choose your option</option>
  <option  value="fullAmount">Full Amount</option>
   <option  value="annual">Annual</option>
   <option  value="halfYearly">Half yearly</option>
   <option  value="quarterly">quarterly</option>
   <option value="monthly">Monthly</option>
 </select>
 {localStorage.setItem("value",value)}
 <h4>Total Amount: {value} </h4>
</div>
{/* <div> <Button onClick={postdata}> submit</Button></div> */}
         <div className="text-center py-4 mt-3">
           <Button style={{border:'2px',backgroundColor:'brown'}}
            onClick={
             postdata
// window.open(
//  ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
// );
} >
              Submit
             <MDBIcon far icon="paper-plane" className="ml-2" />
           </Button>
         </div>
       </form>
      
     </MDBCardBody>
   </MDBCard>
  

</MDBRow>
</div>
</MDBContainer>

</div>
<button onClick={() => history.push('/Userprofile')}>Profile</button>
</div>


   </div>
  );
   };

  
