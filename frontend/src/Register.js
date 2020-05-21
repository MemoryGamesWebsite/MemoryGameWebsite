import React, { Component } from "react";

import { register } from "./components/UserFunctions";
import { withRouter } from "react-router";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      password: "",
      email: "",
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

    const newUser = {
      full_name: this.state.full_name,
      password: this.state.password,
      email: this.state.email,
    };

    register(newUser).then((res) => {
      this.props.history.push(`/Login`);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="FormCenter">
            <div className="FormTitle">
              Register
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="FormField">                
                <label className="FormField__Label" htmlFor="name">
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  className="FormField__Input"
                  placeholder="Enter your full name"
                  name="full_name"
                  value={this.state.full_name}
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
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  Email{" "}
                </label>
                <input
                  type="email"
                  className="FormField__Input"
                  placeholder="Enter your full email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up </button>
                <br></br>
                <a href="login" className="FormField__Link">
                  I'm already member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);