class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello React,Webpack 4 & Babel 7!</div>
  }
}

ReactDOM.render(<App />, document.getElementById('product-description'))