import React from "react";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Register from "./Register.js";

export default function UserAuthRegister({ user, dispatch }) {
  if (user) {
    return (
      <div>
        <Logout user={user} dispatch={dispatch} />
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <Login dispatch={dispatch} />
        <br></br>
        <Register dispatch={dispatch} />
      </div>
    );
  }
}
