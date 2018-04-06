import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import Client from "./pages/Client";
import LogIn from "./pages/Login";
import ProtectedRoute from "./components/login/protectedRoute";
import NoMatch from "./pages/NoMatch";
import {Container} from "./components/Grid";
import Navbar from "./components/Navbar";
import CreateAccount from "./components/login/CreateAccount";


const App = () => (
  <Router>
    <Container fluid>
     <Navbar /> 

      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/ideas" component={Ideas} />
        <ProtectedRoute exact path="/client" redirectTo="/login" component={Client} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/create" component={CreateAccount} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
   
  </Router>
);

export default App;
