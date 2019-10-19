import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Description from './components/description.jsx';
import ShipPay from './components/ship_pay.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import queryString from 'query-string';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      page: 1
    }
    this.handleDescClick = this.handleDescClick.bind(this);
    this.handleSPClick = this.handleSPClick.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    let prod = Number(parsed.prod_id)
    console.log('troy service',prod)
    $.get({
      url: `/description?prod_id=${prod}`,
      success: (res) => {
        this.setState({
          data:res
        })
      },
      dataType: 'JSON'
    })
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
      return <p>loading</p>
    }
    const selectPage = this.state.page;
    let page
    if (selectPage === 0) {
      page = <Description prodInfo={this.state.data[0]}/>
    } else if (selectPage === 1) {
      page = <ShipPay payment={this.state.data[1]}/>
    }
    return (
      <div>
        <button onClick={this.handleDescClick}>Description</button>
        <button onClick={this.handleSPClick}>Shipping and payments</button>
        {page}
      </div>

    )
  }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('product-description'))