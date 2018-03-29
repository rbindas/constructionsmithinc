import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import "./Ideas.css";
import { Button } from 'react-bootstrap';
import Iframe from "react-iframe";
import tileDivider from "../../components/img/tileDivider.png";



class Ideas extends Component {
  state = {
    videos: [],
    queryTopic: " "
  };

  searchVideos = () => {
    let query = `${this.state.queryTopic}`;
    API.youTubeSearch(query)
      .then(res => {
        console.log(res);
        this.setState({
          videos: res.data.items,
          queryTopic: " ",
        });
      })
      .catch(err => console.log(err)) ;
  }; 

  saveVideo = data => {
    API.saveVideo(data)
      .then(res => {
        console.log("Video saved");
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.queryTopic) {
      this.searchVideos();
    }
  };

  render() {
  
    return (
      <div>

      <Row>
        <Container fluid id="ideas-section">
          <Col size="col-md-8 col-md-offset-2">
            <h3>Ideas and Tips</h3>
            <img id="divider" src={tileDivider} alt="img" />
            <p id="headline"> Want to redesign your kitchen but don't know where to start? Want to remodel your bathroom but don't know how much to budget? Want to know how often to seal your granite counters? Need to know how to clean grout or care for your woodfloors? Check out our YouTube search engine, tips or schedule a consultation to discuss!
            </p> 
          </Col>
        </Container>
       </Row> 

        <Row>
          <Container fluid id="searchbox">         
          <form>  
            <Row>
                <Col size="col-md-10">
                  <label>Ideas or Tips Search:</label>
                  <Input
                    value={this.state.queryTopic}
                    onChange={this.handleInputChange}
                    name="queryTopic"
                    placeholder="i.e. kitchen remodel ideas"
                  />
                </Col>
                <Col size="col-sm-1">
                    <Button id="btn" bsStyle="primary"
                      disabled={!this.state.queryTopic}
                      onClick={this.handleFormSubmit}
                      >Search
                    </Button>
                </Col> 
            </Row>            
          </form>
          </Container>  
        </Row>
        <br />
        
         
        <Row>
           <Col size="col-md-10 col-md-offset-2">
                <Col id="videos-display">
                  {this.state.videos.length? (
                    <List>
                      {this.state.videos.slice(0,4).map(video => (
                        <ListItem key={video.id.videoId}>   
                            <Iframe 
                                url={`http://www.youtube.com/embed/${video.id.videoId}`}
                                width="250px"
                                height="175px" 
                                position="relative"
                                allowFullScreen /> 
                            <h5>{video.snippet.title}</h5>                             
                            <Row>
                              <Button bsStyle="primary" id="save-btn" onClick={() => this.saveVideo({
                                title: video.snippet.title,
                                videoId: video.id.videoId
                                })}>Save Video</Button>
                            </Row>
                        </ListItem>
                        ))}
                      </List>
                      ) : (
                      <div>
                      <br />
                      <br />
                        <Row>
                          <Col size="col-md-3 col-md-offset-1">
                          <Iframe 
                            url="http://www.youtube.com/embed/-FX6tLTflAs"
                            width="250px"
                            height="175px" 
                            position="relative"
                            allowFullScreen /> 
                          </Col>
                          <Col size="col-md-3">
                          <Iframe 
                            url="http://www.youtube.com/embed/bsLWNUAZ-RU"
                            width="250px"
                            height="175px" 
                            position="relative"
                            allowFullScreen /> 
                          </Col>
                          <Col size="col-md-3">
                          <Iframe 
                            url="http://www.youtube.com/embed/haQwAu7YUW8"
                            width="250px"
                            height="175px" 
                            position="relative"
                            allowFullScreen />
                          </Col>
                        </Row> 
                        <br />
                        <br /> 
                      </div>
                    )}
                </Col>  
            </Col>
          </Row>

          <Row>
          <Container fluid id="estimator-section">
            <Col size="col-md-8 col-md-offset-2">
              <h3>Project Budget Calculator</h3>
              <img id="divider" src={tileDivider} alt="img" />
              <p id="est-summary"> The Project Budget Calculator estimates a rough budget for the project. It is not a contract or guarantee.
              </p>
            
          </Col>
        </Container>
       </Row>  









              
        </div>

    
    );
  }
}

export default Ideas;
