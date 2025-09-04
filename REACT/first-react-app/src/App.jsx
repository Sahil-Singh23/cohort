import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function onSquareClick(i) {
    if (state[i] || calculateWinner(state)) return;
    const newArr = state.slice();

    if (xIsNext) {
      newArr[i] = "x";
    } else {
      newArr[i] = "0";
    }
    setXIsNext(!xIsNext);
    setState(newArr);
  }
  const winner = calculateWinner(state);
  let status = winner
    ? `Winner is ${winner}`
    : `Next player is ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div>{status}</div>
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

function calculateWinner(Squares) {
  const winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winArray.length; i++) {
    const [a, b, c] = winArray[i];
    if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
      return Squares[a];
    }
  }
  return null;
}

export default App;
