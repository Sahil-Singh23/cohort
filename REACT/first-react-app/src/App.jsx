import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state, setState] = useState(Array(9).fill(null));

  function onSquareClick(i) {
    const newArr = state.slice();
    newArr[i] = "x";
    setState(newArr);
  }
  return (
    <>
      <div className="board-row">
        <Square count={state[0]} onClick={() => onSquareClick(0)}></Square>
        <Square count={state[1]} onClick={() => onSquareClick(1)}></Square>
        <Square count={state[2]} onClick={() => onSquareClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square count={state[3]} onClick={() => onSquareClick(3)}></Square>
        <Square count={state[4]} onClick={() => onSquareClick(4)}></Square>
        <Square count={state[5]} onClick={() => onSquareClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square count={state[6]} onClick={() => onSquareClick(6)}></Square>
        <Square count={state[7]} onClick={() => onSquareClick(7)}></Square>
        <Square count={state[8]} onClick={() => onSquareClick(8)}></Square>
      </div>
    </>
  );
}
function Square(props) {
  return (
    <>
      <button className="button" onClick={props.onClick}>
        {props.count}
      </button>
    </>
  );
}

export default App;
