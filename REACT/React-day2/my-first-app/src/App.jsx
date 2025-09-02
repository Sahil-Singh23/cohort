import { useEffect, useState } from "react";
import { set } from "zod";

function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);
  }, []);
  return <>{counterVisible ? <Counter></Counter> : null} </>;
}
//mounting, re-rendering, unmounting
//for mounting we use the useEffect hook ,
//lifecycle events
function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter");

  //guard our intervals from re renders
  //is used to mount something to the component
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
// hooks - they hook to life cycle, like use state or use effect
//use effect
//cleanup
//using fetch inside hook
//conditonal rendering
//hot module replacement hmr
