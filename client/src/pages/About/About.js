import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";
import { Button } from 'react-bootstrap';
import tileDivider from "../../components/img/tileDivider.png"
import about from "../../components/img/about.png"
import homeOurServices from "../../components/img/homeOurServices.png"
import CarouselInside from "../../components/CarouselInside";

class About extends Component {

  render() {
  
    return (
      <div>
        <CarouselInside />
        <Row>
          <Container fluid id="about-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>A Few Words About Us...</h3>
              <img id="divider" src={tileDivider} alt="img" />
              <p id="headline"> From our initial consultation to the finishing touches, our team of professionals will guide you through the remodeling process, creating a beautiful and functional space that meets your individual needs.
              </p>
              <Row>
                <Col size="col-md-6">
                  <img id="about" src={about} alt="img" />
                </Col>
                <Col size="col-md-6">
                  <p id="about-details">We have been doing home renovations; kitchens, bathrooms, finished basements, fireplaces, pool decks and more, as well as commercial projects and new home construction projects for over 30 years.  What sets us apart is a master-craftsman skill level, a designer's eye for detail and most of all, great pride in workmanship.  Offering something that is difficult to find in today's world, David is a true craftman and loves impressing his clients with his beautiful workmanship.  Customer satisfaction is our number one goal.  We want our customers to love their completed projects and recommend us to their friends.
                  </p>
                  <Button bsStyle="primary">SCHEDULE AN APPOINTMENT</Button>
                </Col>
              </Row>
          </Col>
        </Container>
       </Row>

      <Row>
          <Container fluid id="mission-statement-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>Our Mission Statement</h3>
              <img id="divider" src={tileDivider} alt="img" />
              <p id="statement"> Construction Smith Inc.'s is to provide the very best value in home renovations, new construction, kitchen and bath design, commercial and residential construction services for our customers.  We will operate with the highest level of integrity, maintaining a profitable business and creative environment for our employees.
              </p>
            </Col>
          </Container>
       </Row> 

    
              <Row>

                <h3>Image place holder</h3>


              </Row>
         
        
       
                  
              
        </div>

    
    );
  }
}

export default About;
