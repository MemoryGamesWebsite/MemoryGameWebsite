import React, { Component } from 'react';
import Board from './Board.js';
import Timer2 from './Timer2.js';

export default class Game1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        start: false,
        validation:false
    };
    this.startButton = this.startButton.bind(this);
}


startButton()
{
  this.setState({
    start : !this.state.start
  });

}
    render(){
    /*  window.addEventListener('beforeunload', function (e) { 
        e.preventDefault(); 
        e.returnValue = ''; 
    }); */
    
      /*let val = (this.props.validation == true)?
      <h4>Pasirinkote neteisingai</h4> : 
       <div><h4>Paspaudus mygtuką start per duotą laiką įsiminkite juodus 
       kvadratėlius. <br/>Kai laikmatis pasibaigs paspauskite ant kvadratėlių
       kurie prieš tai buvo juodi.
     </h4>
     <button onClick={this.startButton}>Start</button>
     { this.state.start? <Timer2/> : null } </div>*/
  return (

    <div>
      <h4>Paspaudus mygtuką start per duotą laiką įsiminkite juodus 
       kvadratėlius. <br/>Kai laikmatis pasibaigs paspauskite ant kvadratėlių
       kurie prieš tai buvo juodi.
     </h4>
     <button onClick={this.startButton}>Start</button>
     { this.state.start? <Timer2/> : null } 
      
    </div>
  );
    }
}
