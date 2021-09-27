import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ lists = [] }) {
  return (
    <div>
      <input type="checkbox" id="" name="" value="" />
      {lists.map((l, i) => (
        <ToDoItem {...l} key={"list-" + i} />
      ))}
    </div>
  );
}
