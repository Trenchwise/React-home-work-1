import React, { Component } from "react";

class Button extends Component {
  onClick = () => {
    console.log("I was Clicked");
  };
  render() {
    return <button onClick={this.onClick}></button>;
  }
}

export default Button;
