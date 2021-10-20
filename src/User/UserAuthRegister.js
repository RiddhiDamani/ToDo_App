import React, { useContext } from "react";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Register from "./Register.js";
import { StateContext } from "../Contexts.js";

export default function UserAuthRegister() {
  const { state } = useContext(StateContext);
  const { user } = state;

  if (user) {
    return (
      <div>
        <Logout />
      </div>
    );
  } else {
    return (
      <div>
        <Login />
        <hr />
        <Register />
      </div>
    );
  }
}
