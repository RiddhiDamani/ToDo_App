import React from "react";
import { Link } from "react-navi";

export default function AppHeader() {
  return (
    <div>
      <Link href="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "#090560" }}>ToDo App</h1>
      </Link>
    </div>
  );
}
