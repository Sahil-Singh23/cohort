import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "hit the gym",
      done: false,
    },
  ]);

  function addTodo() {
    setCount(count + 1);
    setTodo(todos.push);
  }
  return (
    <>
      <button onClick={addTodo}>Counter {count}</button>
    </>
  );
}

export default App;
