import React, { useContext } from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import { StateContext } from "../Contexts.js";

export default function UserAuthRegister() {
  const Logout = React.lazy(() => import("./Logout"));
  const { state } = useContext(StateContext);
  const { user } = state;

  if (user.username) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <hr />
        <Register />
      </>
    );
  }
}
