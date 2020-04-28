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
        <h2>Treciasis zaidimas</h2>        
          <Game3Start/> 
      </div>
    );
  }
}