import React, { useState } from "react";

export default function Login({ dispatch }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

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
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password"></input>
      <br></br>
      <br></br>
      <input
        type="submit"
        value="Login"
        disabled={formData.username.length === 0}
      ></input>
      <br></br>
      <br></br>
      <label>
        New User? <b> Please Register Below </b>
      </label>
    </form>
  );
}
