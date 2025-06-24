import { useRef } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Nested Routes under /neet */}
          <Route path="/neet" element={<Layout />}>
            <Route
              path="online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route index element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Layout Component for shared navigation
function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/neet/online-coaching-class-11">Class 11 Program</Link> |{" "}
        <Link to="/neet/online-coaching-class-12">Class 12 Program</Link>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

// Error Page
function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Sorry, Page Not Found!</p>
    </div>
  );
}

// Landing Page
function Landing() {
  const inputRef = useRef();
  function focusOnInput() {
    inputRef.current.focus();
  }
  return (
    <>
      <div>Welcome to Allen</div>
      Signup
      <input ref={inputRef} type="text" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
      <button onClick={focusOnInput}>Submit</button>
    </>
  );
}

// Class 11 Program Page
function Class11Program() {
  return <div>Welcome to Class 11</div>;
}

// Class 12 Program Page
function Class12Program() {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/");
  }

  return (
    <div>
      Welcome to Class 12
      <button onClick={handleRedirect}>Redirect to Home</button>
    </div>
  );
}

export default App;
