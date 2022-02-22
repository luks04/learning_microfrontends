import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth, AuthProvider } from "@enel/module-utilities";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

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
            <a href="/users/profile">Profile</a>
          </li>
          <li>
            <a href="/users/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/users/profile" element={<Profile />}></Route>
          <Route path="/users/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ) : (
    <>
      <div>
        <ul>
          <li>
            <a href="/users/profile">Profile</a>
          </li>
          <li>
            <a href="/users/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/users/profile" element={<Profile />}></Route>
          <Route path="/users/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
