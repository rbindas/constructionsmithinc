import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import { Button, FormControl } from 'react-bootstrap';
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
        console.log("load comments results", res.data);
        this.setState({
          comments: res.data
        }, function(){
            console.log("state updated", this.state.comments);
        })
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    // const {name, text} = event.target;
    if (this.state.name && this.state.text){

        console.log(this.state.name);
        console.log(this.state.text);
        await this.saveComment({
          name: this.state.name,
          text: this.state.text
        })
            console.log("now running load comments");
            this.loadComments()    

      }

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
<<<<<<< HEAD
     

      <div>
       
      <a href="#" id="btn-addcomments" className="btn btn-lg btn-success" data-toggle="modal" data-target="#commentModal">Add Comments</a>
=======
    
    <div>
        <div>
          {this.state.comments? (this.state.comments.map(comment => {
            return (
              <div key={comment._id}>
                <p>{comment.name}</p>
                <p>{comment.text}</p>
              </div>
              )
          })):null
          } 
          
        </div>

      <a className="btn btn-lg btn-success" data-toggle="modal" data-target="#commentModal">Add Comments</a>
>>>>>>> bb0f07faaefa4ea3d1cc9a14cc813e1e798e3145

      <div className="modal fade" id="commentModal" tabIndex="-1" role="dialog" aria-labelledby="commentModal" aria-hidden="true">
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
                      name="name" 
                      placeholder="Your Name" 
                      value={this.state.name} 
                      onChange={event => this.changeName(event)}
                      required/>
                  </Col>
                </Row>
                <Row>
                  <Col id="comment-textarea">
                    <FormControl 
                      type="text" 
                      bsSize="large"
                      placeholder="Add your comment here" 
                      value={this.state.text} 
                      onChange={event => this.changeText(event)}
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

        <div>
          {this.state.comments? (this.state.comments.map(comment => {
            return (
              <div id="comment-textarea" key={comment._id}>
                <p><strong>{comment.name}</strong></p>
                <p>{comment.text}</p>
              </div>
              )
          })):null
          } 
          
        </div>
    </div>
    
         
    );
  }
}

export default Comments;