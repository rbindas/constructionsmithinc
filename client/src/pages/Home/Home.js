import React, { Component } from "react";
// import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Home.css";
import { Button } from 'react-bootstrap';



class Home extends Component {
  state = {
    videos: [],
    queryTopic: " "
  };

  componentDidMount() {
    this.searchVideos();
  }

  searchVideos = () => {
    let query = `${this.state.queryTopic}`;
    API.youTubeSearch(query)
      .then(res => {
        console.log(res);
        this.setState({
          videos: res.data.response,
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
          <Col size="col-md-8 col-md-offset-2" id="searchBox">
            <Jumbotron id="main-header">
              <h2><strong>Videos Search</strong></h2>
              <br />
              <Row>          
                <form>  
                    <label>Topic:</label>
                      <Input
                          value={this.state.queryTopic}
                          onChange={this.handleInputChange}
                          name="queryTopic"
                          placeholder="Remodel Ideas required"
                          />
                        
                      
                          <Button bsStyle="success"
                            disabled={!this.state.queryTopic}
                            onClick={this.handleFormSubmit}
                            >Search
                          </Button>
                      
                  
                </form>
                 
                
              </Row>
            </Jumbotron>
          </Col>
        </Row>
         
    
        <Row>

          <Col size="col-md-8 col-md-offset-2">
            <Jumbotron id="results-section">
                <h2>Search Results</h2>
            </Jumbotron>
              <Container fluid id="display">
                <Col id="videos-display">
                  {this.state.length? (
                    <List>
                      {this.state.videos.slice(0,5).map(video => (
                        <ListItem key={video._id}>   
                              
                                <iframe src={video.snippet.thumbnails.default.url}></iframe>
                                  <h4>{video.id.videoId}</h4>
                                  <h4><strong>{video.snippet.title}</strong></h4>
                                  <h4><strong>{video.snippet.description}</strong></h4>
                                 
                            
                            
                              <Button style={{float: "right"}} onClick={() => this.saveVideo({
                                title: video.snippet.title,
                                description: video.snippet.description,
                                url: video.snippet.thumbnails.default.url,
                                videoId: video.id.videoId
                                })} />
                            
                        </ListItem>
                        ))}
                      </List>
                      ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
              </Container>
              
            </Col>
          </Row>
        
                  
              
        </div>

    
    );
  }
}

export default Home;
