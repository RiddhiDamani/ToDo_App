import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos = [], dispatch }) {
  return (
    <div>
      {todos.map((todo, i) => (
        <ToDoItem {...todo} index={i} key={"todo-" + i} dispatch={dispatch} />
      ))}
    </div>
  );
}
