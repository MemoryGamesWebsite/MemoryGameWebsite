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
        <h1>Žodžių įsiminimo žaidimas</h1>  
        <h3 className={styles.h3}>Šio žaidimo tikslas - įsiminti kuo daugiau iš eilės einančių žodžių.</h3>
        <h3 className={styles.h3}>Kiekvienam žodžiui įsiminti skiriamos 5 sekundės, o po dviejų įsimintų žodžių</h3>
        <h3 className={styles.h3}>reikia atsakyti ar rodomas žodis jau buvo ar ne.</h3>      
          <Game3Start/> 
      </div>
    );
  }
}