import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Register from './Register';
import Login from './Login';

export default class Header extends Component {
  reload(){
    window.location.reload();
  }
    render(){
  return (
  <Router>
    <div className="Header">
        <ul>
            <li onClick={() => this.reload()}><Link to ="./Home">Home</Link></li>
            <li><Link to ="./About">About</Link></li>        
            <li className="active"><Link to ="./Login">Log in</Link></li>
            <li className="active2"><Link to ="./Register">Register</Link></li>
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
            <Register/>
          </Route>
        </Switch>
    </div>  
  </Router> 
  );
       }
}
