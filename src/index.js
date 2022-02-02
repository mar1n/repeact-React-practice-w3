import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from "./Kodiri";
import App from "./App";
import reportWebVitals from './reportWebVitals';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      model: "Mustang",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({model: "Reanult"})
    }, 1000)
  }
  render() {
    return(
      <div>
        <h1>My Car model is {this.state.model}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Header carModel="Reanult"/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if(module.hot) {
  module.hot.accept();
}