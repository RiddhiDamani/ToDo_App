import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { StateContext } from "../Contexts";

export default function ToDoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  return (
    <div>
      {todos.map((todo, i) => (
        <ToDoItem {...todo} key={"todo-" + i} todoId={i} />
      ))}
    </div>
  );
}
