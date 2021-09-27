import React, { useState } from "react";
import AppHeader from "./AppHeader.js";
import UserAuthRegister from "./User/UserAuthRegister.js";

function App() {
  const [user, setUser] = useState("");
  const initialTodo = [];
  const [todos, setTodos] = useState(initialTodo);
  return (
    <div>
      <AppHeader />
      <UserAuthRegister user={user} setUser={setUser} setTodos={setTodos} />
    </div>
  );
}

export default App;
