import React from "react";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Register from "./Register.js";
import CreateToDoItem from "../ToDo/CreateToDoItem.js";
import ToDoList from "../ToDo/ToDoList.js";

export default function UserAuthRegister({ user, setUser }) {
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
