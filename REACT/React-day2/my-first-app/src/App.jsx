import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}
//mounting, re-rendering, unmounting
//for mounting we use the useEffect hook ,
//lifecycle events
function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter");

  //guard our intervals from re renders
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("mounted");
  }, []); // dependacny array

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
