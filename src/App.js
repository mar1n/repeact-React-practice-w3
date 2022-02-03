import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login/Login";
import logo from "./logo.svg";
import "./App.css";
import { showLogin } from "./actions/simpleAction";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  showLogin: () => dispatch(showLogin()),
});
class App extends Component {
  showLogin = (event) => {
    this.props.showLogin();
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Login />
        <button onClick={this.showLogin}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
