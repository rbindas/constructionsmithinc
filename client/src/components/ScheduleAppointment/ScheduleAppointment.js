import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./ScheduleAppointment.css";
import { Button } from 'react-bootstrap';
import Iframe from "react-iframe";



class ScheduleAppointment extends Component {
    render() {
  
    return (
      <div>
      <a href="#" id="btn-sched" className="btn btn-md btn-primary" data-toggle="modal" data-target="#scheduleModal">SCHEDULE AN APPOINTMENT</a>
      <div className="modal fade" id="scheduleModal" tabIndex="-1" role="dialog" aria-labelledby="scheduleModal" aria-hidden="true">
        <div className="modal-dialog" id="sched-modal">
          <div className="modal-content">
            <div className="modal-header" id="sched-modal-header">
              <h4 className="modal-title" id="mySchedLabel">Schedule An Appointment </h4>
              <Iframe
                url={`https://calendly.com/tilemandavid`}
                    width="100%"
                    height="100%" 
                    position="relative"
                    />
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        </div>
      </div>
  
    );
  }
}

export default ScheduleAppointment;