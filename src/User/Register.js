import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  const [user, register] = useResource((username, password) => ({
    url: "/users",
    method: "post",
    data: { username, password },
  }));

  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    if (user && user.data) {
      dispatch({ type: "REGISTER", username: user.data.username });
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register(formData.username, formData.password);
      }}
    >
      <label>
        New User? <b> Please Register Below </b>
      </label>
      <br></br>
      <br></br>
      <label htmlFor="register-username">Username: </label>
      <input
        className="registerSpace"
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
        className="registerSpace"
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
