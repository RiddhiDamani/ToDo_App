import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { StateContext } from "../Contexts";

export default function ToDoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  return (
    <div>
      {todos
        .sort((item1, item2) => (item1.id < item2.id ? 1 : -1))
        .map((todo, i) => (
          <ToDoItem {...todo} key={"todo-" + i} />
        ))}
    </div>
  );
}
