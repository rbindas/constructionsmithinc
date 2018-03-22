import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Home.css";



class Home extends Component {
  state = {
    articles: [],
    queryTopic: " "
  };

  searchArticles = () => {
    let query = `${this.state.queryTopic}`;
    if (this.state.startDate) {
      query = `${query}&begin_date=${this.state.startDate}0101`;
    }
    if (this.state.endDate){
      query = `${query}&end_date=${this.state.endDate}1231`;
    }

    API.nytSearch(query)
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data.response.docs,
          queryTopic: " ",
          startDate: " ",
          endDate: " "
        });
      })
      .catch(err => console.log(err)) ;
  }; 


  saveArticle = data => {
    API.saveArticle(data)
      .then(res => {
        console.log("Article saved");
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
      this.searchArticles();
    }
  };


  render() {
  
    return (
      <div>
        <Row>
          <Col size="col-md-8 col-md-offset-2" id="searchBox">
            <Jumbotron id="main-header">
              <h2><strong>Articles Search</strong></h2>
              <br />
              <Row>          
                <form>
                  <Row>
                      <Row id="formRow"> 
                        <Col size="col-md-5">
                          <label>Topic:</label>
                          <Input
                            value={this.state.queryTopic}
                            onChange={this.handleInputChange}
                            name="queryTopic"
                            placeholder="Topic required"
                          />
                        </Col>
                        <Col size="col-md-3">
                          <label>Start Year:</label>
                          <Input
                            value={this.state.startDate}
                            onChange={this.handleInputChange}
                            name="startDate"
                            placeholder="i.e. 2016"
                          />
                         </Col>
                        <Col size="col-md-3">
                          <label>End Year:</label>
                          <Input
                            value={this.state.endDate}
                            onChange={this.handleInputChange}
                            name="endDate"
                            placeholder="i.e. 2017"
                          />
                        </Col>
                      </Row>
                      <Row id="btn-search"> 
                          <FormBtn
                            disabled={!this.state.queryTopic}
                            onClick={this.handleFormSubmit}
                            >Search
                          </FormBtn>
                      </Row>
                  </Row>
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
                <Col id="articles-display">
                  {this.state.articles.length ? (
                    <List>
                      {this.state.articles.slice(0,10).map(article => (
                        <ListItem key={article._id}>
                          <Row>
                            <Col size="col-md-10">
                              <h4>
                                <a href={article.web_url} target="_blank">
                                  <strong>{article.headline.main}</strong>
                                </a>
                              </h4>
                              <h6>Published Date: {article.pub_date}</h6>  
                            </Col>
                            <Col size="col-md-2">
                              <SaveBtn style={{float: "right"}} onClick={() => this.saveArticle({
                                title: article.headline.main,
                                url: article.web_url,
                                date: article.pub_date
                              })} />
                             
                            </Col>
                          </Row>
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
