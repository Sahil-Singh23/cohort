import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebouce";

function App() {
  function sendDataToBackend() {
    console.log("req sent to backend");
    //fetch("xyz.com/search");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <input type="text" onChange={debouncedFn}></input>
    </div>
  );
}

export default App;
