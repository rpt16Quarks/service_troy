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
//conditional rendering here is a work around for an asycn bug that was crashing the app.  The first render had nothing in state so was passing undefined.  Now code waits for get request res before rendering components
  render() {
    if (this.state.data.length < 1) {
      return <p>loading</p>
    }
    if (this.state.page === 1) {
      return (
        <div>
          <ShipPay payment={this.state.data[1]}/>
        </div>
      )
    }
    return (
      <div>
        <Description prodInfo={this.state.data[0]}/>
      </div>

    )
  }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('product-description'))