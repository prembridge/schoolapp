import React, { useState, useEffect } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBDataTableV5 ,MDBDataTable , MDBInput, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import moment from 'moment'
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
const Styles = styled.div`

.rcorners1 {
    border-radius: 45px;
    border: 2px solid #000000;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    width: 800px;
    height: 700px;
    margin-left: 30.5rem;
    margin-top: 3.5rem;
  }`
export default function Viewtransaction() {

  const history = useHistory();
  const [data, setData] = useState([]);

   useEffect(() => {
   console.log(localStorage.getItem("fkidd"),"vewfkid")
   console.log(localStorage.getItem("pkid"),"viewpkid")
   
   var checkin = localStorage.getItem("checkin")
    var checkIn = moment(checkin).format("L")
    var checkinn = moment(checkIn).format('yyyy-MM-D')
     
    var checkout = localStorage.getItem("checkout")
    var checkOut = moment(checkout).format("L")
    var checkoutt = moment(checkOut).format('yyyy-MM-D')

   console.log(checkinn,"checkin")
   console.log(checkoutt)
   console.log(localStorage.getItem("checkout"))
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
     
    fetch("https://gzacors.herokuapp.com/http://122.185.13.163:3013/trget/"+(localStorage.getItem("fkidd"))+'/'+ localStorage.getItem("pkid")+'/'+ checkinn+'/'+ checkoutt,requestOptions)
    .then((response) => response.json())
    .then((json) => {
      var Date_tr = json. data.Display_Date
      console.log("date..",Date_tr)
      console.log(json.data,"data..");
      setData(json.data);
    
    })
    .catch((error) => console.log("error", error));
}, []);



  const datas ={
    columns: [
      
        {
          'label': 'Get Recipt',
          'field': 'check',
          'sort': 'asc'
        },
      
      {
        label: 'Transaction ID',
        field: 'Orderid',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'TransactionID',
        },
      },
      {
        label: 'Transaction Date',
        field: 'Date_tr',
        width: 270,
      },
      {
        label: 'Amount',
        field: 'Transaction_amount',
        width: 200,
      },
      {
        
        label: 'Status',
        field: 'Transaction_status',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Recipt ID',
        field: 'Recipt',
        sort: 'asc',
        width: 100,
      }
    ],
    rows: data.map((data)=>{
      
        return{ 
          
          check: <input label=' send'  type='checkbox'  ></input>,
          
          Orderid:data.Orderid,
          Date_tr: data.Display_Date,
          Transaction_amount: data.Transaction_amount,
          Transaction_status: data.Transaction_status,
          Recipt: data.Recipt,
         
        }
    }),
  };
  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };
  return (
    <Styles>
    <div className="rcorners1">
    <MDBContainer>
    <MDBRow center className="mt-3 pt-1">
      <MDBCol md="12">
  <MDBDataTable  striped bordered small hover entriesOptions={[5, 10]} entries={5} pagesAmount={4} data={datas} fullPagination searchTop searchBottom={false} 
      
      //checkbox
      // headCheckboxID='id4'
      // bodyCheckboxID='checkboxes4'
      // getValueCheckBox={(e) => {
      //   showLogs2(e);
      // }}
      //checkboxFirstColumn 
       />
      {/* <h1>{checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</h1> */}
       
  </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
            {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      /> */}
     </Styles>
            );
         
}
