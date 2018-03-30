import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ideas from "./pages/Ideas";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import {Container} from "./components/Grid";
import Navbar from "./components/Navbar";



const App = () => (
  <Router>
    <Container fluid>
      <Navbar />
      
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ideas" component={Ideas} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;
