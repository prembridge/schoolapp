import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { OpenWithRounded } from "@material-ui/icons";
import Swal from 'sweetalert2'
import img from "./p.png"
import { breakpoints as bp } from "../../GlobalStyle";
import bg from "../assets/boy2.jpg";
import styled from "styled-components";
const Styles = styled.div`

.donation {
  
    width: 350px;
    margin-left: 400px;
}
.donation h1{
  
    width: 490px;
    margin-left: -15px;
    margin-top:20px
}

   .donation h6{
       font-size:8px
    margin-top: -15px;
    width: 1217px;
    margin-left: -200px;
    padding-top: 15px
   }
   
}
.cview{
    margin-top: -820px;
   
    margin-left: 800px;
}
.cviewsecond{
    margin-top: -800px;
   
    margin-left: 968px; 
}
@media all and (max-width: 768px) {
      
    .donation{
      margin-left: 20px;
    width: 100%;
     
      }
      .donation h1{
  
        width: 265px;
    margin-left: 37px;
    margin-top: 20px
    }
      .donation h6{
        margin-left: 10px;
      width: 80%;
      font-size:15px
       
        }
      .cview{
        margin-left: 10px;
        width: 90%;
        margin-top: 30px
      }
      .cviewsecond{
        margin-left: 10px;
        width: 90%;
        margin-top: 30px
      }
  }`


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    maxHeight: 700
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

// const __DEV__ = document.domain === 'localhost'

export default function Donation() {
  const [Nchild, setNchild] = useState('');
  const [Nyear, setNyear] = useState('');
  const [NMonth, setNMonth] = useState('');
  const [Ntotal, setNTotal] = useState('');
  const [Ninpay, setNinpay] = useState('');
  const [pkid, setpkid] = useState('');
  const [Rpkid, setRpkid] = useState('');
  const [Rfkid, setRfkid] = useState('');
  const [Rpending, setRpending] = useState('');
  const [Rtotal, setRtotal] = useState('');
  const [Rinst, setRinst] = useState('');
  const [fk_SponsorID, setFk_SponsorID] = useState('');
  const [No_of_child, setNo_of_child] = useState('');
  const [No_of_year, setNo_of_year] = useState('');
  const [amount, setamount] = useState('');
  const [pending_amt, setPending_amt] = useState('');
  const [paymentplan, setpaymentplan] = useState('')
  const history = useHistory();

  var tot = 0;
  var sum = 0;

  var tota = 0;
  var cho = 0;
  var dis = 0;
  var second = 0;
  var child = 0;
  var children = 0;
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
    cho: 0
  });

  const [value, setValue] = useState('');

  const onChange = (setIdentifierState, e) => {
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
    console.log(second, "poof");

    if (name === "child") {
      children = refs.sum.current.value = child * (second * 7500);
      tot = children;
      if (cho == "fullAmount") {
        dis = tot;
      }
      if (cho == "annual") {
        dis = tot / second;
      }
      if (cho == 'halfYearly') {
        dis = tot / (2 * second);
      }
      if (cho == 'quarterly') {
        dis = tot / (4 * second);
      }
      if (cho == 'monthly') {
        dis = tot / (12 * second);
      }
    }
    console.log(children, "children..")
    if (name === "second") {
      years = refs.sum.current.value = child * (second * 7500);
      tot = years;
      if (cho == "fullAmount") {
        dis = tot;
      }
      if (cho == "annual") {
        dis = tot / second;
      }
      if (cho == 'halfYearly') {
        dis = tot / (2 * second);
      }
      if (cho == 'quarterly') {
        dis = tot / (4 * second);
      }
      if (cho == 'monthly') {
        dis = tot / (12 * second);
      }
    }
    console.log("years", years)
    if (name === "sum") {
      total = refs.second.current.value = child * (second * 7500);
      tot = total;
      if (cho == "fullAmount") {
        dis = tot;
      }
      if (cho == "annual") {
        dis = tot / second;
      }
      if (cho == 'halfYearly') {
        dis = tot / (2 * second);
      }
      if (cho == 'quarterly') {
        dis = tot / (4 * second);
      }
      if (cho == 'monthly') {
        dis = tot / (12 * second);
      }
      // tot.toString();
    }
    if (name === "choice") {
      var tp = refs.sum.current.value = child * (second * 7500)
      tot = tp;
      if (cho == "fullAmount") {
        dis = tot;
      }
      if (cho == "annual") {
        dis = tot / second;
      }
      if (cho == 'halfYearly') {
        dis = tot / (2 * second);
      }
      if (cho == 'quarterly') {
        dis = tot / (4 * second);
      }
      if (cho == 'monthly') {
        dis = tot / (12 * second);
      }

      // tot.toString();
    }

    tota = tot;
    // annual = (tot/second);




    setValue(dis)
    console.log(tot, "t");
    setNTotal(tot)
    console.log("setvalue", Ntotal)
  };

  const handleSelect = (e) => {

    dis = 0;
    console.log(child, "child");
    const { name, value } = e.target;
    vars[name] = value;
    child = parseInt(refs.child.current.value, 10);
    second = parseInt(refs.second.current.value, 10);
    // const opt = refs.choice.current.value;
    sum = parseInt(refs.sum.current.value, 10);
    // const che = parseInt(refs.div.current.value,10);
    console.log(second, "poof");

    if (name === "child") {
      children = refs.sum.current.value = child * (second * 7500);
      tot = children;
    }
    console.log(children, "children..")
    if (name === "second") {
      years = refs.sum.current.value = child * (second * 7500);
      tot = years;
    }
    console.log("years", years)
    if (name === "sum") {
      total = refs.second.current.value = child * (second * 7500);
      tot = total;
    }

    const cho = refs.cho.current.value;
    // onChange(e);

    // var choice= refs.tot.current.value;
    // console.log(choice.toString(),"ch");
    console.log(cho, "poog");
    if (cho == "fullAmount") {
      dis = tot;
    }
    if (cho == "annual") {
      dis = tot / second;
    }
    if (cho == 'halfYearly') {
      dis = tot / (2 * second);
    }
    if (cho == 'quarterly') {
      dis = tot / (4 * second);
    }
    if (cho == 'monthly') {
      dis = tot / (12 * second);
    }
    tota = tot;
    // annual = (tot/second);




    setValue(dis)
  }
  useEffect(() => {
    var val = localStorage.getItem("value")
    console.log(val, "bbbbbbbbbbbbbbbbbbbbbbbb")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/getplan/" + localStorage.getItem("id"), requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log("jssssssssssssss", JSON.stringify(json))
        var Paymentplan = json.data.Payment_type
        var No_of_Child = json.data.No_of_child
        var No_of_Year = json.data.No_of_year
        var New_entry = json.data.New_entry
        var Amount = json.data.Total
        var AmtPay = json.data.AmtPay
        var Pkid = json.data.Pk_id
        var Ninpay = json.data.AmtPay
        var Fk_SponsorIDd = json.data.Fk_SponsorID
        var Pending_amt = json.data.Pending_amt
        localStorage.setItem("fkid", Fk_SponsorIDd)
        localStorage.getItem("fkid")
        setPending_amt(Pending_amt)
        setFk_SponsorID(Fk_SponsorIDd)
        setNinpay(Ninpay)
        setNo_of_child(No_of_Child)
        setNo_of_year(No_of_Year)
        setamount(Amount)
        setpaymentplan(Paymentplan)
        setpkid(Pkid)
        //  localStorage.setItem("paymentplan",mon)
        //  localStorage.setItem("No_of_child",No_of_child)
        //  localStorage.setItem("No_of_year",No_of_year)
        //localStorage.setItem("amount",amount)
        localStorage.setItem("AmtPay", AmtPay)
        localStorage.getItem("No_of_year")
        localStorage.setItem("New_entry", New_entry)
        localStorage.getItem("New_entry")
        // localStorage.getItem("amount")
        localStorage.getItem("AmtPay")
        // var child =localStorage.getItem("No_of_child")
        // var year = localStorage.getItem("No_of_year")
        var amt = localStorage.getItem("amount")
        var get = localStorage.getItem("paymentplan")
        console.log(No_of_child)
        console.log(No_of_year)
        console.log(amount)
        console.log("pkid", pkid)
        console.log("json..getplan", json)
        //  console.log("get",child)
        // console.log("year",year)
        console.log("amount", amt)
        console.log("newentery", localStorage.getItem("New_plan"))
      }
      )
      .catch(error => console.log('error', error));
  })
  async function postdata() {
    var val = localStorage.getItem("value")
    console.log(val, "bbbbbbbbbbbbbbbbbbbbbbbb")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "uid": localStorage.getItem("id"),
      "noc": Nchild,
      "noy": Nyear,
      "amtp": localStorage.getItem('value'),
      "tot": Ntotal,
      "pen": Ntotal,
      "pay": NMonth,
      "New_entry": "1"
    });



    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };



    await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/plans", requestOptions)
      .then(response => response.json())
      .then(json => {

        console.log("json.. data", JSON.stringify(json))
        var Fk_SponsorID = json.data.Fk_SponsorID
        var Pk_id = json.data.Pk_id
        var RTotal = json.data.Total
        var RPending_amt = json.data.Pending_amt
        var RAmtPay = json.data.AmtPay
        localStorage.setItem("Rfkid", Fk_SponsorID)
        console.log(localStorage.getItem("Rfkid"), "local")
        localStorage.setItem("pkid", Pk_id)
        localStorage.getItem("pkid")
        localStorage.setItem("pend", RPending_amt)
        console.log(localStorage.getItem("pend"), "pending")

        //  setRfkid(Fk_SponsorID);
        //  setRpkid(Pk_id);
        //  setRpending(RPending_amt)
        //  setRtotal(RTotal)
        //  setRinst(RAmtPay)
        console.log("amountstate", Rtotal)
        console.log("rtotal", RTotal)
        var message = json.message

        if (message === "Succesfully inserted") {
          PostRazorpay()

          //    window.open(
          //   ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
          //  );
        } else {
          if (message === "")
            alert("please Enter Valid details.")
        }
      }
      )
      .then(result => console.log(result, "resulttt afrer posting"))
      .catch(error => console.log('error', error));


    // window.open(
    //   ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
    //  );

  }
  // function opendata(){
  //    window.open(
  //           ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
  //          );
  // }

  async function PostRazorpay() {
    var tempDate = new Date();
    var date = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "id": "1",
      "currency": "INR",
      "amount": localStorage.getItem('value'),
      "sponid": localStorage.getItem("Rfkid"), //Fk_SponsorID
      "planid": localStorage.getItem("pkid"), //Pk_id
      "tot": Ntotal, //Total
      "pending": localStorage.getItem("pend"), //Pending_amt
      "Date": "26/07/2021" //data
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const data = await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/razorpay", requestOptions)
      .then(response => response.json())
    //  .then(json =>{
    //   console.log("response",data)
    //  })
    console.log(data, "data data")


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
      "amount": data.amount.toString() + "00",// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": 'Donation',

      "image": `${require("../assets/Panaah3.png")}`,
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {

        console.log("paymentid", response.razorpay_payment_id)
        console.log("orderid", response.razorpay_order_id)
        console.log("signature", response.razorpay_signature)


        Swal.fire({
          icon: 'success',
          title: 'Success!...',
          text: 'Your payment was successful!',
        })
      },
      //localStorage.getItem("name")
      "prefill": {
        "name": "Prem",
        "email": localStorage.getItem("EmailID"),
        "contact": localStorage.getItem("phone")
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'paymentfailed!',

      })
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    //document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    //e.preventDefault();
    //}
  }
  // const paymentObject = new window.Razorpay(options)
  async function displayRazorpay() {
    var tempDate = new Date();
    var date = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "id": "1",
      "currency": "INR",
      "amount": localStorage.getItem("AmtPay"),
      "sponid": fk_SponsorID, //Fk_SponsorID
      "planid": pkid, //Pk_id
      "tot": amount, //Total
      "pending": pending_amt, //Pending_amt
      "Date": date //"26/07/2021" //data
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const data = await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/razorpay", requestOptions)
      .then(response => response.json())
    //  .then(json =>{
    //   console.log("response",data)
    //  })
    console.log(data, "data of data")


    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }


    var options = {
      "key": 'rzp_live_6GpVhmnXaxwEmB', // Enter the Key ID generated from the Dashboard
      "amount": data.amount.toString() + "00",// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": 'Donation',

      "image": `${require("../assets/Panaah3.png")}`,
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {

        console.log("paymentid", response.razorpay_payment_id)
        console.log("orderid", response.razorpay_order_id)
        console.log("signature", response.razorpay_signature)

        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
        Swal.fire({
          icon: 'success',
          title: 'Success!...',
          text: 'Your payment was successful!',
        })
      },
      //localStorage.getItem("name")
      "prefill": {
        "name": localStorage.getItem("name"),
        "email": localStorage.getItem("EmailID"),
        "contact": localStorage.getItem("phone")
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'paymentfailed!',

      })
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    //document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    //e.preventDefault();
    //}
  }
  // const paymentObject = new window.Razorpay(options)
  // paymentObject.open()

  return (
    (localStorage.getItem("New_plan")) == 1 ?
      <Styles>
          
        <div  class="bg_image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "130vh",
            color: "#000000",
          }}>
       
          
          
            {/* style={{ width: '50%',height:'950px',
    float: 'left',
    padding: '20px',
    border: '1px black',backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat:'no-repeat',
    backgroundSize:'cover'}} */}
            <div className="donation">
               <div >

             
                <h1>Panaah: Adopt A Child</h1>
                
                <h4>
                    By registering here you commit to partner with us in giving hope for tomorrow to young lives in hopeless homes today.  Panaah provides you a platform to give / contribute an amount of minimum INR 750 monthly or INR 2250 quarterly or 4500 Half Yearly or 9000 Annually towards the educational and developmental needs of children from poor families and rural communities. Select the number of children and the number of years you would like to support. </h4>
                 <br></br>
                <h6>
             1. Select the number of children and the number of years you would like to support the child/children.</h6>
                 <h6>
            2. Choose the sponsor/payment plan that suits you and submit to save your preferences</h6>
                 
                <h6>

                  3. Once saved you can click on the pay now button to send you contributions according to your plan</h6>
                 
                <h6>

                  4. For your convenience you can use the autopay/auto debit option by enabling the option in your profile page to send your contributions on time</h6>
                 
                <h6>

                  5. To change your plan or any other information check your profile page</h6>
               
                <h6>

                  6. Email id, Pan Number and Name cannot be edited. For more information on this contact our team.</h6>
              </div>
            </div>
           
            <div>
              <div className="cview" >

                <MDBContainer fluid class="d-flex justify-content-cente"  >

                  <div>

                    <MDBRow >
{/* style={{ backgroundColor: '#FFFFFF', borderColor: "#5D6D7E", width: "30rem", borderRadius: '10px', paddingTop: '40px' }} */}
                      <MDBCard  style={{ backgroundColor: '#FFFFFF', borderColor: "#5D6D7E", width: "30rem",height: '585px',borderRadius: '5px',  }} >
                        <MDBCardBody>
                          <form>
                            <p className="h4 text-center py-4">SPONSOR NOW</p>
                            <label htmlFor="child" >Number of children</label>
                            <br></br>
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
                              placeholder={No_of_child}
                            />
                            <br></br>
                            <label htmlFor="second">Sponsorship Duration in Year's</label>
                            <br></br>
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
                                placeholder={No_of_year}
                              />
                            </div>
                            <br></br>
                            <label htmlFor="sum">Sponsorship Amount</label>
                            <br></br>
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
                                placeholder={amount}
                              />
                            </div>
                            <br></br>
                            <label htmlFor="sum">Payment Plan</label>

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
                                placeholder={paymentplan}
                              />
                              <br></br>
                             
                              {/* {localStorage.setItem("value",value)} */}
                              <h4 style={{ paddingLeft: '90px' }}>Total Amount:{Ninpay} </h4>
                            </div>
                            {/* <div> <Button onClick={postdata}> submit</Button></div> */}
                            <div className="text-center py-4 mt-3">
                              <Button style={{ border: '2px', backgroundColor: "#FFEDD9" }}
                                onClick={
                                  displayRazorpay
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
           
          </div>


     
      </Styles>

      : 
      <div>
        <Styles>
        <div  class="bg_image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "130vh",
            color: "#000000",
          }}>
        <div 
        // class="float-container" style={{
        //   border: '2px black',
        //   padding: '20px',
        //   backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover'
        // }}
        >

          <div  className="donation"
        //   class="float-child" style={{
        //     width: '50%',
        //     float: 'left',
        //     padding: '20px',
        //     border: '1px black', backgroundImage: `url(${process.env.PUBLIC_URL + "/images/p.png"})`, backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover'
        //   }}
          >

            <div 
            // stlye={{ display: 'flex', flexdirection: 'row' }}
            >


              <h1 >Panaah: Adopt A Child</h1>

              <h4 >

                By registering here you commit to partner with us in giving hope for tomorrow to young lives in hopeless homes today.  Panaah provides you a platform to give / contribute an amount of minimum INR 750 monthly or INR 2250 quarterly or 4500 Half Yearly or 9000 Annually towards the educational and developmental needs of children from poor families and rural communities. Select the number of children and the number of years you would like to support. </h4>
              <h6>

                1. Select the number of children and the number of years you would like to support the child/children.</h6>

              <h6>

                2. Choose the sponsor/payment plan that suits you and submit to save your preferences</h6>
              <h6>

                3. Once saved you can click on the pay now button to send you contributions according to your plan</h6>
              <h6>

                4. For your convenience you can use the autopay/auto debit option by enabling the option in your profile page to send your contributions on time</h6>
              <h6>

                5. To change your plan or any other information check your profile page</h6>
              <h6>

                6. Email id, Pan Number and Name cannot be edited. For more information on this contact our team.</h6>
            </div>
          </div>

          <div className="cviewsecond">

            <MDBContainer fluid class="d-flex justify-content-cente"  >

              <div>

                <MDBRow   >

                  <MDBCard style={{ backgroundColor: '#FFFFFF', borderColor: "#5D6D7E", width: "30rem",height: '555px',borderRadius: '5px',  }}>
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
                            //type="number"
                            className="form-control"
                          //placeholder={localStorage.getItem("amount")}
                          />
                        </div>

                        <label htmlFor="sum">Payment Plan</label>

                        <div>
                          <select className="browser-default custom-select" name="choice"
                            ref={refs.cho}
                            // onChange={onChange}  
                            title="Payment Plan"
                            id="dropdown-menu-align-right"
                            //placeholder={localStorage.getItem("payment")}
                            onChange={onChange.bind(this, setNMonth)}>
                            <option disabled>Choose your option</option>
                            <option value="fullAmount">Full Amount</option>
                            <option value="annual">Annual</option>
                            <option value="halfYearly">Half yearly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="monthly">Monthly</option>
                          </select>
                          {localStorage.setItem("value", value)}
                          <h4 style={{ paddingLeft: '90px', paddingTop: "20px" }}>Total Amount: {value} </h4>
                        </div>
                        {/* <div> <Button onClick={postdata}> submit</Button></div> */}
                        <div className="text-center py-4 mt-3">
                          <Button style={{ border: '2px', backgroundColor: "#FFEDD9" }}
                            onClick={
                              postdata
                              // window.open(
                              //  ' https://pages.razorpay.com/pl_HRc2yXiFYdkEzH/view'
                              // );
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
          {/* <button onClick={() => history.push('/Userprofile')}>Profile</button> */}
          {/* <button onClick={displayRazorpay}> pay now</button> */}
        </div>
        <div>
          {/* <button onClick={displayRazorpay}> pay now</button> */}
          {/* onClick={() => history.push('/Userprofile')} */}
        </div>

      </div>
      </Styles>
      </div>
  );
};


