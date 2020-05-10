import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      email: "",
      errors: {},
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      full_name: decoded.full_name,

      email: decoded.email,
    });
  }

  render() {
    return (
      <div className="jumbotron bg-white ">
        <div className="col-sm-88 text-dark">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>{this.state.full_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.state.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;