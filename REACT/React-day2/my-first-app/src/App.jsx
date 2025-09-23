import { use, useDebugValue, useEffect, useState } from "react";

//Re - learning cleanup, useEffect, learning about dependancy array
function App() {
  return (
    <>
      <Card>
        <h2>Card one</h2>
        <p>Gold mine, kodi nani neko</p>
      </Card>
      <Card>
        <h2>Another card</h2>
        <p>Baka ka omyera</p>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default App;
