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
              <p>Construction Smith Inc.</p>
              <p>Painesville, OH</p>
              <p>440.479.2028</p>
              <a href="mailto: tilemandavid@gmail.com">tilemandavid@gmail.com</a>
            </Col>
        
            <Col size="col-md-3" id="secondCol">
              <p>Residential and Commercial Projects</p>
              <p>Bathroom Renovations</p>
              <p>Kitchen Renovations</p>
              <p>Basements, Pools, Fireplaces and more...</p>
              <p>Granite, Marble, Quartz, Tile, Wood</p>
              <p>New Construction Projects</p>
            </Col>

            <Col size="col-md-3" id="thirdCol">
              <Button id="footerAppt" bsStyle="primary" onClick={()=> window.open("https://calendly.com/tilemandavid", "_blank")}>SCHEDULE AN APPOINTMENT</Button> 
              <p><strong>Fully Bonded and Insured</strong></p>
              <Row id="social-icon">
                <i className="fa fa-facebook-square" />
                <i className="fa fa-linkedin-square" />
              </Row>
            </Col>

          </Row>
        </Container>
        <p className="stickyFooter">&copy; Copyright 2018. All Rights Reserved, Construction Smith Inc.</p>

    
</div>
   
);

export default Footer;