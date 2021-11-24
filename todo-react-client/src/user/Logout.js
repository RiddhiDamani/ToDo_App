import React, { useContext } from "react";
import { StateContext } from "../Contexts";

export default function Logout() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  //console.log("Inside Logout: ", user);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
      }}
    >
      <label
        style={{
          marginLeft: "1.3%",
        }}
      >
        Logged in as: <b>{user.username}</b>
      </label>
      <input className="space" type="submit" value="Logout"></input>
    </form>
  );
}
