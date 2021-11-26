import React, { useReducer, useEffect } from "react";
import "./App.css";
import HeaderBar from "./pages/HeaderBar.js";
import appReducer from "./reducers.js";
import { StateContext } from "./Contexts.js";
import { Router, View } from "react-navi";
import { mount, route } from "navi";
import CreateToDoItem from "./todo/CreateToDoItem";
import UserPage from "./pages/UserPage";
import ProfilePage from "./pages/ProfilePage";
import { Container } from "react-bootstrap";

function App() {
  const initialToDos = [];

  const [state, dispatch] = useReducer(appReducer, {
    user: {},
    users: [],
    todos: initialToDos,
  });

  const { user } = state;

  const routes = mount({
    "/": route({ view: <HeaderBar /> }),
    "/todo/create": route({
      view: <CreateToDoItem />,
    }),
    "/user": route({ view: <UserPage /> }),
    "/user/:_id": route((req) => {
      return { view: <ProfilePage userID={req.params._id} /> };
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
          <Container>
            <View />
          </Container>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
