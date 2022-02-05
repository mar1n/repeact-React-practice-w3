import React from "react";

export default class ConditionalRendering extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return this.state.show ? (
      <Crap />
    ) : (
      <div>Monday blues</div>
    );
  }
}

function Crap() {
  return (
    <div>
      Some new Component with name Crap <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
    </div>
  );
}
