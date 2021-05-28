import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/food/:id">
            <About />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
