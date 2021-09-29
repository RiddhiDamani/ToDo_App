import React from "react";

export default function Logout({ user, setUser }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser("");
      }}
    >
      Logged in as: <b>{user}</b>
      <input className="space" type="submit" value="Logout"></input>
    </form>
  );
}
