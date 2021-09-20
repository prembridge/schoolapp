
import React,{useState,useEffect} from 'react';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
//import { Button} from 'bootstrap';
import { Button } from "@material-ui/core";
import { updateTextFields } from 'materialize-css';
import Component from "@reactions/component";
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';


import styled from "styled-components";
const Styles = styled.div`


@media all and (max-width: 768px) {
      
    .todate{
      margin-top: 50px;
      margin-left: -269px;
     
      }
      
  }`

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Userprofile() {
  const [Npchild,setNpchild] = useState('');
  const [Npyear, setNpyear] = useState('');
  const [NpMonth, setNpMonth] = useState('');
  const [NMonth, setNMonth] = useState('');
  const [Nptotal ,setPTotal] = useState('');
  const [Nchild, setNchild] =useState('');
  const [Nyear,setNyear] =useState('');
  const [totall, setTotal] = useState('');
  const [Inst ,setInst] = useState('');
  const [lpay, setLpay] = useState([]);
  const[PaymentType ,setPaymentType] = useState('');

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
    
    const [valuee,setValuee]=useState('');
    
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
    
    if (name === "child") {children = refs.sum.current.value = child * (second * 9000);
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
    if (name === "second") {years = refs.sum.current.value = child * (second * 9000);
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
    if (name === "sum") { total = refs.second.current.value = child * (second * 9000);
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
  var tp = refs.sum.current.value = child * (second * 9000)
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




setValuee(dis)
    console.log(tot,"t");
   setPTotal(tot)
    };

    const handleSelect=(e)=>{

      dis = 0;
        console.log(child,"child");
        const { name, valuee } = e.target;
    vars[name] = value;
        child = parseInt(refs.child.current.value, 10);
        second = parseInt(refs.second.current.value, 10);
       // const opt = refs.choice.current.value;
       sum = parseInt(refs.sum.current.value, 10);
       // const che = parseInt(refs.div.current.value,10);
       console.log(second,"poof");
       
       if (name === "child") {children = refs.sum.current.value = child * (second * 9000);
       tot = children;} 
       console.log(children,"children..")
       if (name === "second") {years = refs.sum.current.value = child * (second * 9000);
       tot = years;}
       console.log("years",years)
       if (name === "sum") { total = refs.second.current.value = child * (second * 9000);
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
    fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/getplan/"+localStorage.getItem("id"), requestOptions)
      .then(response => response.json())
      .then(json => {
       var Payment_type = json.data.Payment_type
       var No_of_child = json.data.No_of_child
       var No_of_year = json.data.No_of_year
       var Total = json.data.Total
       var AmtPay = json .data.AmtPay
       var pkid =json.data.Pk_id
       var fkid = json.data.Fk_SponsorID
       localStorage.setItem("fkidd",fkid)
       console.log(localStorage.getItem("fkidd"))
      setNchild(No_of_child)
      setNyear(No_of_year)
      setTotal(Total)
      setPaymentType(Payment_type)
      setInst(AmtPay)

       localStorage.setItem("Payment_type",Payment_type)
      // localStorage.setItem(" No_of_child",)
        localStorage.setItem("pkid",pkid)
        localStorage.getItem("pkid")
        var get = localStorage.getItem("Payment_type")
        // console.log("id",Payment_type)
        console.log("json usercurent..",json)
        // console.log("Noofchild",No_of_child)
        // console.log("NoofYear",No_of_year)
        //console.log("installment",Installment)
      }
       )
      .catch(error => console.log('error', error));


})
 const updatedrop =() =>{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "payt": NpMonth,
  "noc": Npchild,
  "noy": Npyear,
  "tot": Nptotal,
  "pen": Nptotal,
  "amt": localStorage.getItem("valuee")
});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

  
  fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/putplan/"+localStorage.getItem("pkid"), requestOptions)
    .then(response => response.json())
    .then(result => alert( JSON.stringify(result),"reault"))
    .catch(error => alert('error',  JSON.stringify(error)));

}
  //const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [Add, setAdd] = useState('');
    const [phone, setphone] = useState('');
    const [pin, setpin] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [country, setcounty] = useState('');
    const submitValue = () => {


      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "firstname": fName,
  "lastname": lName,
  "address": Add,
  "pincode": pin,
  "city": city,
  "state": state,
  "country": country,
  "phonenumber": phone
});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/putuser/ "+localStorage.getItem("id"), requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      // const frmdetails = {
      //     'First Name' : fName,
      //     'Last Name' : lName,
      //     'Phone' : phone,
      //     'Email' : email
      // }
      // console.log(frmdetails);
  }
  const [result, setResult] = ([])
  var raw = "";
  var requestOptions = {
  method: 'GET',
  // body: raw,
  redirect: 'follow'
  };
  fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/trgetlast/"+(localStorage.getItem("fkid"))+'/'+ localStorage.getItem("pkid"), requestOptions)
    .then(response => response.json())
    .then(result => setLpay(result.data[0].Display_Date))
    // .then(result => setResult(result.data[0]))
    .catch(error => console.log('error', error));
   
  const dat = lpay
  function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if(date.getDate() !=d) {
      date.setDate(0);
    }
    return date;
  
  }
  if (PaymentType ==="annual") {
    var n = addMonths(new Date(dat),12).toLocaleString()+ "";
  }
  else if (PaymentType ==="halfYearly") {
    var n = addMonths(new Date(dat),6).toLocaleString()+"";
  }
  else if (PaymentType ==="quarterly") {
    var n = addMonths(new Date(dat),3).toLocaleString()+"";
  }
  else if (PaymentType ==="monthly"){
    var n = addMonths(new Date(dat),1).toLocaleString()+"";
  }

  console.log(result)
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  localStorage.setItem("checkin",checkInDate)
  localStorage.getItem("checkin")
  localStorage.setItem("checkout",checkOutDate)
  localStorage.getItem("checkout")
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
    <Styles>
    <div className={classes.root}>
      <div class="container">
      <div class="main-body">
     
          <div  class="row gutters-sm">
          <div  class="col-md-4 mb-3">
          <div  class="card">
          <div  class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
          <div class="mt-3">
                      <h4>{localStorage.getItem("name")}</h4>
                      <p class="text-secondary mb-1">ID:{localStorage.getItem("id")}</p>
                      <p class="text-muted font-size-sm">INDIA</p>
                     
                    </div>
          </div>
          </div>
          </div>
          <div  class="card mt-3">
          <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h5>SUBSCRIPTION INFORMATION</h5>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>First Name</h6>
                    <span class="text-secondary">{localStorage.getItem("name")}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Last Name</h6>
                    <span class="text-secondary">{localStorage.getItem("lastN")}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Email ID</h6>
                    <span class="text-secondary">{localStorage.getItem("EmailID")}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>PAN ID</h6>
                    <span class="text-secondary">{localStorage.getItem("panid")}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Current plan</h6>
                    <span class="text-secondary">{PaymentType}</span>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{marginLeft:'-18px'}}>
    
                    <span class="text-secondary">
                   
							
								<div style={{width:'305px' ,paddingLeft:'10px'}}>
									{/* <input type="button" onClick={updatedrop}  class="btn btn-primary px-4" value="Update"></input> */}
                  <AppBar  position="static" color="default">
        <Tabs
        
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab style={{minWidth:"50%"}} label="My plan" {...a11yProps(0)} />
          <Tab  style={{minWidth:"50%"}}label= "Edit plan" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Number of Children:</h6>
                    <span class="text-secondary">{Nchild}</span>
                  </li>
                 
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Duration:</h6>
                    <span class="text-secondary">{Nyear +"Years"}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Payment:</h6>
                    <span class="text-secondary">{PaymentType}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Total Amount:</h6>
                    <span class="text-secondary">{totall}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>Installment Amt:</h6>
                    <span class="text-secondary">{Inst}</span>
                  </li>
                  <button style={{marginTop:'20px'}}>Cancel Subscription</button>
      </TabPanel>
      <TabPanel value={value} index={1}>
           
<MDBContainer fluid class="d-flex justify-content-cente">
 
 <div style={{width:'300px',marginLeft:'-2.5rem'}}>
  
 <MDBRow >
  
  <MDBCard  style={{ backgroundColor:'#FFFFFF',borderColor:"#5D6D7E", width: "430px", height:"450px", borderRadius:'10px'} }>
      <MDBCardBody style={{width:'270px',height:'250px'}}>
        <form>
         
          <label htmlFor="child" >Number of children</label>
 
 <input
 min="1" max="10"
 ref={refs.child}
 onChange={onChange.bind(this, setNpchild)}
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
 onChange={onChange.bind(this, setNpyear)}
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
 onChange={onChange.bind(this, setNpMonth)}>
    <option disabled>Choose your option</option>
   <option  value="fullAmount">Full Amount</option>
    <option  value="annual">Annual</option>
    <option  value="halfYearly">Half yearly</option>
    <option  value="quarterly">Quarterly</option>
    <option value="monthly">Monthly</option>
  </select>
  {localStorage.setItem("valuee",valuee)}

  <h6 style={{paddingTop:'20px'}}>Total Amount: {valuee} </h6>
 </div>
 {/* <div> <Button onClick={postdata}> submit</Button></div> */}
          <div className="text-center py-4 mt-3">
            <Button style={{border:'2px',backgroundColor:'#FFEDD9'}}
             onClick={
              updatedrop
 // window.open(
 //  ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
 // );
 } 
 >
               Update
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </Button>
          </div>
        </form>
       
      </MDBCardBody>
    </MDBCard>
   
 
 </MDBRow>
 </div>
 </MDBContainer>
       	{/* <input type="button" onClick={updatedrop}  class="btn btn-primary px-4" value="Update"></input>
         <select className="browser-default custom-select"  name="choice"

// onChange={onChange}  
title="Payment Plan"
id="dropdown-menu-align-right"
onChange={e => setNMonth(e.target.value)}>
    <option disabled>Choose your option</option>
    <option  value="fullAmount">Full Amount</option>
    <option  value="annual">Annual</option>
    <option  value="halfYearly">Half yearly</option>
    <option  value="quarterly">quarterly</option>
    <option value="monthly">Monthly</option>
  </select> */}

      </TabPanel>
     
								</div>
                
						<br></br>
            {/* <div>
            <Component initialState={{ tab: "" }}>
      {({ state, setState }) => (
        <div className="container">
         

          <code>Tabs active-tab:</code>
          <hr />
          <Debug {...state} />

          <code>Exmaple 1</code>
          <hr />
          <Tabs pills onSetTab={({ tab }) => setState({ tab })}>
            <Tabs.Tab title="home">Hodme</Tabs.Tab>
            <Tabs.Tab title="users">
              <div>
                <h1>lkajdlfkjasdf</h1>
              </div>
            </Tabs.Tab>
          </Tabs>

         
        </div>
      )}
    </Component>
            </div> */}
                    {/* <select className="browser-default custom-select"  name="choice"

// onChange={onChange}  
title="Payment Plan"
id="dropdown-menu-align-right"
onChange={e => setNMonth(e.target.value)}>
    <option disabled>Choose your option</option>
    <option  value="fullAmount">Full Amount</option>
    <option  value="annual">Annual</option>
    <option  value="halfYearly">Half yearly</option>
    <option  value="quarterly">quarterly</option>
    <option value="monthly">Monthly</option>
  </select> */}
                    </span>
                  </li>
                  </li>
                </ul>
          </div>
          </div>
          <div class="col-lg-8">
          <div class="card">
          <div class="card-body">
          <h5>PERSONAL INFORMATION</h5>
          
         
          <div class="row mb-3">
          <div class="col-sm-3">
          <h6 class="mb-0">Mobile Number</h6>
          </div>
          <div class="col-sm-9 text-secondary"> 
          <input type="text" class="form-control" onChange={e => setphone(e.target.value)} placeholder={localStorage.getItem("phone")}></input>
          </div>
					 </div>

          <div class="row mb-3">
          <div class="col-sm-3">
          <h6 class="mb-0">Address</h6>
          </div>
          <div class="col-sm-3 text-secondary"> 
          <input type="text" class="form-control" onChange={e => setAdd(e.target.value)} placeholder={localStorage.getItem("Addres")}></input>
          </div>
          <div class="col-sm-3 text-secondary"> 
          <input type="text" class="form-control"  onChange={e => setcity(e.target.value)} name="fname" placeholder={localStorage.getItem("City")}></input>
          </div>
          <div class="col-sm-3 text-secondary"> 
          <input type="text" class="form-control"  onChange={e => setstate(e.target.value)} placeholder={localStorage.getItem("State")}></input>
          </div>
          </div>
          <div class="row mb-3">
          <div class="col-sm-3">
          <h6 class="mb-0">Address</h6>
          </div>
          <div class="col-sm-3 text-secondary"> 
          <input type="text" class="form-control"   onChange={e => setcounty(e.target.value)} placeholder={localStorage.getItem("Country")}></input>
          </div>
          <div class="col-sm-3 text-secondary"> 
          <input type="text" class="form-control"  onChange={e => setpin(e.target.value)} placeholder={localStorage.getItem("Pincode")}></input>
          </div>
          
          </div>
          
          
         
          
          <div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" onClick={submitValue} value="Save Changes"></input>
								</div>
							</div>

          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
          <div class="card">
          <div class="card-body">
          <h5 class="d-flex align-items-center mb-3"> DONATION INFORMATION</h5>
          <p>Last Payment: <b>{moment(lpay).format('MMMM Do YYYY')}</b> Amount paid: <b>₹{Inst}</b></p>  
                  {/* {lpay} */}
                  <p>Next Payment: <b>{moment(n).format('MMMM Do yy')} </b>Amount to be paid: <b>₹{Inst}</b></p>
                  <h5 style={{paddingTop:'10px'}}> TRANSACTIONS </h5>
                  <div className="input-container">
        <div>
          <label style={{paddingRight:'5px'}}>From Date </label>
          <DatePicker
            selected={checkInDate}
            dateFormat="yyyy/MM/dd"
            onChange={handleCheckInDate}
          />
        </div>
        <div className="todate">
        <div style={{paddingLeft:'250px' ,marginTop: '-31px'}}>
          <label style={{paddingRight:'5px',paddingLeft:'20px'}}>To Date</label>
          <DatePicker
      dateFormat="yyyy/MM/dd"
            selected={checkOutDate}
            minDate={checkInDate}
            maxDate={new Date()}
           
            onChange={handleCheckOutDate}
          />
        </div>
        <div style ={{paddingLeft:'510px',marginTop:'-30px'}} >
          <button  disabled={!checkInDate|| !checkOutDate }onClick={() => history.push('/Viewtransaction')}>Submit</button>
        </div>
      </div>
      </div>
      {checkInDate && checkOutDate && (
        <div className="summary">
          {/* <p>
            You book a hotel from {moment(checkInDate).format("LL")} to{" "}
            {moment(checkOutDate).format("LL")}.
          </p> */}
        </div>
      )}

          </div>
          </div>
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
          <div class="card">
          <div class="card-body">
          {/* <h5 class="d-flex align-items-center mb-3"> CARD INFORMATION</h5>
									<p>Card Number:</p>
                  <p>Name on the card:</p>
                  <p>Valid Through:</p> */}

          </div>
          </div>
          </div>
          </div>
          </div>
          </div>

      </div>
   

    </div>
      {/* <Grid container spacing={3}>
       
        <Grid item xs={6}>
          
          <Avatar alt="Remy Sharp" src={require("../assets/dsc.JPG")} className={classes.large} />
          <h2>user name</h2>
          <h2>first name</h2>
          <h2>first name</h2>
          <h2>first name</h2>
        </Grid>
        <Grid item xs={6}>
        <h2>user name</h2>
        <h2>user name</h2>
        <h2>user name</h2>
        <h2>user name</h2>
        </Grid>
       
      </Grid> */}
    </div>
    </Styles>
  );
}