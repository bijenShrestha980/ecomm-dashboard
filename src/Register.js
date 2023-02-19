import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function signUp() {
    let item = { name, password, email };

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  }
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input
          type="text"
          value={name}
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          className="form-control"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={email}
          className="form-control"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Register;
