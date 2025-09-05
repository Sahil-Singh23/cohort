import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const prev_move = history[history.length - 1];

  function handelPlay(nextSquares) {}

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={prev_move} onPlay={handelPlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function Board(props) {
  const [state, setState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (state[i] || calculateWinner(state)) return;
    const newArr = state.slice();
    if (xIsNext) {
      newArr[i] = "x";
    } else {
      newArr[i] = "O";
    }

    setXIsNext(!xIsNext);
    setState(newArr);
  }
  const winner = calculateWinner(state);
  const isDraw = !winner && state.every((cell) => cell !== null);
  let status = winner
    ? `Winner is ${winner}`
    : isDraw
    ? "It's a Draw!"
    : `Next player is ${xIsNext ? "X" : "O"}`;

  function resetBoard() {
    setTimeout(() => {
      setXIsNext(true);
      setState(Array(9).fill(null));
    }, 100);
  }
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Squares val={state[0]} onSquareClick={() => handleClick(0)}></Squares>
        <Squares val={state[1]} onSquareClick={() => handleClick(1)}></Squares>
        <Squares val={state[2]} onSquareClick={() => handleClick(2)}></Squares>
      </div>
      <div className="board-row">
        <Squares val={state[3]} onSquareClick={() => handleClick(3)}></Squares>
        <Squares val={state[4]} onSquareClick={() => handleClick(4)}></Squares>
        <Squares val={state[5]} onSquareClick={() => handleClick(5)}></Squares>
      </div>
      <div className="board-row">
        <Squares val={state[6]} onSquareClick={() => handleClick(6)}></Squares>
        <Squares val={state[7]} onSquareClick={() => handleClick(7)}></Squares>
        <Squares val={state[8]} onSquareClick={() => handleClick(8)}></Squares>
      </div>
      <br />
      <div>
        <button onClick={resetBoard}>Reset Board</button>
      </div>
    </>
  );
}
function Squares(props) {
  return (
    <>
      <button className="button" onClick={props.onSquareClick}>
        {props.val}
      </button>
    </>
  );
}
function calculateWinner(squares) {
  let winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < winArray.length; i++) {
    const [a, b, c] = winArray[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
