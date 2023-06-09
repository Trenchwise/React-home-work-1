import React, { Component } from "react";
import Button from "./Button";
import IsHappy from "./IsHappy";

class App extends Component {
  state = { happy: false };

  onToggle = () => {
    this.setState({ happy: !this.state.happy }); // the explaination mark ! mean opposite
  };

  render() {
    return (
      <>
        <button onClick={this.onToggle}>Toggle</button>
        <IsHappy happy={this.state.happy} />
      </>
    );
  }
}

export default App;
