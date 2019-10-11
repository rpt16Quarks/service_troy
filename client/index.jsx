import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    $.get({
      url: 'http://localhost:3005/description/1',
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

ReactDOM.render(<App />, document.getElementById('product-description'))