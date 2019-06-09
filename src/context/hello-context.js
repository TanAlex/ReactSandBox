import React from "react";
export const HelloContext = React.createContext(
  { name: "no body", setName: () => {} } // default value
);
