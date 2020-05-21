import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { login } from "./components/UserFunctions";
import { withRouter } from "react-router";
import styles from './webstyle.module.css';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/profile`);
        window.location.reload();
      }
    });
  }
  render() {
    return (      
      <Route exact path="/login">              
        <div className="FormCenter">
          <div className="FormTitle">
            User Login
          </div>
          <form className="FormField" onSubmit={this.onSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                className="FormField__Input"
                placeholder="Enter your  email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password{" "}
              </label>
              <input
                type="password"
                className="FormField__Input"
                placeholder="Enter your  password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>

            <div className="FormField">
              <button type="submit" className="FormField__Button">
                Log in{" "}
              </button>
              <br></br>
              <a href="register" className="FormField__Link">
                I'm not registered
              </a>
            </div>
          </form>
        </div>
      </Route>
    );
  }
}
export default withRouter(Login);
