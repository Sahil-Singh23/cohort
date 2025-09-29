import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [curentPost, setCurrentPost] = useState(1);
  const { post, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/" + curentPost
  );

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1st post</button>
      <button onClick={() => setCurrentPost(2)}>2nd post</button>
      <button onClick={() => setCurrentPost(3)}>3rd post</button>
      <button onClick={() => setCurrentPost(4)}>4th post</button>
      <div>{loading ? "loading..." : JSON.stringify(post)} </div>
    </div>
  );
}

export default App;
