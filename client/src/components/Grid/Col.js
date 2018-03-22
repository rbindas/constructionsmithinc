import React from "react";

export const Col = ({ size, id, children }) => (
  <div className={size} id={id}>
    {children}
  </div>
);
