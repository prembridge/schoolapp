import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Styles = styled.div`

.rcorners1 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
    width: 550px;
    height: 500px;
    margin-left: 30.5rem;
    margin-top: 8.5rem;
  }`
const emailRegex = 
  RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

const formValid = ({ formErrors, ...rest }) => { 
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};




 export default class Newuserlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:'',
      err:'',
      loggedIn: false,
      isLoaded:false,
      username: "",
      password: "",
      message: "",
      open: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        UserName:"",
        email: "",
        password: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    this.getdata();
  };
  

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
       case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };









  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  sayHello =()=> {
    this.props.history.push("./Registation");
  }
  saypay =()=> {
    this.props.history.push("./Donation");
  }
  forgotpassword =()=> {
    this.props.history.push("./Forgotpassword");
  }
componentDidMount(){
  // For initial data
 // this.getdata();
}


 getdata = async ()=>{
  this.setState({ isLoading: true });
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 var raw = JSON.stringify({
   "email": this.state.email,
    "password": this.state.password,
  });
  
   
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
   
  
  await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/login", requestOptions)
  .then(response => response.json())
  //console.log(response)
  .then(json =>{ 
    var resdata =  json.token;
    localStorage.setItem("resdata",resdata)
    var res = json.message;
    this.setState({
     
      err:res,
   })
  console.log("json...."+ JSON.stringify(json))


 


   }).catch(error => console.log('error', error));
    
    
//console.log( "res,,,,"+this.state.token)
//var myHeaders = new Headers();

this.fetchdata()



}

  fetchdata=async ()=>{
    var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem("resdata")}`);

 var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

  await fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/getuser", requestOptions)
  .then(response => response.json())
  .then(json =>{
    var id = json.user.id
    var Address = json.user.Address
    var resdata =  json.user.FirstName;
    var EmailID = json.user.EmailID;
    var phonenumber =json.user.Phonenumber
    var panid = json.user.PANID
    var lastN = json.user.LastName
    var City = json.user.City
    var State = json.user.State
    var Country = json.user.Country
    var Pincode = json.user.Pincode
    var New_plan = json.user.New_plan
    console.log("resdara",resdata)
    console.log("resdara",id)
    localStorage.setItem("New_plan",New_plan)
    localStorage.getItem("New_plan")
    localStorage.setItem("Addres",Address)
    localStorage.setItem("EmailID",EmailID)
    localStorage.setItem("phone",phonenumber)
    localStorage.setItem("panid",panid)
    localStorage.setItem("lastN",lastN)
    localStorage.setItem("City",City)
    localStorage.setItem("State",State)
    localStorage.setItem("Country",Country)
    localStorage.setItem("Pincode",Pincode)
    localStorage.getItem("phone")
    var add = localStorage.getItem("Addres")
    var email =localStorage.getItem("EmailID")

    var idd2 = localStorage.setItem("id", id)
    var idd = localStorage.getItem("id")
console.log("newplan",localStorage.getItem("New_plan"))
    console.log("wht is in it"+ JSON.stringify(json))
    var savetoken =localStorage.setItem("name" ,resdata)
    var tokenvalue = localStorage.getItem("name")
    console.log("wht is in it"+tokenvalue)
    this.props.history.push("./Donation");
   // var res = json.message;
  //   this.setState({
     
  //     err:res,
  //  })
  })
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 }



  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { formErrors,items,err} = this.state;
      console.log(items ,"values")
    console.log(err,"err")

    return (
      <Styles>
<div className="rcorners1">
<h3>New Donor SignIn</h3>
<MDBContainer >
       
        
       <MDBRow>
       {/* <Grid container 
    spacing={0}
    alignItems="center"
    justify="center"
    style={{ minHeight: '110vh' }}>
        */}
      
      
       {/* <div className="header pt-3 grey lighten-2" style={{  paddingRight :400} } >
          
          <MDBCol  className="d-flex justify-content-start">
              <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                User Login
             </h3>
           </MDBCol>
          </div> */}
         
      
      {/* <img style={{position:"center", top:100 , width:150,height:150}}  src={process.env.PUBLIC_URL + '/images/login.svg'} /> */}
      
    
      <MDBCardBody className="mx-4 mt-4" style={{ maxWidth :'400'} }>
      <form onSubmit={this.handleSubmit} noValidate>
        
      <div className="email">
          <label htmlFor="email">Email ID *</label>
          </div>
          <div>
          <MDBInput
            className={formErrors.email.length > 0 ? "error" : null}
            placeholder="Email"
            type="email"
            name="email"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.email.length > 0 && (
            <span   style={{ color: 'red' }} className="errorMessage">{formErrors.email}</span>
          )}
        </div>
        <div className="password">
          <label htmlFor="password">Password *</label>
          </div>
          <div>
          <MDBInput
            className={formErrors.password.length > 0 ? "error" : null}
            placeholder="Password"
            type="password"
            name="password"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.password.length > 0 && (
            <span  style={{ color: 'red' }} className="errorMessage">{formErrors.password}</span>
          )}
        </div>
     
            <div className="text-center mb-4 mt-5">
             <button style={{backgroundColor:"#FFEDD9",width:150,height:50,borderRadius:50}}
               
              type="button"
              className="btn-block z-depth-2"
              onClick={this.handleSubmit}>
               SignIn
              </button>
            </div>
          {/* <p className="font-small grey-text d-flex justify-content-center">
             New User Register.
               <a onClick={this.sayHello}
                href="#!"
                className="dark-grey-text font-weight-bold ml-1"
             > Click
               Register
          </a>
        </p> */}
        </form>
        <h1>{err}</h1>
       </MDBCardBody>
  
       {/* </Grid> */}
    </MDBRow>
  </MDBContainer>
</div>
 </Styles>
    //   <MDBContainer >
       
        
    //      <MDBRow>
    //      <Grid container
    //   spacing={0}
    //   alignItems="center"
    //   justify="center"
    //   style={{ minHeight: '110vh' }}>
         
    //      <MDBCard style={{ maxWidth :'800',borderColor:"#fcba03",} } > 
        
    //      <div className="header pt-3 grey lighten-2" style={{  paddingRight :400} } >
            
    //         <MDBCol  className="d-flex justify-content-start">
    //             <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
    //               User Login
    //            </h3>
    //          </MDBCol>
    //         </div>
           
        
    //     {/* <img style={{position:"center", top:100 , width:150,height:150}}  src={process.env.PUBLIC_URL + '/images/login.svg'} /> */}
        
      
    //     <MDBCardBody className="mx-4 mt-4" style={{ maxWidth :'400'} }>
    //     <form onSubmit={this.handleSubmit} noValidate>
          
    //     <div className="email">
    //         <label htmlFor="email">Email ID *</label>
    //         </div>
    //         <div>
    //         <MDBInput
    //           className={formErrors.email.length > 0 ? "error" : null}
    //           placeholder="Email"
    //           type="email"
    //           name="email"
    //           noValidate
    //           onChange={this.handleChange}
    //         />
    //         {formErrors.email.length > 0 && (
    //           <span   style={{ color: 'red' }} className="errorMessage">{formErrors.email}</span>
    //         )}
    //       </div>
    //       <div className="password">
    //         <label htmlFor="password">Password *</label>
    //         </div>
    //         <div>
    //         <MDBInput
    //           className={formErrors.password.length > 0 ? "error" : null}
    //           placeholder="Password"
    //           type="password"
    //           name="password"
    //           noValidate
    //           onChange={this.handleChange}
    //         />
    //         {formErrors.password.length > 0 && (
    //           <span  style={{ color: 'red' }} className="errorMessage">{formErrors.password}</span>
    //         )}
    //       </div>
       
    //           <div className="text-center mb-4 mt-5">
    //            <MDBBtn
    //               color="danger"
    //             type="button"
    //             className="btn-block z-depth-2"
    //             onClick={this.handleSubmit}>
    //              SignIn
    //             </MDBBtn>
    //           </div>
    //         {/* <p className="font-small grey-text d-flex justify-content-center">
    //            New User Register.
    //              <a onClick={this.sayHello}
    //               href="#!"
    //               className="dark-grey-text font-weight-bold ml-1"
    //            > Click
    //              Register
    //         </a>
    //       </p> */}
    //       </form>
    //       <h1>{err}</h1>
    //      </MDBCardBody>
    //      </MDBCard>
    //      </Grid>
    //   </MDBRow>
    // </MDBContainer>
    );
  }
}

const styles = 
 {
 card: {
   maxWidth: 900,
   margin: "auto",
   transition: "0.3s",
   boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
   "&:hover": {
     boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
   }
 },
 media: {
   paddingTop: "56.25%"
 },
 typography: {
  textAlign: 'center',
  alignSelf:'stretch'
  

},

 
   };


// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
// import { useHistory } from "react-router-dom";
// const Login = () => {
  
//   const history = useHistory()
//   const nextPage = () => {
       
//     history.push("./Registation");
   
//    }
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard style={{ backgroundColor:'#8cb6fa'} } > 
//             <div className="header pt-3 grey lighten-2">
//               <MDBRow className="d-flex justify-content-start">
//                 <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
//                   Log in
//                 </h3>
//               </MDBRow>
//             </div>
//             <MDBCardBody className="mx-4 mt-4">
//               <MDBInput label="Your email" group type="text" validate />
//               <MDBInput
//                 label="Your password"
//                 group
//                 type="password"
//                 validate
//                 containerClass="mb-0"
//               />
//               <p className="font-small grey-text d-flex justify-content-end">
//                 Forgot
//                 <a
//                   href="#!"
//                   className="dark-grey-text font-weight-bold ml-1"
//                 >
//                   Password?
//                 </a>
//               </p>
//               <div className="text-center mb-4 mt-5">
//                 <MDBBtn
//                   color="danger"
//                   type="button"
//                   className="btn-block z-depth-2"
//                 >
//                   Log in
//                 </MDBBtn>
//               </div>
//               <p className="font-small grey-text d-flex justify-content-center">
//                 Don't have an account?
//                 <a onClick={nextPage}
//                   href="#!"
//                   className="dark-grey-text font-weight-bold ml-1"
//                 > Click
//                   Sign up
//                 </a>
//               </p>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

//export default Login;