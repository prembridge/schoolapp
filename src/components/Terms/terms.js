import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'

import { breakpoints as bp } from "../../GlobalStyle";

import styled from "styled-components";
const Styles = styled.div`
.ourvision {
   font-size: 50px;
    font-family: "Raleway,sans-serif";
    margin-top: 0.5rem;
    left: 25vw !important;
    top: 530vw !important;
   
    left: 5vw;
    text-align: center;
  
}
.ourvision h3{
   
    
    font-size: 3vw !important;
    font-family: 'Montserrat, sans-serif';
  
    color: #000 !important;
  }
.ourvision h6{
    font-size: 1.3vw !important;
    font-family: "Fira Sans sans-serif", 'monospace';
    // margin-top: 5.5rem !important;
    left: 25vw !important;
    top: 560vw !important;
    color: #000 !important;
    
  }

  @media (max-width: ${bp.mobile}) {
    .ourvision h3{
      margin-top: 4vw !important;
      text-align: center;
      margin-left: -46px;
      font-size: 7vw !important;
      font-family: 'Raleway,sans-serif';
      top: 250vw !important;
      color: #000 !important;
    }
    .ourvision h6{
      font-size: 4vw !important;
      font-family: 'Raleway,sans-serif';
      // margin-top: 5.5rem !important;
      left: 25vw !important;
      top: 560vw !important;
      color: #000 !important;
      
    }
  }`


export default function terms() {

  return (
    <Styles>
      <div className="ourvision" >
        <Grid >
          <div>     
              <h3>Terms of Use</h3>
              <h6 >The content and data found on Panaah website, including images and text, are 
property of APS Society and may not be redistributed, copied or modified without 
express written permission.
Using images found on any Panaah website, linking to any APS Society website or in 
some other manner framing or including any of the materials contained on any APS 
Society website without the prior written permission of APS Society is strictly 
prohibited. Such activity could result in legal action. Decisions regarding use may be 
revised or rescinded without prior notice.
While APS Society makes every effort to provide accurate information, the content 
provided on the website is "as is" and APS Society makes no warranties regarding 
the content on the website. APS Society will not in any way be held responsible for 
any damages or loss arising out of the use of the information on the website.
APS Society websites may contain links to other sites. APS Society is not responsible 
for the privacy practices or the content of external websites.
By using this website, sharing your details with us, registering on the website, by 
sponsoring a child or showing interest in sponsorships, you also agree to receive 
communication from us in the form of emails, SMS, letters and phone calls. The 
communications that you receive will pertain to updates about APS Society work, 
payment details / queries and information / letters from your sponsored child. You 
agree that the same shall not be deemed to be a violation of applicable 
telecommunication regulations. </h6>

          </div>
          <div>     
              <h3>Privacy Policy</h3>
              <h6 >APS Society is committed to protecting the privacy of the children and adults living in
communities where APS Society’s works. As part of this commitment, APS Society 
strictly prohibits the use of the child photographs used in this website for any other 
purpose, personal or commercial.
 
APS Society is also committed to protecting the privacy of its donors, supporters, 
employees, registered members and other stakeholders. We value the trust of those 
we deal with and of the public and recognise that maintaining this trust requires that
we be transparent and accountable in how we treat the personal information that 
you choose to share with us.
 
During the course of our various activities, we frequently gather and use personal 
information. Anyone from whom we collect such personal information should expect 
that it will be carefully protected and that any use of or dealings with this personal 
information is subject to express or implied consent.
 
APS Society has voluntarily decided to adhere to best practices for the collection, use
and disclosure of personal information as outlined in this policy.
  </h6>

          </div>
          <div>     
              <h3>Our Refund Policy</h3>
              <h6 >The refund is only possible if the request is made within 30 days and for all online 
transactions and credit card payments, in case a request is made for refund
 
To raise a refund request:
• Please send a mail to finance@aps-society.org with the transaction ID so that 
the transaction could be easily found.
• Please attach the screen shot of the transaction.
• And please do specify if any urgency in the refund .
Amount is refunded within 5-7 working days. Transactions may be disputed anytime 
within up to 120 (one hundred twenty) days, from the date of transaction by a buyer,
as per the Card Payment Network Rules. If there is any problem with the recipient 
bank it will be notified so the issue can be taken up with the recipients bank </h6>

          </div>
     
        </Grid>
  </div>
    </Styles>
  );
}
