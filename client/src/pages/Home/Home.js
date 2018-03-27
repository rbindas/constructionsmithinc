import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Home.css";
import { Button } from 'react-bootstrap';


class Home extends Component {


  render() {
  
    return (
      <div>
        <Row>
          <Container fluid id="why-hire-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>Why Hire Us?</h3>
              <p id="intro"> David is a true craftman that does wonderful, quality work.  He has over 30 years of experience and can help you decide what to do with your project by providing ideas on design and layout, as well as the best materials to use, to meet your individual needs.
              </p>
              <Row>
                <Col size="col-md-6">
                  <img />
                </Col>
                <Col size="col-md-6">
                  <p id="detail-bio">David has been designing and building kitchens, bathrooms, finished basements, pool areas and more, for over 30 years. What sets up apart from all the rest if a master's skill level, a designer's eye for detail and most of all, great pride in workmanship. Offering something that is difficult to find in today's world, David is a true craftman and loves impressing his clients with his beautiful workmanship. It is very important to us that our customers love their completed projects and recommend us to their friends.
                  </p>
                  <Button bsStyle="primary">READ MORE</Button>
                </Col>
              </Row>
          </Col>
        </Container>
       </Row>

      <Row>
          <Container fluid id="services-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>Our Services</h3>
              <p id="summary"> From project design and layout services to demo and installation, we will guide you with every step of your project.
              </p>
              <Row>
                <Col size="col-md-6">
                  <img />
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
                  <Button bsStyle="primary">SCHEDULE AN APPOINTMENT</Button>
                </Col>
              </Row>
          </Col>
        </Container>
       </Row> 

        <Row>
          <Container fluid id="portoflio-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>Project Porfolio</h3>
              <p id="portfolio"> View some of the previous work we have completed.
              </p>
              <Row id="inline-row">
                <ul className="list-inline">
                  <li>All</li>
                  <li>Kitchens</li>
                  <li>Bathrooms</li>
                  <li>Basements/Fireplaces/Pools & More</li>
                  <li>Commercial Projects</li>
                </ul>   
              </Row>
              <Row>

                <h3>Image place holder</h3>


              </Row>
          </Col>
        </Container>
       </Row> 
                  
              
        </div>

    
    );
  }
}

export default Home;
