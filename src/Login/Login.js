import React from "react";
import { connect } from "react-redux";
import { hideLogin } from "../actions/simpleAction"
import "./Login.css";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  hideLogin: () => dispatch(hideLogin()),
});
function Login(props) {
  return (
    <>
      <div className={
          `login ${props.reducer.isLoginVisible ? 'is-visible' : ''}`
      }>
        This is the login page!
        <button onClick={props.hideLogin}>Hide Login</button>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
