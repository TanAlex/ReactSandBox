import React from "react";
import { HelloContext } from "../context/hello-context.js";
import _ from "lodash";

//Put the deboncedSetName outside of the function
//because the stateless function executes every time
//we have to keep the debounced function out of every run

const debouncedSetName = _.debounce(
  (setName, newName) => {
    setName(newName);
  },
  400,
  { leading: true }
);

export default props => {
  return (
    <HelloContext.Consumer>
      {({ name, setName }) => {
        return (
          <div class="form-group">
            <label for="usr">Name:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              onChange={e => debouncedSetName(setName, e.target.value)}
            />
          </div>
        );
      }}
    </HelloContext.Consumer>
  );
};
