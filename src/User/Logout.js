import React from "react";

export default function Logout({ user, dispatch }) {
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
