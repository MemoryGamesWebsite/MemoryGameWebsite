import React, { Component, useState, useEffect } from "react";
import styles from './mystyle.module.css';

import { STATES } from "mongoose";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { result3 } from "../components/UserFunctions";
import { decode } from "jsonwebtoken";
 
var randomWords = require('random-words')
var randomInt = require('random-int')
let zodziai = []
let countRandomClicks = 0;
let isimintiZodziai = 0;
/*Timer'io*/
const timeLimit = 5;
let timePassed = 0;
let timeLeft = timeLimit;
let timer = null;
let timeOut = null;

const WARNING_THRESHOLD = 3;
const ALERT_THRESHOLD = 1.5;

export default function Game3Start(){  

    const [count, setCount] = useState(0);
    const [email, setEmail] = useState();
    const [fullname, setFullname] = useState();

    const token = localStorage.usertoken;

    useEffect(() => {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        setEmail(decoded.email);
        setFullname(decoded.full_name);
    }, []);

    const wordssubmit = () => {
        const res = {
          result: isimintiZodziai,
          email: email,
          full_name: fullname,
        };
    
        result3(res).then((res) => {
          if (res) {
            console.log("testa");
          }
        });
    };

    const reply_click = (clicked_id, artaip) => {
        if (document.getElementById(clicked_id).innerHTML === "Yes" && artaip === true) {
            document.getElementById("output").className = styles.smalltextcorrect;
            document.getElementById("output").innerHTML = "Correct! This word has already been shown before.";
            isimintiZodziai = zodziai.length;             
            clearInterval(timer);
            timeLeft = timeLimit;
            timePassed = 0;
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
            timeOut = setTimeout(() => {              
                random_word("tekstas", "output");
                startTimer();                
            },3000);
        }
        else if (document.getElementById(clicked_id).innerHTML === "No" && artaip === false) {
            document.getElementById("output").className = styles.smalltextcorrect;
            document.getElementById("output").innerHTML = "Correct! This word hasn't been shown before.";
            isimintiZodziai = zodziai.length;            
            clearInterval(timer);
            timeLeft = timeLimit;
            timePassed = 0;
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
            timeOut = setTimeout(() => {              
                random_word("tekstas", "output");
                startTimer();                
            },3000);
        }
        else {            
            setup_end("your answer is incorrect!");
        }
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
    }

    const setup_start = () => {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = false;
    }

    const setup_end = (priezastis) => {
        clearInterval(timer);
        timeLeft = timeLimit;
        timePassed = 0;
        setCircleDasharray();
        setRemainingPathColor(timeLeft);        
        wordssubmit();
        document.getElementById("timerLabel").innerHTML = formatTimeLeft(timeLeft);
        document.getElementById("3").disabled = false;
        document.getElementById("3").innerHTML = "Play again";
        document.getElementById("output").className = styles.gameover;
        document.getElementById("output").innerHTML = "Game over - " + priezastis;
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

    const random_word = (field, heading) => {
        if(countRandomClicks == 0) {
            startTimer();
            document.getElementById("3").disabled = true;
            document.getElementById(heading).className = styles.smalltext;
        }        

        countRandomClicks++;
        //document.getElementById("3").innerHTML = "Kitas žodis";
        //isiminti reikia 2 zodziu is eiles (kai %3)
        if (countRandomClicks % 3 === 0) {
            var a = randomInt(1);
            var artaip = false;
            if(a === 1) { //buves zodis
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
            document.getElementById(heading).innerHTML = "Was this word shown before? (If not - memorize this word!)";
            document.getElementById("1").disabled = false;
            document.getElementById("2").disabled = false;
            document.getElementById("1").onclick = () => reply_click("1", artaip);
            document.getElementById("2").onclick = () => reply_click("2", artaip);
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

            document.getElementById(heading).className = styles.smalltext;
            document.getElementById(heading).innerHTML = "Memorize this word:";
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
        }

    }

    const startTimer = () => {
        document.getElementById("timerLabel").innerHTML = formatTimeLeft(timeLeft);
        timer = setInterval(() => {
            if (timeLeft > 0){
                timePassed = timePassed += 1;
                timeLeft = timeLimit - timePassed;
                document.getElementById("timerLabel").innerHTML = formatTimeLeft(timeLeft);
                setCircleDasharray();
                setRemainingPathColor(timeLeft);
            }
            else if (countRandomClicks % 3 === 0){
                setup_end("time is up!");
            }
            else {
                random_word("tekstas", "output");
                timePassed = 0;
                timeLeft = timeLimit - timePassed;
                document.getElementById("timerLabel").innerHTML = formatTimeLeft(timeLeft);
                setCircleDasharray();  
                setRemainingPathColor(timeLeft);                            
            }
        }, 1000);
    } 

    const formatTimeLeft = (time) =>  {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    const calculateTimeFraction = () =>  {
        const rawTimeFraction = timeLeft / timeLimit;
        return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
    }          

    const setCircleDasharray = () =>  {
        const circleDasharray = `${(
          calculateTimeFraction() * 283
        ).toFixed(0)} 283`;
        document
          .getElementById("timerPathRemaining")
          .setAttribute("stroke-dasharray", circleDasharray);
    }

    const setRemainingPathColor = () =>  {
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
                    {formatTimeLeft(timeLeft)}
                </span>
            </div>
            <div className={styles.align}>
                <p id="output" className={styles.smalltext}>Press "Start" to begin the game</p>
                <p id="tekstas" className={styles.text}>  </p>
            </div>
            <div className={styles.align}>
                <button disabled="true" id="1" className={styles.button} >Yes</button>{' '}
                <button disabled="true" id="2" className={styles.button1} >No</button>{' '}
            </div>
            <button id="3" className={styles.button2} onClick={() => random_word("tekstas", "output")}>Start</button>{' '}
        </div>
    )        



}