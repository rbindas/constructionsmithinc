import React from "react";
import "./Carousel.css";
import slider1 from "../img/slider1.png";
import slider2 from "../img/slider2.png";
import slider3 from "../img/slider3.png";
import slider4 from "../img/slider4.png";


const Carousel = props => (
      
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <div className="phone2">
    <h3>Call for a FREE Consultation 440.479.2028</h3>
 </div>
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
   </ol>
  
 <div className="carousel-inner">

    <div className="item active">

     <img src={slider1} alt="Construction Smith Inc." width="100%"/>  


    </div>
    <div className="item">
     <img src={slider2} alt="Construction Smith Inc." width="100%"/>
    </div>
    <div className="item">
     <img src={slider3} alt="Construction Smith Inc." width="100%"/>
    </div>
    <div className="item">
     <img src={slider4} alt="Construction Smith Inc." width="100%"/>
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

export default Carousel;
      