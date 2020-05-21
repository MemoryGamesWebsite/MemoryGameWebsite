import React, { Component } from 'react';
import Game3Start from './Game3Start.js';
import styles from './mystyle.module.css';

export default class Game3 extends Component {
  handleClick(i)
  {      
  }    

  render(){
    
    return (  
      <div className={styles.align}>
        <h1>Word Memorizing Game</h1>  
        <h3 className={styles.h3}>The purpose of this game is to memorize as much words as possible.</h3>    
          <Game3Start/> 
      </div>
    );
  }
}