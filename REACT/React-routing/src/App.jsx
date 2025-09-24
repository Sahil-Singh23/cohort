import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Main </Link> |<Link to="/home"> Home</Link>
        </div>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="*" element={<ErrorPage> </ErrorPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return <>Hi there!</>;
}

function Main() {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/home");
    }, 3000);
  }, []);
  return <>Welcome to my website !</>;
}

export default App;
