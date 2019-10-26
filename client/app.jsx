import React from 'react';
import Description from './components/description.jsx';
import ShipPay from './components/ship_pay.jsx'
import queryString from 'query-string';
import styled from 'styled-components';

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
          <Button id="desc" onClick={this.handleDescClick}>Description</Button>
          <Button id="shippay" onClick={this.handleSPClick}>Shipping and payments</Button>
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
`
const Button = styled.button`
  border: 1px solid black;
  color: blue;
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  margin-left: 2px;
`

const Content = styled.div`
  border: 1px solid black;
  margin: 0px 5px 10px 5px;
  padding: 0px 25px 25px 25px;
`