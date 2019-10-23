import React from 'react'
import styled from 'styled-components'
import ReturnPolicy from './return_policy.jsx'

const ShipPay = (props) => {
  console.log('inside shippay', props)
  return (
    <ShipContainer>
      <p>Seller assumes all responsibility for this listing.</p>
      <Shipping>
        <Header>Shipping and Handling</Header>
        <p>Item location <strong>{props.payment.ship_handling.item_location}</strong></p>
        <p>Shipping to: {props.payment.ship_handling.ship_to}</p>
        <p>Excludes: {props.payment.ship_handling.ship_excludes}</p>
        <InfoTables>
          <tbody>
            <tr>
              <td>Shipping and handling</td>
              <td>To</td>
              <td>Service</td>
              <td>Delivery*</td>
            </tr>
            <tr>
              <td>{props.payment.shipping_cost.price}</td>
              <td>{props.payment.shipping_cost.region}</td>
              <td>{props.payment.shipping_cost.service}</td>
              <td>{props.payment.shipping_cost.est_time}</td>
            </tr>
          </tbody>
        </InfoTables>
        <DeliveryInfo>* <Link href="#">Estimated delivery dates</Link> include seller's handling time, origin ZIP Code, destination ZIP Code and time of acceptance and will depend on shipping service selected and receipt of <Link href="#">cleared payment</Link>. Delivery times may vary, especially during peak periods.</DeliveryInfo>
        <InfoTables>
          <tbody>
            <tr>
              <td>Taxes</td>
            </tr>
            <tr>
              <td>Taxes may be applicable at checkout. <Link href="#">Learn more</Link></td>
            </tr>
          </tbody>
        </InfoTables>
      </Shipping>
      <ReturnPolicy returns={props.payment}/>
      <Paypal>
        <Header>Payment details</Header>
        <p>Payment methods</p>
        <img src="https://p.ebaystatic.com/aw/logos/logoPaypalCreditv2_157x55.png"></img>
        <h2>Special financing available</h2>
        <p>Select PayPal Credit at checkout to have the option to pay over time.</p>
        <p>Qualifying purchases could enjoy No Interest if paid in full in 6 months on purchases of $99 or more. Other offers may also be available.</p>
        <p>Interest will be charged to your account from the purchase date if the balance is not paid in full within 6 months. Minimum monthly payments are required. Subject to credit approval. See terms- opens in a new window or tab</p>
        <p>The PayPal Credit account is issued by Synchrony Bank.</p>
      </Paypal>
    </ShipContainer>
  )
}

export default ShipPay

const ShipContainer = styled.div`
  font-family: "Helvetica neue",Helvetica,Verdana,Sans-serif;
  font-size: 12px;
`
const Shipping = styled.div`
  border: 1px solid black;
  padding: 0px 20px 20px 20px
  line-height: 1em;
`
const Paypal = styled.div`
margin-top: 15px;
border: 1px solid black;
padding: 0px 20px 20px 10px
`
const Header = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
`
const InfoTables = styled.table`
  table-layout: auto;
  width:100%;
  td {
    border-bottom: 1px solid black;
    padding: 5px 10px 5px 15px;
  }
  tr: nth-child(odd) {background-color: #f2f2f2}
`
const DeliveryInfo = styled.p`
  font-size: 10px;
  padding-left: 25px;
  margin-bottom: 20px;
`
const Link = styled.a`
  text-decoration:none;
  font-color: blue;
`