import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import ToDoList from "../todo/ToDoList.js";
//import CreateToDoItem from "../todo/CreateToDoItem.js";
import { Link } from "react-navi";
import { Container } from "react-bootstrap";

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);

  //   const [state, dispatch] = useReducer(appReducer, {
  //     user: "",
  //     todos: [],
  //   });
  const { user } = state;
  //   const [posts, getPosts] = useResource(() => ({
  //     url: "/posts",
  //     method: "get",
  //   }));

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  //useEffect(getPosts, []);
  // eslint-disable-next-line
  useEffect(getTodos, []);

  //   useEffect(() => {
  //     if (posts && posts.data) {
  //       dispatch({ type: "FETCH_POSTS", posts: posts.data.reverse() });
  //     }
  //   }, [posts]);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data.reverse() });
    }
    // eslint-disable-next-line
  }, [todos]);

  // eslint-disable-next-line
  const { data, isLoading } = todos;

  return (
    <>
      <Container>
        <br />
        {user && (
          <Link href="/todo/create" style={{ marginLeft: "1%" }}>
            Create New ToDo Item
          </Link>
        )}
        <br />
        <br />
        {user && <h3 style={{ marginLeft: "1%" }}>ToDo Lists</h3>}
        {user && isLoading && "ToDos loading..."}{" "}
        <div style={{ marginLeft: "1%" }}>
          <ToDoList />
        </div>
      </Container>
    </>
  );
}
