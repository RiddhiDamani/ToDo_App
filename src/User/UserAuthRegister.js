import React from "react";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Register from "./Register.js";

export default function UserAuthRegister({ user, dispatchUser }) {
  if (user) {
    return (
      <div>
        <Logout user={user} dispatchUser={dispatchUser} />
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <Login dispatchUser={dispatchUser} />
        <br></br>
        <Register dispatchUser={dispatchUser} />
      </div>
    );
  }
}
