import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {List, ListItem} from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import "./Saved.css";

class Saved extends Component {
  state = {
    articles: []
  };


  componentDidMount() {
    this.loadArticles();
  }

  
  //Get saved articles
  loadArticles = () => {
    API.getArticles()
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        })
      })
      .catch(err => console.log(err));
  };

  

  //delete article
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

  
  render() {
    return (
      <div>
        <Row id="saved">  
          <Col size="col-md-8 col-md-offset-2">
            <Jumbotron id="saved-section">
              <h2>Saved Articles</h2>
            </Jumbotron>
            <Container fluid>
              <Col>
                {this.state.articles.length ? (
                  <List>
                    {this.state.articles.map(article => (
                      <ListItem key={article._id}>
                        <Row>
                          <Col size="col-md-10">
                            <h4><a href={article.url} target="_blank">
                              <strong>{article.title}</strong>
                            </a></h4>
                            <h6>Published Date: {article.date}</h6>
                          </Col>
                          <Col size="col-md-2">
                              <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                          </Col>
                        </Row>
                      </ListItem>
                      ))}
                  </List>
                  ) : (
                    <h3>No Saved Articles to Display</h3>
                  )}
              </Col>
            </Container>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Saved;
