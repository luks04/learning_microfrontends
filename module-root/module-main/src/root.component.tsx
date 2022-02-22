import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth, AuthProvider } from "@enel/module-utilities";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <>
      <div>
        <ul>
          <li>
            <a href="/app/">Home</a>
          </li>
          <li>
            <a href="/app/about">About</a>
          </li>
          <li>
            <a href="/app/blog">Blog</a>
          </li>
        </ul>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/app/" element={<Home />}></Route>
          <Route path="/app/about" element={<About />}></Route>
          <Route path="/app/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ) : (
    <>
      <div>
        <ul>
          <li>
            <a href="/app/">Home</a>
          </li>
          <li>
            <a href="/app/about">About</a>
          </li>
          <li>
            <a href="/app/blog">Blog</a>
          </li>
        </ul>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/app/" element={<Home />}></Route>
          <Route path="/app/about" element={<About />}></Route>
          <Route path="/app/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
