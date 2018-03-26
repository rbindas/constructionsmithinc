import React from "react";
import { Button } from 'react-bootstrap';

export const FormBtn = props => (
  <Button {...props} style={{ float: "center"}} className="btn btn-primary">
    {props.children}
  </Button>
);
