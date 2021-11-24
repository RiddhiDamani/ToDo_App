import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import ToDoList from "../todo/ToDoList.js";
import { Link } from "react-navi";
import { Container } from "react-bootstrap";

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [todos, getTodos] = useResource(() => ({
    url: "/todo",
    method: "get",
    headers: { Authorization: `${user.access_token}` },
  }));

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [user.access_token]);

  useEffect(() => {
    if (todos && todos.isLoading === false && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data.todos });
    }
    // eslint-disable-next-line
  }, [todos]);

  // eslint-disable-next-line
  const { data, isLoading } = todos;

  return (
    <>
      <Container>
        <br />
        {user.username && (
          <Link href="/todo/create" style={{ marginLeft: "1%" }}>
            Create New ToDo Item
          </Link>
        )}
        <br />
        <br />
        {user.username && <h3 style={{ marginLeft: "1%" }}>ToDo Lists</h3>}
        {user.username && isLoading && "ToDos loading..."}{" "}
        <div style={{ marginLeft: "1%" }}>
          <ToDoList />
        </div>
      </Container>
    </>
  );
}
