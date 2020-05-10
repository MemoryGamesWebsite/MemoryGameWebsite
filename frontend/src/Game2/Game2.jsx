import React, { Component, useState, useEffect } from "react";
import Board from "./board";
import Stopwatch from "./Stopwatch";
import initializeDeck from "./deck";
import { STATES } from "mongoose";

export default function Game2() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [test, setTest] = useState();
  const [seconds, setSeconds] = useState(0);

  const button = document.querySelector("button");

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  const getseconds = () => {
    return ("0" + (seconds % 60)).slice(-2);
  };
  const getminutes = () => {
    return Math.floor(seconds / 60);
  };

  const timer = () => {
    button.disabled = true;
    setTest(
      setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000)
    );
    setFlag(true);
  };
  const stoptimer = () => {
    clearInterval(test);
  };

  const handleClick = (id) => {
    if (flag == false) {
    } else {
      setDisabled(true);
      if (flipped.length === 0) {
        setFlipped([id]);
        setDisabled(false);
      } else {
        if (sameCardClicked(id)) return;
        setFlipped([flipped[0], id]);
        if (isMatch(id)) {
          setSolved([...solved, flipped[0], id]);
          resetCards();
          setCount(count + 1);

          if (count == 7) {
            stoptimer();
            const laikas = seconds;
            window.alert("Zaidimas baigtas per: " + seconds + "s");
          }
        } else {
          setTimeout(resetCards, 500);
        }
      }
    }
  };

  const sameCardClicked = (id) => flipped.includes(id);
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  {
    return (
      <div>
        <h2 color-black> Memory Match</h2>
        <h1>
          {getminutes()}:{getseconds()}
        </h1>
        <button onClick={timer}>start</button>;
        <Board
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
        />
      </div>
    );
  }
}
