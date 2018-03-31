import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Client.css";
import { Button } from 'react-bootstrap';
import tileDivider from "../../components/img/tileDivider.png"
import homeWhyHire from "../../components/img/homeWhyHire.png"
import homeOurServices from "../../components/img/homeOurServices.png"
import CarouselInside from "../../components/CarouselInside";


class Client extends Component {

  render() {
  
    return (
      <div>
        <CarouselInside />
        <Row>
          <Container fluid id="why-hire-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>Clients</h3>
              <img id="divider" src={tileDivider} alt="img" />
            </Col>
          </Container>
        </Row>
      </div>

    
    );
  }
}

export default Client;
