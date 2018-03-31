import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Client.css";
import { Button } from 'react-bootstrap';
import API from "../../utils/API";
import tileDivider from "../../components/img/tileDivider.png";
import CarouselInside from "../../components/CarouselInside";
import Iframe from "react-iframe";
import { List, ListItem } from "../../components/List";

class Client extends Component {
  state = {
    videos: []
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


  render() {
  
    return (
      <div>
        <CarouselInside />
        <Row> 
            <Col size="col-md-10 col-md-offset-1">
              <h3>Saved Ideas and Tips</h3>
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


      </div>

    
    );
  }
}

export default Client;
