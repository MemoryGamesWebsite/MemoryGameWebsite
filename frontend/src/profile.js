import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      email: "",
      test: "",
      results: [],
      user_results: [],
      results2: [],
      user_results2: [],
      results3: [],
      user_results3: [],
      errors: {},
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      full_name: decoded.full_name,

      email: decoded.email,

      test: decoded.email,
    });

    axios
      .get("/results")
      .then((response) => {
        const data = response.data;
        this.setState({ results: data });
      })
      .catch(() => {
        alert("ERROR");
      });

    axios
      .get("/results2")
      .then((response) => {
        const data2 = response.data;
        this.setState({ results2: data2 });
      })
      .catch(() => {
        alert("ERROR");
      });

    axios
      .get("/results3")
      .then((response) => {
        const data3 = response.data;
        this.setState({ results3: data3 });
      })
      .catch(() => {
        alert("ERROR");
      });
  }
  //.filter(this.state.test=== result.email)
  displayResults = (results) => {
    return results.map((result) => {
      if (this.state.email == result.email) {
        this.state.user_results.push(result);
        /*  return (
          <div>
            <h4>{result.result}</h4>
          </div>
        );*/
      }
    });
  };

  displayResults2 = (results2) => {
    return results2.map((result2) => {
      if (this.state.email == result2.email) {
        this.state.user_results2.push(result2);

        /* return (
          <div>
            <h4>{result2.level}</h4>
          </div>
        );*/
      }
    });
  };

  displayResults3 = (results3) => {
    return results3.map((result3) => {
      if (this.state.email == result3.email) {
        this.state.user_results3.push(result3);

        /* return (
          <div>
            <h4>{result3.result}</h4>
          </div>
        );*/
      }
    });
  };

  displayAVG = (user_results) => {
    let avg = 0;
    let counter = 0;

    return user_results.map((result) => {
      avg = result.result + avg;
      counter = counter + 1;
      if (user_results.length == counter) {
        return (
          <div>
            <h4>{(avg / counter).toFixed(2)} seconds</h4>
          </div>
        );
      }
    });
  };
  displayAVG2 = (user_results2) => {
    let avg = 0;
    let counter = 0;

    return user_results2.map((result2) => {
      avg = result2.level + avg;
      counter = counter + 1;
      if (user_results2.length == counter) {
        return (
          <div>
            <h4>level {(avg / counter).toFixed(2)}</h4>
          </div>
        );
      }
    });
  };
  displayAVG3 = (user_results3) => {
    let avg = 0;
    let counter = 0;

    return user_results3.map((result3) => {
      avg = result3.result + avg;
      counter = counter + 1;
      if (user_results3.length == counter) {
        return (
          <div>
            <h4>{(avg / counter).toFixed(2)} words</h4>
          </div>
        );
      }
    });
  };

  displayCount = (user_results) => {
    return (
      <div>
        <h4>{this.state.user_results.length / 3} times</h4>
      </div>
    );
  };

  displayMIN = (user_results) => {
    let min = 100000;
    let counter = 0;

    return user_results.map((result) => {
      if (min > result.result) {
        min = result.result;
      }
      counter = counter + 1;
      if (this.state.user_results.length == counter) {
        return (
          <div>
            <h4>{min} seconds</h4>
          </div>
        );
      }
    });
  };

  displayMAX = (user_results2) => {
    let max = 0;
    let counter = 0;

    return user_results2.map((result2) => {
      if (max < result2.level) {
        max = result2.level;
      }
      counter = counter + 1;
      if (this.state.user_results2.length == counter) {
        return (
          <div>
            <h4>level {max}</h4>
          </div>
        );
      }
    });
  };

  displayMAX3 = (user_results3) => {
    let max = 0;
    let counter = 0;

    return user_results3.map((result3) => {
      if (max < result3.result) {
        max = result3.result;
      }
      counter = counter + 1;
      if (this.state.user_results3.length == counter) {
        return (
          <div>
            <h4>{max} words</h4>
          </div>
        );
      }
    });
  };
  displayCount2 = (user_results2) => {
    return (
      <div>
        <h4>{this.state.user_results2.length / 2} times</h4>
      </div>
    );
  };
  displayCount3 = (user_results3) => {
    return (
      <div>
        <h4>{this.state.user_results3.length} times</h4>
      </div>
    );
  };

  render() {
    return (
      <div className="jumbotron bg-white ">
        <div className="ProfileTitle">
          Account Information
        </div> 

        <table className="ProfileID">
          <tbody>
            <tr>
              <td className="ProfileTableAlign">Full Name:</td>
              <td>{this.state.full_name}</td>
            </tr>
            <tr>
              <td className="ProfileTableAlign">Email:</td>
              <td>{this.state.email}</td>
            </tr>
          </tbody>
        </table>
        <table className="ProfileTable">
          <tr>
            <td className="ProfileStatsTitle">GAME 1 STATS</td>
            <td className="ProfileStatsTitle">GAME 2 STATS</td>
            <td className="ProfileStatsTitle">GAME 3 STATS</td>
          </tr>
          <tr>
            <td className="ProfileTableLine">
              <table className="ProfileStats">
                <tbody >
                  <tr>
                    <td>{this.displayResults(this.state.results)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Average Time:</td>
                    <td>{this.displayAVG(this.state.user_results)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Best Time:</td>
                    <td>{this.displayMIN(this.state.user_results)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Times Played:</td>
                    <td>{this.displayCount(this.state.user_results)}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="ProfileTableLine">
              <table className="ProfileStats">
                <tbody>
                  <tr>
                    <td>{this.displayResults2(this.state.results2)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Average Level:</td>
                    <td>{this.displayAVG2(this.state.user_results2)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Highest Level:</td>
                    <td>{this.displayMAX(this.state.user_results2)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Times Played:</td>
                    <td>{this.displayCount2(this.state.user_results2)}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="ProfileTableLine">
              <table className="ProfileStats">
                <tbody>
                  <tr>
                    <td>{this.displayResults3(this.state.results3)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Average words:</td>
                    <td>{this.displayAVG3(this.state.user_results3)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Most words:</td>
                    <td>{this.displayMAX3(this.state.user_results3)}</td>
                  </tr>
                  <tr>
                    <td className="ProfileTableAlign">Times Played:</td>
                    <td>{this.displayCount3(this.state.user_results2)}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>        
      </div>
    );
  }
}

export default Profile;
