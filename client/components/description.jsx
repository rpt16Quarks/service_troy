import React from 'react';
import ItemSpec from './item_spec.jsx';
import AboutProd from './about_prod.jsx';

function Description(props) {
  return (
    <div id='descTab'>
      <p>Seller assumes all responsibility for this listing.</p>
      <p>Last updated on {props.prodInfo.list_date}</p>
      <p>eBay item number:{props.prodInfo.item_number}</p>
      <ItemSpec specs={props.prodInfo.item_Spec}/>
      <AboutProd />
    </div>
  )
}

export default Description