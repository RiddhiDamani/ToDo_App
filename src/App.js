import React, { useState } from "react";
import AppHeader from "./AppHeader.js";
import UserAuthRegister from "./User/UserAuthRegister.js";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      <AppHeader />
      <UserAuthRegister user={user} setUser={setUser} />
    </div>
  );
}

export default App;
