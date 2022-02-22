import { useAuth } from "@enel/module-utilities";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const { login, logout, loggedIn } = useAuth();

  return loggedIn ? (
    <>
      <h2>Welcome</h2>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    //console.log(token);
    if (token) {
      console.log(">>> Token exists");
    } else {
      navigate("/app/");
    }
  }, []);
  return <h1>Not auth</h1>;
}
