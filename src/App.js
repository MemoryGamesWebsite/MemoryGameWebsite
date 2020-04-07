import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
/*import './Page.css';*/
import About from "./About";
import Page from "./Page.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
