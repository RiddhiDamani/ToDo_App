import React, { useReducer, useEffect } from "react";
import "./App.css";
import HeaderBar from "./pages/HeaderBar.js";
import appReducer from "./reducers.js";
import { StateContext } from "./Contexts.js";
import HomePage from "./pages/HomePage";
import CreateToDoItem from "./todo/CreateToDoItem";
import { Router, View } from "react-navi";
import { mount, route } from "navi";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: {},
    todos: [],
  });

  const { user } = state;

  const routes = mount({
    "/": route({ view: <HeaderBar /> }),
    "/todo": route({
      view: <HomePage />,
    }),
  });

  useEffect(() => {
    if (user.username) {
      document.title = `${user.username}'s To-Dos'`;
    } else {
      document.title = `To-Dos`;
    }
  }, [user]);

  return (
    <div>
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Router routes={routes}>
          <div style={{ padding: 8 }}>
            <View />
          </div>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
