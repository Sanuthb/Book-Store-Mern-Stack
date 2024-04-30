import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_page = () => {
  const [logindetails, setlogindetails] = useState([]);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  function fetchBooks() {
    axios
      .get("http://localhost:5555/login")
      .then((res) => {
        setlogindetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function validate_login() {
    if (logindetails.length === 0) {
      console.log("Login details not available");
      return;
    }

    const user = logindetails.find(
      (login) => login.username === username && login.password === password
    );

    if (user) {
      navigate("/books");
    } else {
      console.log("Invalid username or password");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" className="login-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="button" onClick={validate_login}>
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default Login_page;
