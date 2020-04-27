import React, { Component } from 'react';
import Board from './Board.js';

export default class Game1 extends Component {
    handleClick(i)
    {
        this.setState({
            isWhite:false
        })
    }
    render(){
  return (

    <div>
            <Board/> 
    </div>
  );
    }
}
