import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';

class Donation extends React.Component {
render() {
return (
  <BrowserRouter>
  <div className="App">
   
  <Route path='/Donation' component={() => { window.location = 'https://pages.razorpay.com/pl_Fz1E4oQPaI1DW5/view'; return null;} }/>
  </div>
  </BrowserRouter>
  );
 }
};
export default Donation;