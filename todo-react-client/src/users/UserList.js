import React, { useContext } from "react";
import User from "./User";
import { StateContext } from "../Contexts";

export default function UserList() {
  const { state } = useContext(StateContext);
  const { users } = state;

  return (
    <div>
      {users.map((p, i) => (
        <User {...p} userID={p._id} username={p.username} key={"user-" + i} />
      ))}
    </div>
  );
}
