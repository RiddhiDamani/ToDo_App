import React, { useReducer, useEffect } from "react";
import AppHeader from "./AppHeader.js";
import UserAuthRegister from "./User/UserAuthRegister.js";
import CreateToDoItem from "./ToDo/CreateToDoItem.js";
import ToDoList from "./ToDo/ToDoList.js";
import "./App.css";
import appReducer from "./reducers.js";
import { StateContext } from "./Contexts.js";
import { useResource } from "react-request-hook";

function App() {
  //const initialToDos = [];

  //Define a new useResource Hook, where we request /posts:
  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [],
  });

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data });
    }
  }, [todos]);

  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user}'s To-Dos'`;
    } else {
      document.title = `To-Dos`;
    }
  }, [user]);

  return (
    <div>
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        <AppHeader />
        <UserAuthRegister />
        <br />
        {user && <CreateToDoItem />}
        {user && <hr />}
        {user && <h3>ToDo Lists</h3>}
        {user && <ToDoList />}
      </StateContext.Provider>
    </div>
  );
}

export default App;
