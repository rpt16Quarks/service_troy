import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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
      url: `http://localhost:3002/description?prod_id=${prod}`,
      success: (res) => {
        console.log(res)
        this.setState({
          data:res
        })
      },
      dataType: 'JSON'
    })
  }

  render() {
    return <div>Hello React,Webpack 4 & Babel 7!</div>
  }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('product-description'))