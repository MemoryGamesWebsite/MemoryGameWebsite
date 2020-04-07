import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Profile from "./profile";

export default class Header extends Component {
  reload() {
    window.location.reload();
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const userLink = (
      <div className="Header">
        <ul>
          <li className="active">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="active2">
            <a href="" onClick={this.logOut.bind(this)}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    );

    const reglog = (
      <div className="Header">
        <li className="active">
          <Link to="./Login">Log in</Link>
        </li>
        <li className="active2">
          <Link to="./Register">Register</Link>
        </li>
      </div>
    );

    return (
      <Router>
        <div className="Header">
          <ul>
            <li onClick={() => this.reload()}>
              <Link to="./Home">Home</Link>
            </li>
            <li>
              <Link to="./About">About</Link>
            </li>
            {localStorage.usertoken ? userLink : reglog}
          </ul>
        </div>

        <div className="active5">
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
