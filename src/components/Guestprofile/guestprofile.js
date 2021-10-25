import React, { useEffect, useState } from "react";
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBInput } from 'mdbreact';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Swal from 'sweetalert2'
import { breakpoints as bp } from "../../GlobalStyle";
import styled from "styled-components";
import {
  Link,

} from "react-router-dom";
const Styles = styled.div`

.guestview {
  
  margin-left: 3px;
   
   
}
.tview{
  padding-Left: 200px,
  padding-Top: 30px,
  font-Family: Montserrat,sans-serif,
  font-Size:20px,
  padding-Bottom:100px
}
.grantspon{
  padding-Top:10px;
  padding-Left:190px
}
.carous{
  margin-top:-182px
}
@media all and (max-width: 768px) {
      
    .guestview{
      margin-left: -539px;
      margin-right: -167px;
      padding-left: 54px;
    width:900px
     
      }
      .tview{
        margin-left: 570px;
        width: 30%;
      }
      .grantspon{
        padding-Top:10px;
        padding-Left: 163px;
        margin-left: 345px;
      }
      .labtext{
        margin-left: -201px;
    padding-top: 80px;
        
      }
      .chidsp{
        margin-top: -103px;
    margin-left: 324px
      }
      .spcard{
        margin-left: -210px;
    margin-top: 24px;
      }
      .carous{
        margin-top:-182px
      }
  }`
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    maxHeight:700
  },
 
}));
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}
export default function Guestprofile() {
  const history = useHistory();
  function forgot() {
    history.push("./terms")
  }
  const [Nchild,setNchild] = useState('');
    const [Nyear, setNyear] = useState('');
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
    // cho: React.createRef()
    });
    
    const [vars] = useState({
    child: 0,
    second: 0,
    sum: 0,
    // cho :0,
    totall:0,
    });
    
    const [value,setValue]=useState('');
    const [amount, setamount] = useState('');
   
    const onChange = ( setIdentifierState ,e) => {
      setIdentifierState(e.target.value);
    const { name, value } = e.target;
    vars[name] = value;
    // Could've used vars, but just use refs because we keep references to all 3
    child = parseInt(refs.child.current.value, 10);
     second = parseInt(refs.second.current.value, 10);
    // const opt = refs.choice.current.value;
    sum = parseInt(refs.sum.current.value, 10);
    //  cho = refs.cho.current.value;
    // const che = parseInt(refs.div.current.value,10);
    console.log(second,"poof");
    console.log(sum,"summm")
    
    if (name === "child") {children = refs.sum.current.value = child * (second * 9000);
    tot = children;
    dis = tot;
   
    }
    console.log(children,"children..")
    if (name === "second") {years = refs.sum.current.value = child * (second * 9000);
    tot = years;
    dis = tot;
   
    }
    console.log("years",years)
    if (name === "sum") { total = refs.second.current.value = child * (second * 9000);
    tot = total;
    dis = tot;
  
}
if (name === "choice") { 
  var tp = refs.sum.current.value = child * (second * 9000)
  tot = tp;
  dis = tot;
 
}

tota = tot;

// annual = (tot/second);




setValue(dis)
    console.log(tota,"t");
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
       
       if (name === "child") {children = refs.sum.current.value = child * (second * 9000);
       tot = children;} 
       console.log(children,"children..")
       if (name === "second") {years = refs.sum.current.value = child * (second * 9000);
       tot = years;}
       console.log("years",years)
       if (name === "sum") { total = refs.second.current.value = child * (second * 9000);
       tot = total;}

        // const cho = refs.cho.current.value;
      // onChange(e);

      // var choice= refs.tot.current.value;
      // console.log(choice.toString(),"ch");
      dis =tot;
      // console.log(cho,"poog");
      // if(cho=="full"){
      //   dis = tot ;
      //  }
      //  if(cho=="anual"){
      //    dis = tot/second;
      //  }
      //  if(cho=='half'){
      //    dis = tot/(2*second);
      //  }
      //  if(cho=='qua'){
      //    dis =tot/(4*second);
      //  }
      //  if(cho=='mon'){
      //    dis =tot/(12*second);
      //  }
      tota = tot;
      // annual = (tot/second);




      setValue(dis)
    }
async function postamount(){
  

  console.log ( localStorage.getItem("fkid"),"idddddddddddd")
      var val = localStorage.getItem("value")
      console.log(val,"bbbbbbbbbbbbbbbbbbbbbbbb")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
       var raw = JSON.stringify({
        "uid":localStorage.getItem("id"),
        "noc": "1",
        "noy": "1",
        "amtp": "1",
        "tot": amount,
        "pen": "1",
        "pay": "1",
        "New_entry": "1"
      });
      
       
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
       
      
    await  fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/plans", requestOptions)
        .then(response => response.json())
        .then(json => {
          
           console.log("json.. data", JSON.stringify(json))
        
           var message = json.message
          
           if(message === "Succesfully inserted"){
            amountRazorpay()

        //    window.open(
        //   ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
        //  );
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


    async function postdata () {
      console.log ( localStorage.getItem("fkid"),"idddddddddddd")
      var val = localStorage.getItem("value")
    
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
       var raw = JSON.stringify({
        "uid":localStorage.getItem("id"),
        "noc": Nchild,
        "noy": Nyear,
        "amtp": '',
        "tot": localStorage.getItem('value'),
        "pen": "",
        "pay": "",
        "New_entry": "1"
      });
      
       
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
       
      
    await  fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/plans", requestOptions)
        .then(response => response.json())
        .then(json => {
          
           console.log("json.. data", JSON.stringify(json))
        
           var message = json.message
          
           if(message === "Succesfully inserted"){
            displayRazorpay()

        //    window.open(
        //   ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
        //  );
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

    async function displayRazorpay() {
      var tempDate = new Date();
 var date = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() ;
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "id": "1",
  "currency": "INR",
  "amount": localStorage.getItem('value'),
  "sponid": localStorage.getItem("id"), //Fk_SponsorID
  "planid": "1", //Pk_id
  "tot": localStorage.getItem('value'), //Total
  "pending": localStorage.getItem('value'), //Pending_amt
  "Date":date //"26/07/2021" //data
});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
  const data = await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/razorpay", requestOptions)
 .then(response => response.json())
//  .then(json =>{
//   console.log("response",data)
//  })
console.log(data ,"data of data")
 
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }
    
      // const data = await fetch('https://gzacors.herokuapp.com/http://122.185.13.163:3013/razorpay', { method: 'POST' }).then((t) =>
      //   t.json()
      // )
    
      // console.log(data,"data....")
    
      var options = {
        "key": 'rzp_live_6GpVhmnXaxwEmB', // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString()+"00",// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": localStorage.getItem("statename"),
      
        "image": `${require("../assets/Panaah3.png")}`,
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": localStorage.getItem("statename"),
            "email": localStorage.getItem("GuestuserEmail"),
            "contact":localStorage.getItem("mobileN")
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 =new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    //document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        //e.preventDefault();
    //}
    }
    async function amountRazorpay() {
 
      var tempDate = new Date();
      var date = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() ;
   var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 var raw = JSON.stringify({
   "id": "1",
   "currency": "INR",
   "amount": amount,
   "sponid":  localStorage.getItem("id"), //Fk_SponsorID
   "planid": "1", //Pk_id
   "tot": amount, //Total
   "pending": amount, //Pending_amt
   "Date": date //data
 });
 var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
 };
   const data = await fetch("https://gzacors.herokuapp.com/https://panaah-api.herokuapp.com/razorpay", requestOptions)
  .then(response => response.json())
 //  .then(json =>{
 //   console.log("response",data)
 //  })
 console.log(data,"data data")
 
 
   const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
 
   if (!res) {
     alert('Razorpay SDK failed to load. Are you online?')
     return
   }
    
      // const data = await fetch('https://gzacors.herokuapp.com/http://122.185.13.163:3013/razorpay', { method: 'POST' }).then((t) =>
      //   t.json()
      // )
    
      // console.log(data,"data....")
    
      var options = {
        "key": 'rzp_live_6GpVhmnXaxwEmB', // Enter the Key ID generated from the Dashboard
    
        "amount": amount.toString()+"00",// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": localStorage.getItem("statename"),
       
        "image": `${require("../assets/Panaah3.png")}`,
        "order_id":data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     "handler": function (response){
     
       console.log("paymentid",response.razorpay_payment_id)
       console.log("orderid",response.razorpay_order_id)
       console.log("signature",response.razorpay_signature)
       
         // alert(response.razorpay_payment_id);
         // alert(response.razorpay_order_id);
         // alert(response.razorpay_signature)
         Swal.fire({
           icon: 'success',
           title: 'Success!...',
           text: 'Your payment was successful!',
         })
     },
        "prefill": {
            "name":  localStorage.getItem("statename"),
            "email":  localStorage.getItem("GuestuserEmail"),
            "contact": localStorage.getItem("mobileN")
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 =new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    //document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        //e.preventDefault();
    //}
    }


    return (
      <Styles>
      <div  className="guestview">
     <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
     backgroundSize:'cover',height:'1150px'}} >
       <div style={{fontFamily: 'Montserrat,sans-serif',fontSize:'20px',paddingLeft:'540px',paddingTop:'20px'}}>
    <h1> Adopt A Child</h1>
    </div>
    {/* style={{paddingLeft:'200px',paddingTop:"30px",fontFamily: 'Montserrat,sans-serif',fontSize:'20px',paddingBottom:"100px"}} */}
    <div className='tview'>
    <h4>Panaah provides you the platform and privilege of contributing / gifting a grant of your convenience without a periodic commitment. A one time gift of any value can still mean a lot to give hope for tomorrow to young lives in hopeless homes today. (Minimum contribution of INR 1000)</h4>
    </div>
    {/* style={{paddingTop:'10px',paddingLeft:"190px"}} */}
   
                <div className="grantspon">
                  <h1>a. General Grant Sponsorship</h1>
                
                </div>
                {/* style={{paddingLeft:'790px',paddingBottom:'0px',marginTop: '-70px'}} */}
                <div className="labtext">
                <div style={{paddingLeft:'790px',paddingBottom:'0px',marginTop: '-70px'}}>  
                
            <label >
            Sponsorship Amount</label>
             <MDBInput style={{borderColor: 'gray', borderWidth: 1,maxWidth:'150px' }}
              hint="1000"
              type="amount"
              name="amount"
              onChange={e => setamount(e.target.value)}
              />
<div>
</div>
      <Button 
      type ='button'
       onClick={
              postamount
            
                 }style={{border:'2px',backgroundColor:'#FFEDD9' }}>Pay Now</Button>
    </div>
               </div>
    
                
 <div style={{paddingTop:'12px',paddingLeft:"190px"}}>
   <h1> OR</h1>
 </div>
 <div className="chidsp">
 <div style={{paddingTop:'50px',paddingLeft:"190px"}}>
   <h1>b. Child Sponsorship
</h1>
 </div>
 </div>
 <div className="spcard">
 <div style={{paddingLeft:700,paddingBottom:'190px' ,display:'flex',flexDirection:'row',paddingTop:'-50px'}}>
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
    onChange={onChange.bind(this, setNchild)}
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
    onChange={onChange.bind(this, setNyear)}
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
   
   {/* <label htmlFor="sum">Payment Plan</label> */}
   <div>
        
        {localStorage.setItem("value",value)}
        <h4>selected amount ₹:{value} </h4>
      </div>
                <div className="text-center py-4 mt-3">
                <Button style={{border:'2px',backgroundColor:'#FFEDD9'}} 
            onClick={
              postdata
              // opendata
              //   window.open(
              //  ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
              //     )
                 } >
               Pay Now
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
    
    </div>
    <div className="carous">
    <Carousel>
  <Carousel.Item interval={1000}>
  <img style={{ height: '550px',width:'2030px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'850px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic',textAlign:'center',width:'1250px',paddingLeft:'875px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
    
    
   </Carousel.Item>
   <Carousel.Item interval={1000}>
  <img style={{ height: '550px',width:'2030px'}}
      className="d-block w-0"
      src={require("../assets/Testimony.jpg")}
      alt="First slide"
    
    />
    <Carousel.Caption>
      {/* <h1 onClick={() => history.push('/Newuser')} style={STYLE.errorColor}>I want to support</h1> */}
      <h6 style={{paddingLeft:'850px',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',fontSize:'50px',paddingTop:'50px'}}>My Story</h6>
      <p style={{paddingLeft:'790px',paddingTop:"90px",fontFamily: 'Raleway,sans-serif',fontSize:'20px',color:"white",fontStyle: 'italic',textAlign:'center',width:'1250px',paddingLeft:'875px'}}>
This is a great place to add a tagline.

Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click.

​This space is ideal for writing a detailed description of your business and the types of services that you provide. Talk about your team and your areas of expertise</p>
    </Carousel.Caption>
    
    
   </Carousel.Item>
  </Carousel>
  </div>
  <footer style ={{backgroundColor:' #FFEDD9'}}  class="page-footer font-small blue">


<div class="footer-copyright text-center py-3"> <h7 style={{color:'black' ,fontSize:'15px'}}>© 2021 Copyright</h7>
  <a style={{marginLeft:'10px' ,color:'black'}} href="https://panaah.org/"> panaah.org</a>
  <br></br>
  <Link style={{color:'black'}} onClick={forgot}> Terms and conditions</Link>
  {/* <a href="https://panaah.org/"> Terms and conditions</a> */}
</div>

</footer>
    </div>
    
    </div>
   
    </Styles>
    
    );
   };

  
