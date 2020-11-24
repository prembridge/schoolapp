// import React, { Component } from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from '@material-ui/core/CardContent';
// import Typography from "@material-ui/core/Typography";

// import Grid from '@material-ui/core/Grid';
// import { withRouter } from "react-router-dom";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => { 
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };




//  export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items:'',
//       isLoaded:false,
//       username: "",
//       password: "",
//       message: "",
//       open: false,
//       firstName: null,
//       lastName: null,
//       email: null,
//       password: null,
//       formErrors: {
//         firstName: "",
//         lastName: "",
//         UserName:"",
//         email: "",
//         password: ""
//       }
//     };
//   }
//   handleSubmit = e => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       console.log(`
//         --SUBMITTING--
//         First Name: ${this.state.firstName}
//         Last Name: ${this.state.lastName}
//         Email: ${this.state.email}
//         Password: ${this.state.password}
//       `);
//     } else {
//       console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//     }
//   };
//   // getdata =()=>{

//   // }

//   handleChange = e => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case "firstName":
//         formErrors.firstName =
//           value.length < 3 ? "minimum 3 characaters required" : "";
//         break;
//       case "lastName":
//         formErrors.lastName =
//           value.length < 3 ? "minimum 3 characaters required" : "";
//         break;
//         case "UserName":
//           formErrors.lastName =
//             value.length < 3 ? "minimum 3 characaters required" : "";
//           break;
//       case "email":
//         formErrors.email = emailRegex.test(value)
//           ? ""
//           : "invalid email address";
//         break;
//       case "password":
//         formErrors.password =
//           value.length < 6 ? "minimum 6 characaters required" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };









//   setUsername = event => {
//     this.setState({
//       username: event.target.value
//     });
//   };

//   setPassword = event => {
//     this.setState({
//       password: event.target.value
//     });
//   };
//   sayHello =()=> {
//     this.props.history.push("./Registation");
//    // history.push("/Login");
//     // // this.setState({
//     // //     showComponent: true,
//     // //   });
//     // return(
        
//     //     <Login/>
//     // )
//   }


// //   signIn = () => {
// //     if (this.state.username === this.state.username && this.state.password === this.state.password) {
// //       this.setState({
// //         open: true,
// //         message: "You have successfully Logged In!"
// //       });
// //     } else {
// //       this.setState({
// //         open: true,
// //         message: "Incorrect Username or Password!"
// //       });
// //     }
// // //   };
// // var myHeaders = new Headers();
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Bearer 47d414ccab69b516df1cf559f1ad0040700bd1bb4c1e3a7b2fba");
// // var raw = JSON.stringify({"fieldData":{"User_name":this.state.username,"Password":this.state.password}});
// // var requestOptions = {
// //   method: 'POST',
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: 'follow'
// // };
// // console.log("req",requestOptions)
// // fetch("fmi/data/v1/databases/DUE/layouts/Users_management/records", requestOptions)
// //   .then(response => console.log("resp",response))
// //   .then(result => console.log(result))
// //   .catch(error => console.log('error', error));
// //   }
// componentDidMount(){
//   // For initial data
//   this.getdata();
// }
// getdata =()=>{
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer e34257487ca30d74ca27c54a65148c981f1c013ea94a12a5829d");
//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };
//     fetch("fmi/data/v1/databases/DUE/layouts/Users_management/records", requestOptions)
//     .then(response => response.json())
//     .then(json =>{
//     //  console.log("json"+ JSON.stringify(json))
//         this.setState({
//          isLoaded:true,
//          items:json.response.data.map(item=>{ 
//          return  item.fieldData.User_name
//          })

//       })
//       })
//       // .then(result => console.log("result",JSON.stringify(result)))
//       // .catch(error => console.log('error', error));

// }


// // delete =()=>{
// //     var myHeaders = new Headers();
// // myHeaders.append("Authorization", "Bearer 47d414ccab69b516df1cf559f1ad0040700bd1bb4c1e3a7b2fba");
// // var raw = "";
// // var requestOptions = {
// //   method: 'DELETE',
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: 'follow'
// // };
// // //console.log("req",requestOptions)
// // fetch("fmi/data/v1/databases/DUE/layouts/Users_management/records/3", requestOptions)
// //   .then(response => console.log("respon",response))
// //   .then(result => console.log(result))
// //   //.catch(error => console.log('error', error));
// // }

// // update =()=>{
// //     var myHeaders = new Headers();
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Bearer 47d414ccab69b516df1cf559f1ad0040700bd1bb4c1e3a7b2fba");
// // var raw = JSON.stringify({"fieldData":{"User_name":"prem","Password":"999"}});
// // var requestOptions = {
// //   method: 'PATCH',
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: 'follow'
// // };
// // fetch("fmi/data/v1/databases/DUE/layouts/Users_management/records/2", requestOptions)
// //   .then(response => response.text())
// //   .then(result => console.log(result))
// //   .catch(error => console.log('error', error));


// // }


//   handleClose = () => {
//     this.setState({
//       open: false
//     });
//   };

//   render() {
//     const { formErrors,items } = this.state;
//       console.log(items ,"values")
    

//     return (
//       <Grid container
//       spacing={0}
//       alignItems="center"
//       justify="center"
//       style={{ minHeight: '50vh' }}>
//       <Card variant="outlined" className={styles.card} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bckg.png"})`}}>
//         <CardContent align-items-center>
//       <div className="wrapper">
//       <div className="form-wrapper">
//         <h3>Login</h3>
//         <img style={{position:"center", top:100 , width:150,height:150}}  src={process.env.PUBLIC_URL + '/images/login.svg'} />
        
      

//         <form onSubmit={this.handleSubmit} noValidate>
          
//           <div className="UserName">
//             <label htmlFor="UserName">User Name</label>
//             <input
//               className={formErrors.UserName.length > 0 ? "error" : null}
//               placeholder=" UserName"
//               type="text"
//               name="UserName"
//               noValidate
//               onChange={this.handleChange}
//             />
//             {formErrors.UserName.length > 0 && (
//               <span className="errorMessage">{formErrors.UserName}</span>
//             )}
//           </div>
         
//           <div className="password">
//             <label htmlFor="password">Password</label>
//             <input
//               className={formErrors.password.length > 0 ? "error" : null}
//               placeholder="Password"
//               type="password"
//               name="password"
//               noValidate
//               onChange={this.handleChange}
//             />
//             {formErrors.password.length > 0 && (
//               <span className="errorMessage">{formErrors.password}</span>
//             )}
//           </div>
//           <div className="createAccount">
//             <button onClick={this.getdata}  type="submit">login</button>
//             <button onClick={this.sayHello} type = "submit">New user</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </CardContent>
//     </Card>
//     </Grid>
//     );
//   }
// }

// const styles = 
//  {
//  card: {
//    maxWidth: 900,
//    margin: "auto",
//    transition: "0.3s",
//    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//    "&:hover": {
//      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//    }
//  },
//  media: {
//    paddingTop: "56.25%"
//  },
//  typography: {
//   textAlign: 'center',
//   alignSelf:'stretch'
  

// },

 
//    };


import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { useHistory } from "react-router-dom";
const Login = () => {
  
  const history = useHistory()
  const nextPage = () => {
       
    history.push("./Registation");
   
   }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard style={{ backgroundColor:'#8cb6fa'} } > 
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a onClick={nextPage}
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                > Click
                  Sign up
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;