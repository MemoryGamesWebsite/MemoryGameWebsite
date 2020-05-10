import React, { Component } from "react";
import styles from './mystyle.module.css';
 
var randomWords = require('random-words')
var randomInt = require('random-int')
let zodziai = []
let countRandomClicks = 0;


export default class Game3Start extends Component{

    reply_click = (clicked_id, artaip) => {
        //document.getElementById(clicked_id).innerHTML = "Hello";
        //alert(document.getElementById(clicked_id).innerHTML);
        if (document.getElementById(clicked_id).innerHTML === "Taip" && artaip === true) {
            alert("Teisingai! (Taip)");
        }
        else if (document.getElementById(clicked_id).innerHTML === "Ne" && artaip === false) {
            alert("Teisingai! (Ne)");
        }
        else {
            alert("Neteisingai!");
        }
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = false;
    }

    setup = () => {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = false;
    }

    random_word = (field, heading) => {
        countRandomClicks++;
        document.getElementById("3").innerHTML = "Kitas žodis";
        //isiminti reikia 2 zodziu is eiles (kai %3)
        if (countRandomClicks % 3 === 0) {
            var a = randomInt(2);
            var artaip = false;
            if(a === 2) { //buves zodis
                var nr = randomInt(zodziai.length);
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
            document.getElementById("3").disabled = true;
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
            document.getElementById("3").disabled = false;
        }

    }
    react_yes = () => {      
    }

    render()
    { 
        return(
            <div>
                <div className={styles.align}>
                    <p id="output" >Norėdami pradėti žaidimą spauskite "Pradėti".</p> 
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