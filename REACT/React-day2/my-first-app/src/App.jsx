import { use, useEffect, useState } from "react";

//Re - learning cleanup, useEffect, learning about dependancy array
function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <Counter count={count}></Counter>
      <button onClick={increaseCount}>Click</button>
    </div>
  );
}

function Counter(props) {
  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Unmount");
    };
  }, []);

  return <div>Counter {props.count}</div>;
}

export default App;
