import { use, useEffect, useState } from "react";

//Re - learning cleanup, useEffect, learning about dependancy array
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount((count) => count + 1);
  }
  function decrease() {
    setCount2((count) => count - 1);
  }

  return (
    <>
      <Counter count={count} count2={count2}></Counter>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

function Counter({ count, count2 }) {
  useEffect(() => {
    console.log("count has changed");
  }, [count, count2]);
  return (
    <>
      Counter {count}
      Counter {count2}
    </>
  );
}

export default App;
