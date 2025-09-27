import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="*" element={<ErrorPage> </ErrorPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <div>
        <Link to="/">Main </Link> |<Link to="/home"> Home</Link>
      </div>
      <Outlet></Outlet>
      <div>Footer | Contact us</div>
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
function ErrorPage() {
  return <>Page not found</>;
}

export default App;
