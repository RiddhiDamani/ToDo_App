import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";

export default function Login() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleUsername = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const [user, login] = useResource((username, password) => ({
    url: "auth/login",
    method: "post",
    data: { username, password },
  }));

  useEffect(() => {
    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        setLoginFailed(true);
        alert("failed");
      } else {
        setLoginFailed(false);
        console.log(user.data);
        dispatch({
          type: "LOGIN",
          username,
          access_token: user.data.access_token,
        });
      }
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(username, password);
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        className="space"
        value={username}
        onChange={handleUsername}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="login-password">Password:</label>
      <input
        className="space"
        type="password"
        value={password}
        onChange={handlePassword}
        name="login-password"
        id="login-password"
      ></input>
      <br></br>
      <br></br>
      <input
        type="submit"
        value="Login"
        disabled={username.length === 0 || password.length === 0}
      ></input>
      <br></br>
      <br></br>
      {loginFailed && (
        <span style={{ color: "red" }}>Invalid username or password</span>
      )}
    </form>
  );
}
