import React, { Component } from "react"
import Square from './Square.js';

export default class GameBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            validation:false
        };
    }
    
    renderSquare(i, exactColor)
    {
       
       return <Square index={i} color={true} exactColor={exactColor}/>

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
