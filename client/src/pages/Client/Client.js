
import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import "./Client.css";
import { Button } from 'react-bootstrap';
import API from "../../utils/API";
import tileDivider from "../../components/img/tileDivider.png";
import Iframe from "react-iframe";
import { List, ListItem } from "../../components/List";
import Footer from "../../components/Footer";
import axios from 'axios';
import { update } from '../../components/login/withUser';

class Client extends Component {
  state = {
    videos: [],
    
  };

  componentDidMount(){
    this.loadVideos();
  }

  loadVideos = () => {
    API.getVideos()
      .then(res => {
        console.log(res.data);
        this.setState({
          videos: res.data
        })
      })
      .catch(err => console.log(err));
  }


  deleteVideo = id => {
    API.deleteVideo(id)
      .then(res => this.loadVideos())
      .catch(err => console.log(err));
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.delete('/api/auth').then(user => {
      update(null);
      }).catch(err => {  
        console.log(err);
      });
      }


  render() {
  
    return (
      <div style={{marginTop: "110px"}}>
        <Button bsStyle="warning" style={{marginTop: "20px", float: "right", marginRight:"125px"}} onClick={this.handleLogout}>LOGOUT</Button>
          <Row style={{marginTop: "30px"}}> 
            <Col size="col-md-10 col-md-offset-1">
              <h1>Your Saved Ideas and Tips</h1>
              <img id="divider" src={tileDivider} alt="img" />
            </Col>
          </Row>

          <Row>
         
              <Col size="col-md-10 col-md-offset-1" id="saved-display">
                {this.state.videos.length? (
                  <List>
                    {this.state.videos.map(video => (
                      <ListItem key={video.videoId}>
                          <Iframe 
                                url={`http://www.youtube.com/embed/${video.videoId}`}
                                width="250px"
                                height="175px" 
                                position="relative"
                                allowFullScreen />  
                            <Row>
                              <Button id="del-btn" bsStyle="warning" onClick={() => this.deleteVideo(video._id)}>Delete</Button>
                            </Row>
                      </ListItem>
                      ))}
                  </List>
                  ) : (
                    <h3>No Saved Videos to Display</h3>
                  )}
              </Col>
            </Row>
        <Footer />  
      </div>

    
    );
  }
}



export default Client;
