import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <button onClick={() => setState((c) => c + 1)}>Increase{state}</button>
      <div>{prev}</div>
    </div>
  );
}

export default App;
