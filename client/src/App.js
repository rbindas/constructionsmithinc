import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import Client from "./pages/Client";
import NoMatch from "./pages/NoMatch";
import {Container} from "./components/Grid";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Container fluid>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/ideas" component={Ideas} />
        <Route exact path="/client" component={Client} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;
