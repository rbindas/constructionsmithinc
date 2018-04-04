import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { update } from './withUser';

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
            history.push('/');
            this.callParent(user.data);
        }).catch(err => {  
            console.log(err);
            this.setState({
                error: err === 401 ? 'Invalid username or password.' : err.message
            });
        });
    }
    render() {
        const { error } = this.state;

        return (
            <form onSubmit={this.handleLogin} style={{marginTop: "150px"}}>
                <h1>Log In</h1>
                {error &&
                    <div>
                        {error}
                    </div>
                }
                <div>
                    <input
                        name="username"
                        onChange={this.handleInputChanged}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        onChange={this.handleInputChanged}
                    />
                </div>
                <div>
                    <button type="submit">
                        Log In
                    </button>
                </div>
                <p>
                    or
              </p>
                <p>
                    <Link to="/create">
                        Register
                    </Link>
                </p>
            </form>)
    
    }
}

export default Login;