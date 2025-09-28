import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [cur, setCur] = useState(0);
  const timer = useRef();

  function startClock() {
    timer.current = setInterval(() => {
      setCur((c) => c + 1);
    }, 1000);
  }

  function stopClock() {
    clearInterval(timer.current);
  }

  return (
    <>
      <div>{cur}</div>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  );
}

export default App;
