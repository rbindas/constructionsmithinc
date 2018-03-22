import React from "react";

export const Row = ({ fluid, id, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`} id={id}>
    {children}
  </div>
);
