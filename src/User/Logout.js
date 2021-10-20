import React, { useContext } from "react";
import { StateContext } from "../Contexts";

export default function Logout() {
  const { state, dispatch } = useContext(StateContext);

  const { user } = state;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "CLEAR_TODOLIST" });
      }}
    >
      Logged in as: <b>{user}</b>
      <input className="space" type="submit" value="Logout"></input>
    </form>
  );
}
