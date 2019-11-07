import React from 'react';
import Description from './components/description.jsx';
import ShipPay from './components/ship_pay.jsx'
import queryString from 'query-string';
import styled from 'styled-components';
import fetch from 'node-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      page: 0
    }
    this.handleDescClick = this.handleDescClick.bind(this);
    this.handleSPClick = this.handleSPClick.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    let prod = Number(parsed.prod_id)
    fetch(`/description?prod_id=${prod}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(res => this.setState({data:res}))

    this.DesButton
  }

  handleDescClick() {
    this.setState({page:0})
  }

  handleSPClick() {
    this.setState({page:1})
  }
//conditional rendering here is a work around for an asycn bug that was crashing the app.  The first render had nothing in state so was passing undefined.  Now code waits for get request res before rendering components
  render() {
    if (this.state.data.length < 1) {
      return <p data-test="default">loading</p>
    }
    const selectPage = this.state.page;
    let page
    if (selectPage === 0) {
      page = <Description prodInfo={this.state.data[0]} data-test="description"/>
    } else if (selectPage === 1) {
      page = <ShipPay payment={this.state.data[1]} data-test="ship_pay"/>
    }
    return (
      <div>
        <Menu>
          <Button autoFocus id="desc" onClick={this.handleDescClick}>Description</Button>
          <Button id="shippay" onClick={this.handleSPClick}>Shipping and payments</Button>
          <Report>
            <p>Report item</p>
          </Report>
        </Menu>
        <Content>
          {page}
        </Content>
      </div>

    )
  }
}

export default App;

const Menu = styled.div`
  padding-left:5px;
  display:flex;
  align-items:flex-end;
`
const Report = styled.div`
  border-bottom: 1px solid black;
  flex-grow:3
  font-size: 12px;
  text-align: right;
  color: blue;
  margin-right: 5px;
  padding-right: 20px;

`

const Button = styled.button`
  background: #f2f2f2;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid black;
  color: blue;
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;

  &:focus {
    outline:0;
    background: white;
    border-bottom: 1px solid white;
  }
`

const Content = styled.div`
  border: 1px solid black;
  border-top: 1px solid white;
  margin: 0px 5px 10px 5px;
  padding: 0px 25px 25px 25px;
`