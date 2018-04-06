import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid"; 
import { Input } from "../../components/Form";
import { Button } from 'react-bootstrap';


class CreateAccount extends Component {
    state = {
        username: null,
        password: null,
        error: null
    }
    handleInputChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleCreate = (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const { history } = this.props;

        this.setState({
            error: null
        });
    
        if (!username || !password) {
            this.setState({
                error: 'A username and password is required.'
            });
            return;
        }

        axios.post('/api/users', {
            username,
            password
        })
            .then(user => {
                history.push('/client');
            })
            .catch(err => {

                this.setState({
                    error: err.response.data.message || err.message
                });
            });
    }
    render() {
        const { error } = this.state;

        return (
            <div style={{marginTop: "175px"}}>
            <h1>Welcome to Construction Smith Inc!</h1>

            <Container fluid id="registration-box">
               <Row>
                  <Col size="col-md-4 col-md-offset-4" id="user-register">
                    <form onSubmit={this.handleCreate}>
                        <h3>Create New Account</h3>
                            {error &&
                            <div>
                                {error}
                             </div>
                            }
                        <div>
                            <Input
                                name="username"
                                onChange={this.handleInputChanged}
                                placeholder="Create a new username"
                            />
                        </div>
                        <div>
                            <Input
                                name="password"
                                type="password"
                                onChange={this.handleInputChanged}
                                placeholder="Create a password"
                            />
                        </div>
                        <div>
                            <Button type="submit" bsStyle="success">
                                Create Account
                            </Button>
                        </div>
                    </form>
                     </Col>   
            </Row>
         </Container>
            
        </div>
        );
    }
}

export default CreateAccount;