import React, { Fragment } from "react";
import About from "./About";
import Gallery from "./Gallery";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App () {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
    
  );
}

export default App;