import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBuldOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBuldOn: setBuldOn,
        }}
      >
        <LightBulb></LightBulb>
      </BulbContext.Provider>
    </div>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState></BulbState>
      <ToggleBulbState></ToggleBulbState>
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb on" : "Bulb off"} </div>;
}

function ToggleBulbState() {
  const { setBuldOn } = useContext(BulbContext);
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
