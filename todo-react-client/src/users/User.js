import React from "react";
import { Link } from "react-navi";

export default function User({ userID, username }) {
  return (
    <div>
      <Link href={`${userID}`}> {username} </Link>
      <br></br>
    </div>
  );
}
