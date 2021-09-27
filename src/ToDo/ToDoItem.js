import React from "react";

export default function ToDoItem({ title, description }) {
  let date = Date(Date.now());
  const dateCreated = date.toString().slice(0, 25);
  let complete = false;
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <div>{dateCreated}</div>
      <br />
    </div>
  );
}
