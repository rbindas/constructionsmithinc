import React from 'react';
import { Link } from 'react-router-dom';
import { withUser } from './withUser';

const HomePage = (props) => (
    
    <div>
    {
        props.user 
        ? <span>Hey {props.user.username}</span>
        : <span>You need to <Link to="/login">Login</Link>, dork.</span>

    }
    </div>
);

export default withUser(HomePage);