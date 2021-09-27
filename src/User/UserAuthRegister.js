import React from "react";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Register from "./Register.js";
import CreateToDoItem from "../ToDo/CreateToDoItem.js";
import ToDoList from "../ToDo/ToDoList.js";

export default function UserAuthRegister({ user, setUser }) {
  const newUser = false;
  const lists = [
    {
      title: "Learn ReactJS",
      description: "Trying to learn. 10% accomplished",
    },
    {
      title: "Learn HTML5",
      description: "Trying to learn. 30% accomplished",
    },
  ];
  if (user) {
    return (
      <div>
        <Logout user={user} setUser={setUser} />
        <hr />
        <CreateToDoItem />
        <hr />
        <h3>ToDo Lists</h3>
        <ToDoList lists={lists} />
      </div>
    );
  } else {
    return (
      <div>
        <Login setUser={setUser} />
        <br></br>
        <Register setUser={setUser} />
      </div>
    );
  }
}
