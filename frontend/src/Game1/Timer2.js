import * as React from "react";
import { render } from "react-dom";
import Board from './Board.js';
import GameBoard from './GameBoard.js';


export default function Timer2() {
  const [counter, setCounter] = React.useState(3);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  let isZero = (counter == 0) ?
   <GameBoard/> : <Board/>

  return (
    <div>
      <div>Time: {counter}</div>
       {isZero}
    </div>
  );
}