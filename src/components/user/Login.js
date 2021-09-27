import React, { useState } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser(username);
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="login-password">Password:</label>
      <input
        type="password"
        name="login-password"
        id="login-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input type="submit" value="Login"></input>
      <br></br>
      <br></br>
      <label>
        New User? <b> Please Register Below </b>
      </label>
    </form>
  );
}
