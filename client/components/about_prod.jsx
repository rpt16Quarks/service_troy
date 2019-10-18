import React from 'react';

function AboutProd(props) {
  console.log('inside about prod',props)
  return (
    <div>
      <h3>{props.seller.item_des}</h3>
      <p>{props.seller.prod_des}</p>
      <img src={props.seller.img_url} alt="here we go" height="250px" width="250px"></img>
    </div>
  )
}

export default AboutProd