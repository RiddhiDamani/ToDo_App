import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import ToDoList from "../todo/ToDoList";
import { Link } from "react-navi";
import AppHeader from "../AppHeader";

export default function ProfilePage({ userID }) {
  const { dispatch } = useContext(StateContext);

  const [todos, getTodos] = useResource(() => ({
    url: `/user/${userID}`,
    method: "get",
  }));

  // eslint-disable-next-line
  useEffect(getTodos, [userID]);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data });
    }
    // eslint-disable-next-line
  }, [todos]);

  const { isLoading } = todos;

  return (
    <>
      <AppHeader />
      <h5> User-Specific Profile Page </h5>
      {isLoading && "Todos loading..."} <ToDoList />
      <br />
      <div>
        <Link href="/">Go Back to Homepage</Link>
      </div>
    </>
  );
}
