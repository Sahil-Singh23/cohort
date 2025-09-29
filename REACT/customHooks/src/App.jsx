import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { post } = useFetch("https://jsonplaceholder.typicode.com/todos/5");

  return <div>{post.title}</div>;
}

export default App;
