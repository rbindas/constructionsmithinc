import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import {Container} from "./components/Grid";
import Header from "./components/Header";

const App = () => (
  <Router>
    <Container fluid>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;
