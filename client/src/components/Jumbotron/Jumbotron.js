import React from "react";

const Jumbotron = ({ id, children }) => (
  <div className="jumbotron" id={id}>
    {children}
  </div>
);

export default Jumbotron;
