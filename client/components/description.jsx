import React from 'react';
import ItemSpec from './item_spec.jsx';
import AboutProd from './about_prod.jsx';
import styled from 'styled-components'

function Description(props) {
  return (
    <div id='descTab'>
      <StyledParg>
        <ItemNumber>
          <p>eBay item number: {props.prodInfo.item_number}</p>
        </ItemNumber>
        <p>Seller assumes all responsibility for this listing.</p>
        <p>Last updated on {props.prodInfo.list_date} <a href="#">View all revisions</a></p>
      </StyledParg>
      <ItemSpec specs={props.prodInfo.item_Spec}/>
      <AboutProd seller ={props.prodInfo.seller_msg}/>
    </div>
  )
}

export default Description

const StyledParg = styled("div") `
  font-size: 14px;
  line-height: 5px;
  text-decoration: none;
`
const ItemNumber= styled(StyledParg)`
  text-align: right;
`
