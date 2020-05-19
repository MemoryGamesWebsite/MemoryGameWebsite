import React, { Component } from "react";
import styles from './mystyle.module.css';
import { set } from "mongoose";
 
var randomWords = require('random-words')
var randomInt = require('random-int')
let zodziai = []
let countRandomClicks = 0;
/*Timer'io*/
const timeLimit = 5;
let timePassed = 0;
let timeLeft = timeLimit;
let timer = null;;

const WARNING_THRESHOLD = 3;
const ALERT_THRESHOLD = 1.5;

export default class Game3Start extends Component{

    reply_click = (clicked_id, artaip) => {
        if (document.getElementById(clicked_id).innerHTML === "Taip" && artaip === true) {
            alert("Teisingai! (Taip)");
            clearInterval(timer);            
            timeLeft = timeLimit;
            timePassed = 0;
            this.setCircleDasharray();
            this.setRemainingPathColor(timeLeft);

            this.random_word("tekstas", "output");          
            this.startTimer();
        }
        else if (document.getElementById(clicked_id).innerHTML === "Ne" && artaip === false) {
            alert("Teisingai! (Ne)");
            clearInterval(timer);            
            timeLeft = timeLimit;
            timePassed = 0;
            this.setCircleDasharray();
            this.setRemainingPathColor(timeLeft);

            this.random_word("tekstas", "output");            
            this.startTimer();
        }
        else {
            this.setup_end("atsakėte neteisingai!");
        }
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
    }

    setup_start = () => {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = false;
    }

    setup_end = (priezastis) => {
        clearInterval(timer);
        timeLeft = timeLimit;
        timePassed = 0;
        this.setCircleDasharray();
        this.setRemainingPathColor(timeLeft);
        document.getElementById("timerLabel").innerHTML = this.formatTimeLeft(timeLeft);
        document.getElementById("3").disabled = false;
        document.getElementById("3").innerHTML = "Žaisti iš naujo";
        document.getElementById("output").className = styles.gameover;
        document.getElementById("output").innerHTML = "Žaidimas baigtas - " + priezastis;
        document.getElementById("timerPathRemaining").innerHTML = "";
        document.getElementById("tekstas").innerHTML = "";
        zodziai.forEach(element => {
            zodziai.pop();                
        });
        zodziai.pop();
        countRandomClicks = 0;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = false;
    }

    random_word = (field, heading) => {
        if(countRandomClicks == 0) {
            this.startTimer();
            document.getElementById("3").disabled = true;
            document.getElementById(heading).className = styles.smalltext;
        }        

        countRandomClicks++;
        //document.getElementById("3").innerHTML = "Kitas žodis";
        //isiminti reikia 2 zodziu is eiles (kai %3)
        if (countRandomClicks % 3 === 0) {
            var a = randomInt(2);
            var artaip = false;
            if(a === 2) { //buves zodis
                var nr = randomInt(zodziai.length - 1);
                document.getElementById(field).innerHTML = zodziai[nr];
                artaip = true;
            }
            else { //nebuves zodis
                var i = randomWords();
                let pos = zodziai.indexOf(i);
                while (pos !== -1) {
                    i = randomWords();
                    pos = zodziai.indexOf(i)
                }
                zodziai.push(i); 
                document.getElementById(field).innerHTML = i;
                artaip = false;
            }
            document.getElementById(heading).innerHTML = "Ar šis žodis jau buvo tarp tų kuriuos įsiminėte? (įsiminkite ir šį žodį jei ne)";
            document.getElementById("1").disabled = false;
            document.getElementById("2").disabled = false;
            document.getElementById("1").onclick = () => this.reply_click("1", artaip);
            document.getElementById("2").onclick = () => this.reply_click("2", artaip);
        }
        else {
            i = randomWords();
            let pos = zodziai.indexOf(i);
            while (pos !== -1) {
                i = randomWords();
                pos = zodziai.indexOf(i)
            }
            zodziai.push(i); 
            document.getElementById(field).innerHTML = i;

            document.getElementById(heading).innerHTML = "Įsiminkite šį žodį:";
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
        }

    }

    startTimer() {
        document.getElementById("timerLabel").innerHTML = this.formatTimeLeft(timeLeft);
        timer = setInterval(() => {
            if (timeLeft > 0){
                timePassed = timePassed += 1;
                timeLeft = timeLimit - timePassed;
                document.getElementById("timerLabel").innerHTML = this.formatTimeLeft(timeLeft);
                this.setCircleDasharray();
                this.setRemainingPathColor(timeLeft);
            }
            else if (countRandomClicks % 3 === 0){
                this.setup_end("baigėsi atsakymui skirtas laikas!");
            }
            else {
                this.random_word("tekstas", "output");
                timePassed = 0;
                timeLeft = timeLimit - timePassed;
                document.getElementById("timerLabel").innerHTML = this.formatTimeLeft(timeLeft);
                this.setCircleDasharray();  
                this.setRemainingPathColor(timeLeft);                            
            }
        }, 1000);
    } 

    formatTimeLeft(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    calculateTimeFraction() {
        const rawTimeFraction = timeLeft / timeLimit;
        return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
    }          

    setCircleDasharray() {
        const circleDasharray = `${(
          this.calculateTimeFraction() * 283
        ).toFixed(0)} 283`;
        document
          .getElementById("timerPathRemaining")
          .setAttribute("stroke-dasharray", circleDasharray);
    }

    setRemainingPathColor(timeLeft) {
        if (timeLeft <= ALERT_THRESHOLD) {
            document
                .getElementById("timerPathRemaining")
                .style.color = "red";   
        }
        else if (timeLeft <= WARNING_THRESHOLD) {
          document
            .getElementById("timerPathRemaining")
            .style.color = "orange";
        }
        else if (timeLeft <= timeLimit) {
            document
              .getElementById("timerPathRemaining")
              .style.color = "rgb(65, 184, 131)";
        }
    }

    render()
    { 
        return(            
            <div>                   
                <div className={styles.timer}>
                    <svg className={styles.timer_svg} viewBox="0 0 100 100">
                        <g className={styles.timer_circle}>
                            <circle className={styles.timer_path_elapsed} cx="50" cy="50" r="45" />
                            <path
                                id="timerPathRemaining"
                                stroke-dasharray="283"
                                color="rgb(65, 184, 131)"
                                className={styles.timer_path_remaining}
                                d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
                            ></path>
                        </g>
                    </svg>
                    <span id="timerLabel" className={styles.timer_label}>
                        {this.formatTimeLeft(timeLeft)}
                    </span>
                </div>
                <div className={styles.align}>
                    <p id="output" className={styles.smalltext}>Norėdami pradėti žaidimą spauskite "Pradėti".</p> 
                    <p id="tekstas" className={styles.text}>  </p>   
                </div>
                <div className={styles.align}>
                    <button disabled="true" id="1" className={styles.button} >Taip</button>{' '}
                    <button disabled="true" id="2" className={styles.button1} >Ne</button>{' '} 
                </div>                    
                <button id="3" className={styles.button2} onClick={() => this.random_word("tekstas", "output")}>Pradėti</button>{' '}   
            </div>
        )        
    }


}