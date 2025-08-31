import { useState } from "react";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
  console.log("counter");

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;

// use state
// hooks
//use effect
