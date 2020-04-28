import React, { Component } from "react"
import Square from './Square.js';

export default class Board extends Component{
   
    renderSquare(i, color)
    {
       return <Square index={i} color={color}/>
    }
    render()
    {
        return(
            <div>
                <div className="board-row">
                   {this.renderSquare(0, true)}
                   {this.renderSquare(1, true)}
                   {this.renderSquare(2, false)}
                </div>
                <div className="board-row">
                   {this.renderSquare(3, true)}
                   {this.renderSquare(4, true)}
                   {this.renderSquare(5, true)}
                </div>
                <div className="board-row">
                   {this.renderSquare(6, false)}
                   {this.renderSquare(7, true)}
                   {this.renderSquare(8, false)}
                </div>
            </div>
        )
    }
}
