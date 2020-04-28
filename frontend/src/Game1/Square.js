import React, {Component} from 'react'
import Game1 from './Game1.js';
import GameBoard from './GameBoard.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export default class Square extends Component {
    constructor(props) {
        super(props);
        this.changeColor= this.changeColor.bind(this);
        this.state = {
            color: this.props.color,
            index: this.props.index,
            exactColor: this.props.exactColor,
            validation:false
        };
    }
    changeColor() {
     const currentState = this.props.color;
        this.setState({ color: !currentState });
   /* console.log("exactcolor: " + this.props.exactColor);
    console.log("color: " + this.props.color);*/
    if (this.props.exactColor==this.props.color){
        console.log("wrong color selected");
        this.setState({
         validation:true
        });

    }
    };

    returnValidation()
    {
        return this.validation;
    }
    

    render() {
         /*if (this.exactColor==this.color)
           console.log("wrong color selected");*/
      let val = (this.state.validation == true) ?
        <button className="wrongCard"></button>
      : 
      <button
      className={this.state.color ? 'white-card' : 'black-card'}
      onClick={this.changeColor}> </button>

        return (
        <div className="divinline">
           
             {val}
        </div>
        )
  }
}