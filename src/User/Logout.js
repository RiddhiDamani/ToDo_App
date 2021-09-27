import React from "react";

export default function Logout({ user, setUserState, setToDos }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUserState("");
        setToDos([]);
      }}
    >
      Logged in as: <b>{user}</b>
      <input className="space" type="submit" value="Logout"></input>
    </form>
  );
}
