import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const inputref = useRef();
  const focusOnInput = () => {
    inputref.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputref}></input>
      <input type="text"></input>
      <button onClick={focusOnInput}>Submit</button>
    </>
  );
}

export default App;
