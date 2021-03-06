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
import CarouselInside from "../../components/CarouselInside";
import BathroomCalculator from "../../components/BathroomCalculator";
import KitchenCalculator from "../../components/KitchenCalculator";
import FloorReplacementCalculator from "../../components/FloorReplacementCalculator";
import Footer from "../../components/Footer";

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
      <CarouselInside />
      <Row>
        <Container fluid id="ideas-section">
          <Col size="col-md-8 col-md-offset-2">
            <h1>Ideas and Tips</h1>
            <img id="divider" src={tileDivider} alt="img" />
            <p id="headline">Do you want to redesign your kitchen but don't know where to start? Are you planning to remodel your bathroom but have no idea how much to budget? Would you like to know how often to seal your granite counters? Or, maybe you just need to know how to clean grout or care for your woodfloors. Check out our YouTube search engine and get handy tips, or schedule a consultation to discuss!
            </p> 
          </Col>
        </Container>
       </Row> 

      {/* Search Section */}
        <Row>
          <Container fluid id="searchbox">         
          <form>  
            <Row>
                <Col size="col-md-9">
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
        
      {/* Search results display */}   
        <Row>
           <Col size="col-md-10 col-md-offset-1">
                <Col id="videos-display">
                  {this.state.videos.length? (
                    <List>
                      {this.state.videos.slice(0,4).map(video => (
                        <ListItem key={video.id.videoId}>   
                            <Iframe 
                                url={`https://www.youtube.com/embed/${video.id.videoId}`}
                                width="250px"
                                height="175px" 
                                position="relative"
                                allowFullScreen />                             
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

                    {/* Seeded videos before any searches.  Will be replaced with search results */}
                        
                        <Row>
                          <Col size="col-md-3 col-md-offset-2">
                          <Iframe 
                            url="https://www.youtube.com/embed/-FX6tLTflAs"
                            width="250px"
                            height="175px" 
                            position="relative"
                            allowFullScreen /> 
                          </Col>
                          <Col size="col-md-3">
                          <Iframe 
                            url="https://www.youtube.com/embed/bsLWNUAZ-RU"
                            width="250px"
                            height="175px" 
                            position="relative"
                            allowFullScreen /> 
                          </Col>
                          <Col size="col-md-3">
                          <Iframe 
                            url="https://www.youtube.com/embed/haQwAu7YUW8"
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

        {/* Calculator Section */}
          <Row className="greybg">
            <Container fluid id="estimator-section">
              <Col size="col-md-8 col-md-offset-2">
                <h1>Project Budget Calculator</h1>
                <img id="divider" src={tileDivider} alt="img" />
                <p id="est-summary">The Project Budget Calculator estimates a rough budget for typical projects. It is meant to be a handy planning tool. It is not a contract or guarantee.
                </p>
              </Col>
            </Container>
           </Row>  

          <BathroomCalculator />
          <KitchenCalculator />
          <FloorReplacementCalculator />

          <br />
          <br />
          <br />


          <Footer />             
        </div>
       
     
    
    );
  }
}

export default Ideas;
