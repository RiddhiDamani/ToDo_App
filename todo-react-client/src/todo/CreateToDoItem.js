import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";
import AppHeader from "../AppHeader";
import { Form, Button } from "react-bootstrap";

export default function CreateToDoItem() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const navigation = useNavigation();

  //Passing object into a createPost call
  const [todos, createToDo] = useResource(
    ({ title, description, dateCreated, complete, dateCompleted, userID }) => ({
      url: "/todo",
      method: "post",
      headers: { Authorization: `${user.access_token}` },
      data: {
        title,
        description,
        dateCreated,
        complete,
        dateCompleted,
        userID,
      },
    })
  );

  // setting the title
  function handleTitle(e) {
    setTitle(e.target.value);
    setDateCreated(Date(Date.now()).toString().slice(0, 25));
  }

  // setting the description
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleCreate() {
    // create post is a network request. AXIOS will fire this network request asynchronously
    createToDo({
      title,
      description,
      dateCreated,
      userID: user.username,
    });
  }

  useEffect(() => {
    // if todos.data contains a value - it indicates that the request is complete and we
    // have recieved data back from the server.
    if (todos && todos.data) {
      dispatch({
        type: "CREATE_TODO",
        title: todos.data.title,
        description: todos.data.description,
        dateCreated: todos.data.dateCreated,
        complete: todos.data.complete,
        dateCompleted: todos.data.dateCompleted,
        _id: todos.data._id,
        userID: todos.data.userID,
      });
      navigation.navigate(`/`);
    }
    // eslint-disable-next-line
  }, [todos]);

  return (
    <>
      <AppHeader />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="create-todo-title">ToDo Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={title}
            onChange={handleTitle}
            name="create-todo-title"
            id="create-todo-title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="create-todo-description ">
            ToDo Description:
          </Form.Label>
          <Form.Control
            value={description}
            onChange={handleDescription}
            as="textarea"
            rows={5}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={title.length === 0 || description.length === 0}
        >
          Add
        </Button>
      </Form>
    </>
  );
}
