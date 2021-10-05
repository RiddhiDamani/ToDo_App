import React, { useState } from "react";

export default function Register({ dispatch }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "REGISTER",
          username: formData.username,
          password: formData.password,
          passwordRepeat: formData.passwordRepeat,
        });
      }}
    >
      <label htmlFor="register-username">Username: </label>
      <input
        type="text"
        name="register-username"
        id="register-username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="register-password">Password: </label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="register-password-confirm">Confirm Password: </label>
      <input
        type="password"
        name="register-password-confirm"
        id="register-password-confirm"
        value={formData.passwordRepeat}
        onChange={(e) =>
          setFormData({ ...formData, passwordRepeat: e.target.value })
        }
      ></input>
      <br></br>
      <br></br>
      <input
        type="submit"
        value="Register"
        disabled={
          formData.username.length === 0 ||
          formData.password.length === 0 ||
          formData.password !== formData.passwordRepeat
        }
      ></input>
    </form>
  );
}
