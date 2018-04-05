import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea } from "../../components/Form";
import { Button } from 'react-bootstrap';
import API from "../../utils/API";
import "./Comments.css";

class Comments extends Component {

  state = {
    name:"",
    text:""
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
    API.getComments()
      .then(res => {
        console.log(res.data);
        this.setState({
          comments: res.data
        })
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // const {name, text} = event.target;
    if (this.state.name && this.state.text){

        console.log(this.state.name);
        console.log(this.state.text);
        this.saveComment({
          name: this.state.name,
          text: this.state.text
        });
      }

  }

  onChange = event => {
    this.setState({
      name:"",
      text:""
    })
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

    <div>
      <a href="#" className="btn btn-lg btn-success" data-toggle="modal" data-target="#commentModal">Add Comments</a>
      <div className="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="commentModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">Add a Comment </h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="post-edit" ref="commentForm">
                <Row>
                  <Col id="name-input">
                    <Input 
                      type="text" 
                      ref="name" 
                      placeholder="Your Name" 
                      value={this.state.name} 
                      onChange={this.changeName.bind(this)}
                      required/>
                  </Col>
                </Row>
                <Row>
                  <Col id="comment-textarea">
                    <TextArea 
                      ref="text" 
                      placeholder="Add your comment here" 
                      value={this.state.text} 
                      onChange={this.changeText.bind(this)}
                      required/>
                  </Col>
                </Row> 
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <Button bsStyle="primary" onClick={this.handleFormSubmit} data-dismiss="modal"
                      >Add Comment
                    </Button>
            </div>
          </div>
        </div>
      </div>
       
      



  </div>
    
         
    );
  }
}

export default Comments;