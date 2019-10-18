import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Description from './components/description.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import queryString from 'query-string';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    let prod = Number(parsed.prod_id)
    console.log('troy service',prod)
    $.get({
      url: `/description?prod_id=${prod}`,
      success: (res) => {
        console.log('in success callback',res[0])
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
    return (
      <div>
        <Description prodInfo={this.state.data[0]}/>
      </div>

    )
  }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('product-description'))