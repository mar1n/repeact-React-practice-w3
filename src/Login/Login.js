import React from "react";
import { connect } from "react-redux";
import "./Login.css";
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  // showLogin: () => dispatch(showLogin()),
});
function Login(props) {
  return (
    <>
      <div className={
          `login ${props.reducer.isLoginVisible ? 'is-visible' : ''}`
      }>
        This is the login page!
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
