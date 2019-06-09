import React, { Component } from "react";
import ReactDOM from "react-dom";
import Alert from "./components/alert.jsx";

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Alert />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
