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
// Lazy loading with Suspense
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function AppWithLazyLoading() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/lazy"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Multiple layouts
function AppWithLayouts() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
