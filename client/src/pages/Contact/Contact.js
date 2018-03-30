import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Contact.css";
import { Button } from 'react-bootstrap';
import tileDivider from "../../components/img/tileDivider.png";
import CarouselInside from "../../components/CarouselInside";
import ScheduleAppointment from "../../components/ScheduleAppointment";



class Contact extends Component {

  render() {
  
    return (
      <div>
        <CarouselInside />        
        <Container fluid id="content-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3 id="contact-title">Contact Us</h3>
               <img id="divider" src={tileDivider} alt="img" />
              <h3 id="contact-subtitle">Watch your projects come to life</h3>
              
              <p>Bring us your idea and we'll design a solution to meet your needs. We are a licensed home improvement and restoration company living and serving northeast Ohio. Some of the communities we serve include: Mentor, Painesville, Shaker Hts, and more.</p> 

              <p>Want to ask us a question or schedule a meeting? Give us a call, send us an email, or schedule an appointment to bring your next home project to life.</p>
              
              <Row>
                <Col size="col-md-6">
                  <p className="glyphicon glyphicon-earphone" aria-hidden="true"> 440.479.2028</p>
                  <br />
                  <p className="glyphicon glyphicon-envelope" aria-hidden="true"><a href="mailto:tilemandavid@gmail.com"> tilemandavid@gmail.com</a></p>
                  <ScheduleAppointment />
                  </Col>
              </Row>          
            </Col>
          </Container>
        
      </div>
  
    );
  }
}


export default Contact;
