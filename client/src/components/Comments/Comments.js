import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import { Button } from 'react-bootstrap';
import API from "../../utils/API";
import "./Comments.css";

class Comments extends Component {

  state = {
    name:"",
    text:""
  }


  handleFormSubmit = event => {
    event.preventDefault();
    const {name, value} = event.target;
    if (this.state.name && this.state.text)
    console.log(this.state.name);
    console.log(this.state.text);

  }

  changeName = event => {
    const name = event.target.value;
    this.setState({name:name});
  }

  changeText = event => {
    const text = event.target.value;
    this.setState({text:text});
  }

  saveComment = data => {
    API.saveComment(data)
      .then(res => {
        console.log("Comment saved");
      })
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="callout">
     
       <Container fluid id="comments-box">
             
      {/* Submit comment section */}
       
        <div className="callout secondary">
        <h4 className="leave-comment">Add a Comment</h4>
        <form className="post-edit" ref="commentForm" onSubmit={this.processComment}>
          <Row>
          <Col size="col-md-4">
          <input 
            type="text" 
            ref="name" 
            placeholder="Your Name" 
            value={this.state.name} 
            onChange={this.changeName.bind(this)}
            required/>
           </Col>
          </Row>

          <Row>
          <Col size="col-md-4">
          <textarea 
            ref="text" 
            placeholder="Add your comment here" 
            value={this.state.text} 
            onChange={this.changeText.bind(this)}
            required/>
          </Col>
           </Row> 
          <Button bsStyle="primary" onClick={this.handleFormSubmit}
                      >Add Comment
                    </Button>
        </form>
      </div>
     </Container>
     </div>     
    );
  }
}

export default Comments;