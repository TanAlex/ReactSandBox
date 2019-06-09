import React from "react";
import { HelloContext } from "../context/hello-context.js";

export default props => {
  return (
    <HelloContext.Consumer>
      {({ name, setName }) => (
        <div class="form-group">
          <label for="usr">Name:</label>
          <input
            type="text"
            class="form-control"
            id="usr"
            onChange={e => {
              //console.log(e); //don't use e, it will error out, you can use e.target
              //console.log(name, setName);
              setName(e.target.value); //use e.target is ok, just don't use e directly
            }}
          />
        </div>
      )}
    </HelloContext.Consumer>
  );
};
