import { use, useDebugValue, useEffect, useState } from "react";

//Re - learning cleanup, useEffect, learning about dependancy array
function App() {
  const todos = [
    {
      title: "Hit the gym",
      done: true,
    },
    {
      title: "Write assignements",
      done: false,
    },
    {
      title: "Submit pull request",
      done: true,
    },
  ];

  const todoComp = todos.map((todo, index) => (
    <Card key={index}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h2>{todo.title}</h2>
        <input type="checkbox" checked={todo.done} readOnly />
      </div>
    </Card>
  ));
  return <>{todoComp}</>;
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

function Card1({ children }) {
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
