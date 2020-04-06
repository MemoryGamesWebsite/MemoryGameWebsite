import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <Route exact path="/login">
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
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
              <button className="FormField__Button mr-20">Log in </button>
              <a href="register" className="FormField--Link">
                I'm not registered
              </a>
            </div>
          </form>
        </div>
      </Route>
    );
  }
}

/*import React, { Component } from 'react';

class Login extends Component {
    render(){
  return (
    <div>
      <p>Log in
      </p>

    </div>
  );
    }
}
export default Login;*/