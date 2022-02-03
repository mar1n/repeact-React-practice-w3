import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Gallery from "./Kodiri";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    console.log('event', event)
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inputs', inputs);
    alert(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=''>
        Enter your name:
        <input
          type='text'
          name='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit"/>
    </form>
  );
}

ReactDOM.render(<MyForm />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if (module.hot) {
  module.hot.accept();
}
