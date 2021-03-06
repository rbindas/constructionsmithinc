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
    text:"",
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
     
      <div>
       
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
                  <Col id="comment-input">
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

        
        <div id="comment-display">
          <div className="panel panel-primary">
            <div className="panel-heading">
                <h4 className="panel-title">Comments</h4>
            </div>
            <div className="panel-body">
              {this.state.comments? (this.state.comments.map(comment => {
              return (
                <div key={comment._id}>
                  <p>{comment.text}</p>
                  <p><strong><i>{comment.name}</i></strong></p>
                  <p style={{textAlign:"center"}}>-------------------------------------------</p>
                 <br />
                </div>
                )
            })):null
            } 
            </div>  
          </div>
        </div>
        <a href="#" id="btn-addcomments" className="btn btn-md btn-success" data-toggle="modal" data-target="#commentModal">Add Comments</a>
    </div>
    
         
    );
  }
}

export default Comments;