import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import footerLogo from "../img/footerLogo.png";
import { Button } from 'react-bootstrap';

const Footer = () => (
  <div>
      <Container fluid id="footer">
        
          <Row>
            <Col size="col-md-3" id="firstCol">
              <img className="footerLogo" src={footerLogo} alt="img" />
              <p className="contactPage">Contact</p>
              <p className="ideasPage">Ideas & Tips</p>
              <p className="client">Clients</p>
            </Col>
        
            <Col size="col-md-3" id="secondCol">
              <p>Commercial & Residential Projects</p>
              <p>Bathroom Renovation</p>
              <p>Kitchen Renovation</p>
              <p>Basements, Pools and more...</p>
              <p>Granite, Marble, Tile, Wood</p>
              <p>New Construction Projects</p>
            </Col>

            <Col size="col-md-3" id="thirdCol">
              <Button id="appt" bsStyle="primary" onClick={()=> window.open("https://calendly.com/tilemandavid", "_blank")}>SCHEDULE AN APPOINTMENT</Button> 
              <p>Construction Smith Inc.</p>
              <p>Painesville, OH</p>
              <p>440.479.2031</p>
              <p>tilemandavid@gmail.com</p>
            </Col>

          </Row>
        </Container>
        <p className="stickyFooter">@Copyright 2018. All Rights Reserved by Construction Smith Inc</p>

    
</div>
   
);

export default Footer;