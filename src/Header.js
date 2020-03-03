import React, { Component } from 'react';

export default class Header extends Component {
    render(){
  return (
    <div className="Header">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a className ="active2" href="#register">Register</a></li>
            <li><a className="active" href="#login">Log in</a></li>
        </ul>
    </div>
  );
    }
}
