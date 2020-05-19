import React, { Component } from "react";
import styles from "./mystyle.module.css";
import { set } from "mongoose";
import jwt_decode from "jwt-decode";
import { result3 } from "../components/UserFunctions";
const ms = require("pretty-ms");

var randomWords = require("random-words");
var randomInt = require("random-int");
let zodziai = [];
let countRandomClicks = 0;
let time = 5;
let rez = 0;

var timer;

export default class Game3Start extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      email: "",
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.state.email = decoded.email;
    this.state.full_name = decoded.full_name;
  }

  timesubmit = () => {
    const res = {
      result: rez,
      email: this.state.email,
      full_name: this.state.full_name,
    };
    result3(res).then((res) => {
      if (res) {
        console.log("testa");
      }
    });
  };
  reply_click = (clicked_id, artaip) => {
    //document.getElementById(clicked_id).innerHTML = "Hello";
    //alert(document.getElementById(clicked_id).innerHTML);
    if (
      document.getElementById(clicked_id).innerHTML === "Taip" &&
      artaip === true
    ) {
      rez = rez + 2;
      window.alert("Teisingai! (Taip)");
    } else if (
      document.getElementById(clicked_id).innerHTML === "Ne" &&
      artaip === false
    ) {
      rez = rez + 3;
      window.alert("Teisingai! (Ne)");
    } else {
      this.timesubmit();
      clearInterval(timer);
      window.alert("Neteisingai!" + rez);
      rez = 0;
      document.getElementById("3").disabled = false;
      document.getElementById("3").innerHTML = "Žaisti iš naujo";
      document.getElementById("output").className = styles.gameover;
      document.getElementById("output").innerHTML =
        "Žaidimas baigtas - atsakėte neteisingai!";
      document.getElementById("timeris").innerHTML = "";
      document.getElementById("tekstas").innerHTML = "";
      zodziai.forEach((element) => {
        zodziai.pop();
      });
      zodziai.pop();
      countRandomClicks = 0;
    }
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
  };

  setup = () => {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = false;
  };

  random_word = (field, heading) => {
    if (countRandomClicks == 0) {
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
      if (a === 2) {
        //buves zodis
        var nr = randomInt(zodziai.length);
        document.getElementById(field).innerHTML = zodziai[nr];
        artaip = true;
      } else {
        //nebuves zodis
        var i = randomWords();
        let pos = zodziai.indexOf(i);
        while (pos !== -1) {
          i = randomWords();
          pos = zodziai.indexOf(i);
        }
        zodziai.push(i);
        document.getElementById(field).innerHTML = i;
        artaip = false;
      }
      document.getElementById(heading).innerHTML =
        "Ar šis žodis jau buvo tarp tų kuriuos įsiminėte? (įsiminkite ir šį žodį jei ne)";
      document.getElementById("1").disabled = false;
      document.getElementById("2").disabled = false;
      document.getElementById("1").onclick = () =>
        this.reply_click("1", artaip);
      document.getElementById("2").onclick = () =>
        this.reply_click("2", artaip);
    } else {
      i = randomWords();
      let pos = zodziai.indexOf(i);
      while (pos !== -1) {
        i = randomWords();
        pos = zodziai.indexOf(i);
      }
      zodziai.push(i);
      document.getElementById(field).innerHTML = i;

      document.getElementById(heading).innerHTML = "Įsiminkite šį žodį:";
      document.getElementById("1").disabled = true;
      document.getElementById("2").disabled = true;
    }
  };

  startTimer() {
    time = 5;
    document.getElementById("timeris").innerHTML = "00:0" + time;
    timer = setInterval(() => {
      if (time > 0) {
        time = time - 1;
        document.getElementById("timeris").innerHTML = "00:0" + time;
      } else {
        this.random_word("tekstas", "output");
        time = 5;
        document.getElementById("timeris").innerHTML = "00:0" + time;
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>
          <h4>Jums likęs laikas:</h4>
          <h3 id="timeris">00:0{time}</h3>
        </div>
        <div className={styles.align}>
          <p id="output" className={styles.smalltext}>
            Norėdami pradėti žaidimą spauskite "Pradėti".
          </p>
          <p id="tekstas" className={styles.text}>
            {" "}
          </p>
        </div>
        <div className={styles.align}>
          <button disabled="true" id="1" className={styles.button}>
            Taip
          </button>{" "}
          <button disabled="true" id="2" className={styles.button1}>
            Ne
          </button>{" "}
        </div>
        <button
          id="3"
          className={styles.button2}
          onClick={() => this.random_word("tekstas", "output")}
        >
          Pradėti
        </button>{" "}
      </div>
    );
  }
}
