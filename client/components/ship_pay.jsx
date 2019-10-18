import React from 'react'
import ShipHand from './ship_hand.jsx';
import ReturnPolicy from './return_policy.jsx'

const ShipPay = (props) => {
  console.log('inside shippay', props)
  return (
    <div>
      <ShipHand details={props.payment}/>
      <ReturnPolicy />
      <div id="PayDetails">
        <h1>Payment details</h1>
        <p>Payment methods</p>
        <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
        <img src="https://p.ebaystatic.com/aw/logos/logoPaypalCreditv2_157x55.png"></img>
        <h2>Special financing available</h2>
        <p>Select PayPal Credit at checkout to have the option to pay over time.</p>
        <p>Qualifying purchases could enjoy No Interest if paid in full in 6 months on purchases of $99 or more. Other offers may also be available.</p>
        <p>Interest will be charged to your account from the purchase date if the balance is not paid in full within 6 months. Minimum monthly payments are required. Subject to credit approval. See terms- opens in a new window or tab</p>
        <p>The PayPal Credit account is issued by Synchrony Bank.</p>
      </div>
    </div>
  )
}

export default ShipPay