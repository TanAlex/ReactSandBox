import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HelloContext } from "./context/hello-context.js";
import Alert from "./components/alert.jsx";

import NameInput from "./components/name-input";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "no one",
      setName: this.setName
    };
  }
  setName = name => {
    this.setState(state => ({
      name: name
    }));
  };
  render() {
    return (
      <div class="container">
        <HelloContext.Provider value={this.state}>
          <h1>Hello World!</h1>
          <Alert />
          <NameInput />
        </HelloContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
