import axios from 'axios';
import React, { Component } from 'react';

class CreateAccountPage extends Component {
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
                history.push('/login');
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
            
            <form onSubmit={this.handleCreate}>
                <h1>Create Account</h1>
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
                        Create Account
                    </button>
                </div>
            </form>
        );
    }
}

export default CreateAccountPage;