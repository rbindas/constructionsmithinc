import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="img" />
        </Link>

      </div>



      

      <ul className="nav navbar-nav">

        <li
          className={
            window.location.pathname === "/" || window.location.pathname === "/home"
              ? "active"
              : ""
          }
        >
      
          <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={window.location.pathname === "/ideas" ? "active" : ""}>
          <Link to="/ideas">Ideas & Tips</Link>
        </li>
        <li className={window.location.pathname === "/client" ? "active" : ""}>
          <Link to="/client">Clients</Link>
        </li>
      </ul>
    </div>
    <br />
  </nav>
);

export default Navbar;