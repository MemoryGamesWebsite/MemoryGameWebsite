import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';

export default class Home extends Component {
   reload(){
    window.location.reload();
  }
    render(){
  return (
    <Router>
    <div className="Home">
      <ul>
        <li><Link to ="./Game1">Game1</Link></li>
        <li><Link to ="./Game2">Game2</Link></li>
        <li><Link to ="./Game3">Game3</Link></li>
      </ul>
    </div>
    <div className="Home">
       <Switch>
         <Route path = "/Game1">
           <Game1/>
         </Route>
         <Route path = "/Game2">
           <Game2/>
         </Route>
         <Route path = "/Game3">
           <Game3/>
         </Route>
       </Switch>
    </div>
  </Router>
  );
    }
}