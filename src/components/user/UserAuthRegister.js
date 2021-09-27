import React from "react";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Register from "./Register.js";
// import CreateToDoItem from "../todo_list/CreateToDoItem.js";
// import ToDoList from "../todo_list/ToDoList.js";

export default function UserAuthRegister({ user, setUser, setToDos }) {
  // const newUser = false;
  // const lists = [
  //   {
  //     title: "Learn ReactJS",
  //     description: "Trying to learn. 10% accomplished",
  //   },
  //   {
  //     title: "Learn HTML5",
  //     description: "Trying to learn. 30% accomplished",
  //   },
  // ];
  if (user) {
    return (
      <div>
        <Logout user={user} setUser={setUser} setTodos={setToDos} />;
        {/* <CreateToDoItem />
        <ToDoList lists={lists} /> */}
      </div>
    );
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <br></br>
        <Register setUser={setUser} />
      </>
    );
  }
}
