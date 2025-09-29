import { createContext, useContext, useState } from "react";
import "./App.css";

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBuldOn] = useState(true);
  return (
    <>
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBuldOn: setBuldOn,
        }}
      >
        {children}
      </BulbContext.Provider>
    </>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <LightBulb></LightBulb>
      </BulbProvider>
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
