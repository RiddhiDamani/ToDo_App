import React, { useReducer } from "react";
import AppHeader from "./AppHeader.js";
import UserAuthRegister from "./User/UserAuthRegister.js";
import CreateToDoItem from "./ToDo/CreateToDoItem.js";
import ToDoList from "./ToDo/ToDoList.js";
import "./App.css";
import appReducer from "./reducers.js";

function App() {
  const initialToDos = [];
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialToDos,
  });
  const { user, todos } = state;

  return (
    <div>
      <AppHeader />
      <UserAuthRegister user={user} dispatch={dispatch} />
      <br />
      {user && <CreateToDoItem dispatch={dispatch} />}
      {user && <hr />}
      {user && <h3>ToDo Lists</h3>}
      {user && <ToDoList todos={todos} dispatch={dispatch} />}
    </div>
  );
}

export default App;
