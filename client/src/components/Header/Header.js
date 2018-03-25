import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';


const Header = () => (
  <div className="panel" id="headingSection">
  	<row>
    	<div className="panel-heading">
    		<ul className="navbar-nav">
        	
        	<li className="nav-item">
          	<Link style={{ color: "yellow"}} className="nav-link" to="/">
            	Home
          	</Link>
        	</li>
        	<li className="nav-item">
          	<Link style={{ color: "yellow"}} className="nav-link" to="/saved">
            	Saved Articles
          	</Link>
        	</li>
      		</ul>
      		</div>
      	</row>
    	<br />
    	<br />
      	<h1>Construction Smith, Inc.</h1>
      	<h4>Searching for You Tube Videos</h4>
    
  </div>
   
);

export default Header;
