import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./LogIn.css";
import Login from './../../components/login/Login';
import CreateAccount from "./../../components/login/CreateAccount"

class LogIn extends Component {
  state = {
    currentUser: null
  };


  userLoggedIn() {
    const userObj = sessionStorage.getItem("user");
    this.setState({
      currentUser: {
        id: userObj.id,
        username: userObj.user
      }
    })
  }

  render() {
  
    return (
      <div>
        
              { this.state.currentUser
                ? ""
                : <Login callParent={() => this.userLoggedIn()} history={this.props.history}/>
        
              }
    

      </div>

    
    );
  }
}



export default LogIn;
