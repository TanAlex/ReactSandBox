import React from "react";
import { HelloContext } from "../context/hello-context.js";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    //this.name = this.context.name;
  }
  static contextType = HelloContext;
  render() {
    return (
      <div class="alert alert-primary" role="alert">
        Hi {this.context.name} !
      </div>
    );
  }
}

export default Alert;
