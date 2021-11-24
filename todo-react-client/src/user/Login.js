import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import { Form, Button } from "react-bootstrap";
//import { useNavigation } from "react-navi";

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

  // const [user, login] = useResource((username, password) => ({
  //   url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
  //   method: "get",
  // }));

  // useEffect(() => {
  //   if (user && user.isLoading === false && user.data) {
  //     if (user.data.length > 0) {
  //       setLoginFailed(false);
  //       dispatch({ type: "LOGIN", username: user.data[0].username });
  //     } else {
  //       setLoginFailed(true);
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [user]);

  useEffect(() => {
    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        setLoginFailed(true);
        alert("failed");
      } else {
        setLoginFailed(false);
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
    <div>
      <br />
      <br />
      <br />
      <Form
        style={{
          width: "50%",
          marginLeft: "32%",
          marginTop: "10%",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <Form.Group>
          <Form.Label htmlFor="login-username">Enter Username:</Form.Label>
          <Form.Control
            placeholder="Enter Username"
            type="text"
            value={username}
            onChange={handleUsername}
            name="login-username"
            id="login-username"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label htmlFor="login-password">Enter Password:</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={handlePassword}
            name="login-password"
            id="login-password"
          />
          {loginFailed && (
            <Form.Text style={{ color: "red" }}>
              Invalid username or password
            </Form.Text>
          )}
        </Form.Group>
        <br />
        <Button
          variant="primary"
          disabled={username.length === 0 || password.length === 0}
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
