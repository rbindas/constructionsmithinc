import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import NoMatch from "./pages/NoMatch";
import {Container} from "./components/Grid";
import Header from "./components/Header";
import NavigationBar from "./components/Navbar";


const App = () => (
  <Router>
    <Container fluid>
      <NavigationBar />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;
