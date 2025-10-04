import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
//import { useDebounce } from "./hooks/useDebouce";

const useDebounce = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedVal(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedVal;
};

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedVal = useDebounce(inputVal, 200);

  const change = (e) => {
    setInputVal(e.target.value);
    console.log("val changed");
  };

  useEffect(() => {
    console.log("Expensive operation performed");
  }, [debouncedVal]);

  return (
    <div>
      <input type="text" value={inputVal} onChange={change}></input>
    </div>
  );
}

export default App;
