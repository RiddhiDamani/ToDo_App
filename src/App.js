import React, { useReducer } from "react";
import AppHeader from "./AppHeader.js";
import UserAuthRegister from "./User/UserAuthRegister.js";
import CreateToDoItem from "./ToDo/CreateToDoItem.js";
import ToDoList from "./ToDo/ToDoList.js";
import "./App.css";
import appReducer from "./reducers.js";

function App() {
  //const [user, setUser] = useState("");

  const [state, dispatchUser] = useReducer(appReducer, { user: "" });
  const { user } = state;

  let dateCreated = Date(Date.now()).toString().slice(0, 25);
  let dateCompleted = "";
  let complete = false;

  const lists = [
    {
      title: "Learn ReactJS",
      description: "Trying to learn. 10% accomplished",
      dateCreated: dateCreated,
      complete: complete,
      dateCompleted: dateCompleted,
    },
    {
      title: "Learn HTML5",
      description: "Trying to learn. 30% accomplished",
      dateCreated: dateCreated,
      complete: complete,
      dateCompleted: dateCompleted,
    },
    {
      title: "Learn Express",
      description: "Trying to learn. 40% accomplished",
      dateCreated: dateCreated,
      complete: complete,
      dateCompleted: dateCompleted,
    },
  ];

  return (
    <div>
      <AppHeader />
      <UserAuthRegister user={user} dispatchUser={dispatchUser} />
      <br />
      {user && <CreateToDoItem />}
      {user && <hr />}
      {user && <h3>ToDo Lists</h3>}
      {user && <ToDoList lists={lists} />}
    </div>
  );
}

export default App;
