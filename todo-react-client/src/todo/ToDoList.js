import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { StateContext } from "../Contexts";

export default function ToDoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  return (
    <div>
      {todos.map((p, i) => (
        <ToDoItem
          {...p}
          title={p.title}
          description={p.description}
          dateCreated={p.dateCreated}
          complete={p.complete}
          dateCompleted={p.dateCompleted}
          userID={p.userID}
          key={"todo-" + i}
          _id={p._id}
        />
      ))}
    </div>
  );
}
