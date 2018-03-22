import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import news from "../img/news.png";

const Header = () => (
  <div className="panel" id="headingSection">
  	<row>
    	<div className="panel-heading">
    		<ul className="navbar-nav">
        	<img src={news} alt="img" width={"70"} height={"70"} /> 
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
      	<h1>New York Times Article Scrubber</h1>
      	<h4>Search for and annotate articles of interest!</h4>
    
  </div>
   
);

export default Header;
