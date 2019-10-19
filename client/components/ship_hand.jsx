import React from 'react';

const ShipHand = (props) => {
  console.log('in shiphand', props)
  return(
    <div>
      <h1>Shipping and Handling</h1>
      <p>Item location {props.details.ship_handling.item_location}</p>
      <p>Shipping to: {props.details.ship_handling.ship_to}</p>
      <p>Excludes: {props.details.ship_handling.ship_excludes}</p>
      <table id="shipping">
        <tbody>
          <tr>
            <th>Shipping and handling</th>
            <th>To</th>
            <th>Service</th>
            <th>Delivery</th>
          </tr>
          <tr>
            <th>{props.details.shipping_cost.price}</th>
            <th>{props.details.shipping_cost.region}</th>
            <th>{props.details.shipping_cost.service}</th>
            <th>{props.details.shipping_cost.est_time}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShipHand