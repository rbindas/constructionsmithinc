import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import LoginPage from './LoginPage';
import CreateAccountPage from "./CreateAccountPage";
import HomePage from "./HomePage";
import ProtectedRoute from './protectedRoute';
import MembersOnlyPage from "./MembersOnlyPage";
import LoginRequiredPage from './LoginRequiredPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create" component={CreateAccountPage} />
            <Route exact path="/loginrequired" component={LoginRequiredPage} />
            <ProtectedRoute exact path="/membersonly" redirectTo="/loginrequired" component={MembersOnlyPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
