import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game1 from "./Game1/App";
/*import Game22 from './Game22';*/
import Game2 from "./Game2/Game2";
import Game3 from "./Game3/Game3";
import Stopwatch from "./Game2/Stopwatch";
import Game1photo from "./Game1photo.jpg";
import Game2photo from "./game2photo.PNG";
import Game3photo from "./game3photo.PNG";
import { STATES } from "mongoose";

export default class Home extends Component {
  reload() {
    window.location.reload();
  }
  render() {
    return (
      <Router>
        <div className="EmptySpace"></div>
        <div className="Home">
          <ul>
            <div className="GameButtonCard">
              <img className="photo" src={Game2photo} alt="Game1"/>
              <div className="GameButtonContainer">
                <li>
                  <Link to="./Game1" className="LinkStyle">Game1</Link>
                </li>
              </div>
            </div>
          </ul>
          <ul>
            <div className="GameButtonCard">
              <img className="photo" src={Game1photo} alt="Game2" />
              <div className="GameButtonContainer">
                <li>
                  <Link to="./Game2">Game2</Link>
                </li>
              </div>
            </div>
          </ul>
          <ul>
            <div className="GameButtonCard">
              <img className="photo" src={Game3photo} alt="Game3" />
              <div className="GameButtonContainer">
                <li>
                  <Link to="./Game3">Game3</Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="Home">
          <Switch>
            <Route path="/Game1">
              <Game2 />
            </Route>
            <Route path="/Game2">
              <Game1 />
            </Route>
            <Route path="/Game3">
              <Game3 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
