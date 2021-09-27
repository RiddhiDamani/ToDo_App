import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ lists = [] }) {
  return (
    <div>
      {lists.map((l, i) => (
        <ToDoItem {...l} key={"list-" + i} />
      ))}
    </div>
  );
}
