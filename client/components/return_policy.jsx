import React from 'react';

const ReturnPolicy = (props) => {
  if (props.returns.exist) {
    return (
      <div>
        <h1>Return Policy</h1>
        <table>
          <tbody>
            <tr>
              <td>After receiving the item, contact seller within</td>
              <td>Refund will be given as</td>
              <td>Return Shipping</td>
            </tr>
            <tr>
              <td>{props.returns.deadline}</td>
              <td>{props.returns.type}</td>
              <td>{props.returns.pay_shipping}</td>
            </tr>
          </tbody>
        </table>
        <p>Refer to eBay Return policy for more details. You are covered by the eBay Money Back Guarantee if you receive an item that is not as described in the listing.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Return Policy</h1>
        <table>
          <tbody>
            <tr>
              <td>After receiving the item, contact seller within</td>
              <td>Refund will be given as</td>
              <td>Return Shipping</td>
            </tr>
            <tr>
              <td>Seller does not offer returns</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>Refer to eBay Return policy for more details. You are covered by the eBay Money Back Guarantee if you receive an item that is not as described in the listing.</p>
      </div>
    )

  }
}

export default ReturnPolicy