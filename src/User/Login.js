import React, { useState, useContext } from "react";
import { StateContext } from "../Contexts";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  const { dispatch } = useContext(StateContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN", username: formData.username });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        className="space"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="login-password">Password:</label>
      <input
        className="space"
        type="password"
        name="login-password"
        id="login-password"
      ></input>
      <br></br>
      <br></br>
      <input
        type="submit"
        value="Login"
        disabled={formData.username.length === 0}
      ></input>
      <br></br>
      <br></br>
    </form>
  );
}
