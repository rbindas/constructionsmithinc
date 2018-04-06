import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-hidden="true">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>   
        </button>                  
        <span className="navbar-brand">
          <img className="logo" src={logo} alt="img" />
        </span>
      </div>
       
       <div className="collapse navbar-collapse" id="myNavbar">
       
        <ul className="nav navbar-nav">
          <li  
            className={window.location.pathname === "/" || window.location.pathname === "/home"
                ? "active"
                : ""
            }>
            <Link to="/">Home</Link>
            
          </li>
        <li className={window.location.pathname === "/ideas" ? "active" : ""}>
          <Link to="/ideas">Ideas & Tips</Link>
        </li>
        <li  className={window.location.pathname === "/client" ? "active" : ""}>
          <Link to="/client">Clients</Link>
        </li>
        <li className={window.location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login or Register</Link>
        </li>
       
      </ul>
      </div>
    </div>
    
  </nav>
  
);

export default Navbar;