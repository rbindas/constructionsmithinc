import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./ScheduleAppointment.css";
import { Button } from 'react-bootstrap';




class ScheduleAppointment extends Component {
    render() {
  
    return (
      <div>        
        <Row>
          <Container fluid>
            <Col size="col-md-8 col-md-offset-2">
              <Button id="appt" bsStyle="primary" onClick={()=> window.open("https://calendly.com/tilemandavid", "_blank")}>SCHEDULE AN APPOINTMENT</Button>
            </Col>
          </Container>
        </Row>
      </div>
  
    );
  }
}

export default ScheduleAppointment;