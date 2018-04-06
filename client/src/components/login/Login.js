import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { update } from './withUser';
import { Col, Row, Container } from "../../components/Grid"; 
import { Input } from "../../components/Form";
import { Button } from 'react-bootstrap';


class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: null,
         password: null
      }
      this.callParent = this.props.callParent;
   }
    
   handleInputChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
   }

   handleLogin = (event) => {
      event.preventDefault();

      const { username, password } = this.state;
      const { history } = this.props;

      axios.post('/api/auth', {
         username,
         password
         }).then(user => {
            update(user.data);
            history.push('/client');
            this.callParent(user.data);
         }).catch(err => {  
            console.log(err);
            this.setState({
               error: 'Invalid username or password.' 
            });
         });
      }


   render() {
      const { error } = this.state;

      return (
         <div style={{marginTop: "175px"}} >
            <h1>Welcome Back!</h1>
            <Container fluid id="login-box">
               <Row>
                  <Col size="col-md-4 col-md-offset-4" id="user-inputs">
                  <form onSubmit={this.handleLogin} style={{marginTop: "30px"}}>
                     <h3>Log In</h3>
                     {error &&
                        <div>
                           {error}
                        </div>
                     }

                     <div>
                        <Input
                           name="username"
                           onChange={this.handleInputChanged}
                           placeholder="Client's username"
                        />
                     </div>
                     <div>                   
                        <Input
                           name="password"
                           type="password"
                           onChange={this.handleInputChanged}
                           placeholder="Client's password"
                        />
                     </div>
                     <div>
                       <Button type="submit" bsStyle="primary">Log In</Button> 
                     </div>
                     <br />
                     <p>or
                     </p>
                     <h4>
                        <Link to="/create">
                           Register
                        </Link>
                     </h4>
                  </form>
               </Col>   
            </Row>
         </Container>
            
        </div>)
    
    }
}

export default Login;