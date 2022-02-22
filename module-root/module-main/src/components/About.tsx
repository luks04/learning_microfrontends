import { useAuth } from "@enel/module-utilities";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <div>
      <h2>About</h2>
    </div>
  ) : (
    <Redirect />
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
