import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
/*import './Page.css';*/
import About from "./About";
import Page from "./Page.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    );
  }
}
