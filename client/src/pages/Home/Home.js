import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Home.css";
import { Button } from 'react-bootstrap';
import tileDivider from "../../components/img/tileDivider.png"
import homeWhyHire from "../../components/img/homeWhyHire.png"
import homeOurServices from "../../components/img/homeOurServices.png"
import Carousel from "../../components/Carousel";
import BathroomGallery from "../../components/BathroomGallery";
import KitchenGallery from "../../components/KitchenGallery";
import OtherGallery from "../../components/OtherGallery";
import Footer from "../../components/Footer";

class Home extends Component {


  render() {
  
    return (
      <div>
        <Carousel />
        <Row>
          <Container fluid id="why-hire-section">
            <Col size="col-md-8 col-md-offset-2">
              <h1>Why Hire Us?</h1>
              <img id="divider" src={tileDivider} alt="img" />
              <p id="intro"> David is a true craftsman that does wonderful, quality work.  He has over 30 years of experience and can help you decide what to do with your project by providing ideas on design and layout, as well as the best materials to use, to meet your individual needs.
              </p>
              <Row>
                <Col size="col-md-6">
                  <img id="home-why" src={homeWhyHire} alt="img" />
                </Col>
                <Col size="col-md-6">
                  <p id="detail-bio">David has been designing and building kitchens, bathrooms, finished basements, pool areas and more, for over 30 years. What sets us apart from all the rest is a master's skill level, a designer's eye for detail and most of all, great pride in workmanship. Offering something that is difficult to find in today's world, David is a true craftsman and loves impressing his clients with his beautiful workmanship. It is very important to us that our customers love their completed projects and recommend us to their friends.
                  </p>
                </Col>
              </Row>
          </Col>
        </Container>
       </Row>

      <Row>
          <Container fluid id="services-section">
            <Col size="col-md-8 col-md-offset-2">
              <h1>Our Services</h1>
              <img id="divider" src={tileDivider} alt="img" />
              <p id="summary"> From project design and layout services to demo and installation, we will guide you with every step of your project.
              </p>
              <Row>
                <Col size="col-md-6">
                  <img id="home-why" src={homeOurServices} alt="img" />
                </Col>
                <Col size="col-md-6">
                  <ul>
                    <li> Kitchen or Bathroom Remodeling </li>
                    <li> Finished Basements </li>
                    <li> Fireplaces </li>
                    <li> Pool decks </li>
                    <li> Commercial Projects </li>
                    <li> Residential Projects </li>
                    <li> Home Renovations or New Construction Projects </li>
                    <li> Granite Counters </li>
                    <li> Flooring - Marble, Wood, Ceramics or Porcelain Tile </li>
                    <li> ...and so much more! </li>
                  </ul>
                  <Button id="appt" bsStyle="primary" onClick={()=> window.open("https://calendly.com/tilemandavid", "_blank")}>SCHEDULE AN APPOINTMENT</Button> 
                </Col>
              </Row>
          </Col>
        </Container>
       </Row> 

        <Row>
          <Container fluid id="portfolio-section">
            <Col size="col-md-8 col-md-offset-2">
              <h1>Project Porfolio</h1>
              <img id="divider" src={tileDivider} alt="img" />
              <p id="portfolio"> View some of the previous work we have completed.
              </p>
              
              <Row>
                <Col size="col-md-4">
                <h3>Bathrooms</h3>
                  <BathroomGallery />
                </Col>
                <Col size="col-md-4">
                <h3>Kitchens</h3>
                  <KitchenGallery />
                </Col>
                <Col size="col-md-4">
                <h3>Other Projects</h3>
                  <OtherGallery />
                </Col>
              </Row>
          </Col>
        </Container>
       </Row> 
                  
       <Footer />       
        </div>

    
    );
  }
}

export default Home;
