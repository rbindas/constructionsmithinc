import React from "react";
import "./CarouselInside.css";
import aboutTop from "../img/aboutTop.png";
import clientTop from "../img/clientTop.png";
import servicesTop from "../img/servicesTop.png";
import contactTop from "../img/contactTop.png";


const CarouselInside = props => (
      
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <div className="phone2">
    <h3>Call for a FREE Consultation. 440.479.2028</h3>
 </div>
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
   </ol>
  
 <div className="carousel-inner">
    <div className="item active">
     <img src={aboutTop} alt="Construction Smith Inc." width="100%"/>  
    </div>
    <div className="item">
     <img src={clientTop} alt="Construction Smith Inc." width="100%"/>
    </div>
    <div className="item">
     <img src={servicesTop} alt="Construction Smith Inc." width="100%"/>
    </div>
    <div className="item">
     <img src={contactTop} alt="Construction Smith Inc." width="100%"/>
    </div>
 </div>

 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>

 </div>
 
);

export default CarouselInside;
      