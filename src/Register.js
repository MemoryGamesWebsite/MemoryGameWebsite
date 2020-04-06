import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <Route exact path="/register">
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Full Name{" "}
              </label>
              <input
                type="text"
                id="name"
                className="FormField_Input"
                placeholder="Enter your full name"
                name="name"
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password{" "}
              </label>
              <input
                type="password"
                id="password"
                className="FormField_Input"
                placeholder="Enter your full password"
                name="password"
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="FormField_Input"
                placeholder="Enter your full email"
                name="password"
              />
            </div>

            <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up </button>
              <a href="login" className="FormField--Link">
                I'm already member
              </a>
            </div>
          </form>
        </div>
      </Route>
    );
  }
}
/*import React, { Component } from 'react';

class Register extends Component {
    render(){
  return (
    <div>
      <p>Register
      </p>
    </div>
  );
    }
}
export default Register;*/