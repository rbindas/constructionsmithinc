import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";
import footerLogo from "../img/footerLogo.png";
import { Button } from 'react-bootstrap';
import ScheduleAppointment from "../../components/ScheduleAppointment";

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
              <ScheduleAppointment />
              <br />
              <p><strong>Fully Bonded and Insured</strong></p>
              <Row id="social-icon">
                <a href="https://www.facebook.com/Construction-Smith-Inc-224425121442895"><i className="fa fa-facebook-square" /></a>
                <a href="https://www.linkedin.com/in/david-smith-55494a69"><i className="fa fa-linkedin-square" /></a>
              </Row>
            </Col>

          </Row>
        </Container>
        <p className="stickyFooter">&copy; Copyright 2018. All Rights Reserved, Construction Smith Inc.</p>

    
</div>
   
);

export default Footer;