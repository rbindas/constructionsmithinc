import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Contact.css";
import { Button } from 'react-bootstrap';
import tileDivider from "../../components/img/tileDivider.png";
import CarouselInside from "../../components/CarouselInside";
import Comments from "../../components/Comments";



class Contact extends Component {

  render() {
  
    return (
      <div>
        <CarouselInside /> 
                       
        <Container fluid id="content-section">
            <Col size="col-md-8 col-md-offset-2">
              <h1 id="contact-title">Contact Us</h1>
               <img id="divider" src={tileDivider} alt="img" />
              <h3 id="contact-subtitle">Watch your projects come to life</h3>
              
              <p>Bring us your idea and we'll design a solution to meet your needs. We are a licensed home improvement and restoration company living and serving northeast Ohio. Some of the communities we serve include: Mentor, Painesville, Shaker Hts, and more.</p> 

              <p>Want to ask us a question or schedule a meeting? Give us a call, send us an email, or schedule an appointment to bring your next home project to life.</p>
              
              <Row>
                <Col size="col-md-6">
                  <p className="glyphicon glyphicon-earphone" aria-hidden="true">  <span id="contactNumber">440.479.2028</span></p>
                  <br />
                  <p className="glyphicon glyphicon-envelope" aria-hidden="true"><span id="contactNumber"><a href="mailto:tilemandavid@gmail.com">&nbsp;&nbsp;tilemandavid@gmail.com</a></span></p>
                  <br/><br/>
                  <Button id="appt" bsStyle="primary" onClick={()=> window.open("https://calendly.com/tilemandavid", "_blank")}>SCHEDULE AN APPOINTMENT</Button>
                  <br/><br/>  
                  </Col>
              </Row>          
            </Col>
          </Container>
        
      </div>
  
    );
  }
}


export default Contact;
