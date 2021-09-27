import React from "react";

export default function Register() {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <label htmlFor="register-username">Username: </label>
      <input
        type="text"
        name="register-username"
        id="register-username"
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="register-password">Password: </label>
      <input
        type="password"
        name="register-password"
        id="register-password"
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="register-password-confirm">Confirm Password: </label>
      <input
        type="password"
        name="register-password-confirm"
        id="register-password-confirm"
      ></input>
      <br></br>
      <br></br>
      <input type="submit" value="Register"></input>
    </form>
  );
}
