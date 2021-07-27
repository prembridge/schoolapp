import React,{useState,useEffect} from 'react';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Button} from 'bootstrap';
import { updateTextFields } from 'materialize-css';
import Component from "@reactions/component";
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

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
  const [NMonth, setNMonth] = useState('');
  const [Nchild, setNchild] =useState('');
  const [Nyear,setNyear] =useState('');
  const [Inst, setInst] = useState('');
  const[PaymentType ,setPaymentType] = useState('');
  useEffect(() => {
  
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/getplan/"+localStorage.getItem("id"), requestOptions)
      .then(response => response.json())
      .then(json => {
       var Payment_type = json.data.Payment_type
       var No_of_child = json.data.No_of_child
       var No_of_year = json.data.No_of_year
       var Installment = json.data.Total
      //  var pkid =json.data.Pk_id
      setNchild(No_of_child)
      setNyear(No_of_year)
      setInst(Installment)
      setPaymentType(Payment_type)
       localStorage.setItem("Payment_type",Payment_type)
      // localStorage.setItem(" No_of_child",)
      //   localStorage.setItem("pkid",pkid)
        var get = localStorage.getItem("Payment_type")
        // console.log("id",Payment_type)
        console.log("json usercurent..",json)
        console.log("Noofchild",No_of_child)
        console.log("NoofYear",No_of_year)
        console.log("installment",Installment)
      }
       )
      .catch(error => console.log('error', error));


})
 const updatedrop =() =>{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "payt": NMonth
});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

  
  fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/putplan/"+localStorage.getItem("pkid"), requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}
  const classes = useStyles();
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
  return (
    <div className={classes.root}>
      <div class="container">
      <div class="main-body">
     
          <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
          <div class="card">
          <div class="card-body">
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
          <div class="card mt-3">
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
                    <span class="text-secondary">{localStorage.getItem("Payment_type")}</span>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{marginLeft:'-18px'}}>
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"></svg> Update Current plan</h6>
                    <span class="text-secondary">
                   
							
								<div style={{width:'305px'}}>
									{/* <input type="button" onClick={updatedrop}  class="btn btn-primary px-4" value="Update"></input> */}
                  <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Current plan" {...a11yProps(0)} />
          <Tab label="Edit plan" {...a11yProps(1)} />
         
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
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>TotalAmount:</h6>
                    <span class="text-secondary">{Inst}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>InstallmentAmt:</h6>
                    <span class="text-secondary">{Inst}</span>
                  </li>
      </TabPanel>
      <TabPanel value={value} index={1}>
       	<input type="button" onClick={updatedrop}  class="btn btn-primary px-4" value="Update"></input>
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
  </select>

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
									<p>Last Payment:</p>
                  <p>Next Payment:</p>
                  <p>Auto Pay</p>
                  <p>View Transactions</p>

          </div>
          </div>
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
          <div class="card">
          <div class="card-body">
          <h5 class="d-flex align-items-center mb-3"> CARD INFORMATION</h5>
									<p>Card Number:</p>
                  <p>Name on the card:</p>
                  <p>Valid Through:</p>

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
  );
}