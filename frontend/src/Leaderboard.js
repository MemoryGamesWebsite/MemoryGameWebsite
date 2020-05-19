import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      email: "",
      test: "",
      results: [],
      user_results: [],
      results2: [],
      results3: [],
      errors: {},
    };
  }

  componentDidMount() {
    axios
      .get("/results")
      .then((response) => {
        const data = response.data;
        const sorted = data.sort((a, b) => a.result - b.result);
        this.setState({ results: data });
      })
      .catch(() => {
        alert("ERROR");
      });

    axios
      .get("/results2")
      .then((response) => {
        const data = response.data;
        const sorted = data.sort((a, b) => b.level - a.level);
        this.setState({ results2: data });
      })
      .catch(() => {
        alert("ERROR");
      });

    axios
      .get("/results3")
      .then((response) => {
        const data = response.data;
        const sorted = data.sort((a, b) => b.result - a.result);
        this.setState({ results3: data });
      })
      .catch(() => {
        alert("ERROR");
      });
  }

  //.filter(this.state.test=== result.email)
  displayResults = (results) => {
    let counter = 0;
    return results.map((result) => {
      if (counter < 10) {
        counter++;
        return (
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3>{result.full_name}</h3>
                  </td>
                  <td>
                    <h3>{result.result}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    });
  };

  displayResults2 = (results2) => {
    let counter = 0;
    return results2.map((result2) => {
      if (counter < 10) {
        counter++;
        return (
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3>{result2.full_name}</h3>
                  </td>
                  <td>
                    <h3>{result2.level}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    });
  };

  displayResults3 = (results3) => {
    let counter = 0;
    return results3.map((result3) => {
      if (counter < 10) {
        counter++;
        return (
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3>{result3.full_name}</h3>
                  </td>
                  <td>
                    <h3>{result3.result}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    });
  };
  render() {
    return (
      <div className="jumbotron bg-white ">
        <div className="col-sm-88 text-dark">
          <h1 className="text-center">Game 1 Leaderboard</h1>
        </div>

        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>User</td>
              <td>Result</td>
            </tr>
            <tr>
              <td>{this.displayResults(this.state.results)}</td>
            </tr>
          </tbody>
        </table>

        <div className="col-sm-88 text-dark">
          <h1 className="text-center">Game 2 Leaderboard</h1>
        </div>

        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>User</td>
              <td>Result</td>
            </tr>
            <tr>
              <td>{this.displayResults2(this.state.results2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="col-sm-88 text-dark">
          <h1 className="text-center">Game 3 Leaderboard</h1>
        </div>

        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>User</td>
              <td>Result</td>
            </tr>
            <tr>
              <td>{this.displayResults3(this.state.results3)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
