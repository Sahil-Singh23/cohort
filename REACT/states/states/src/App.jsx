import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <LightBulb></LightBulb>
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBuldOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn}></BulbState>
      <ToggleBulbState setBuldOn={setBuldOn}></ToggleBulbState>
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb on" : "Bulb off"} </div>;
}

function ToggleBulbState({ setBuldOn }) {
  function toggle() {
    setBuldOn((c) => !c);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
