import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos = [], dispatch }) {
  return (
    <div>
      {todos
        .sort((item1, item2) => (item1.index < item2.index ? 1 : -1))
        .map((todo, i) => (
          <ToDoItem {...todo} key={"todo-" + i} dispatch={dispatch} />
        ))}
    </div>
  );
}
