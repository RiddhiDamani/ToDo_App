import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";

export default function CreateToDoItem() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const navigation = useNavigation();

  //Passing object into a createPost call
  const [todos, createToDo] = useResource(
    ({ title, description, dateCreated, complete, dateCompleted }) => ({
      url: "/todos",
      method: "post",
      headers: { Authorization: `${state.user.access_token}` },
      data: { title, description, dateCreated, complete, dateCompleted },
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

  useEffect(() => {
    // if todos.data contains a value - it indicates that the request is complete and we
    // have recieved data back from the server.
    if (todos && todos.isLoading === false && todos.data) {
      dispatch({
        type: "CREATE_TODO",
        title: todos.data.title,
        description: todos.data.description,
        dateCreated: todos.data.dateCreated,
        complete: todos.data.complete,
        dateCompleted: todos.data.dateCompleted,
        id: todos.data.id,
      });
      console.log(todos.data);
      navigation.navigate(`/todo/${todos.data.id}`);
    }
    // eslint-disable-next-line
  }, [todos]);

  function handleCreate() {
    // create post is a network request. AXIOS will fire this network request asynchronously
    createToDo({ title, description, dateCreated });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        <h3>ToDo Form</h3>
        <label className="space" htmlFor="create-todo-title">
          Title:
        </label>
        <input
          className="titleField"
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-todo-title"
          id="create-todo-title"
          required
          autofocus
        ></input>
        <br></br>
        <br></br>
        <label className="space" htmlFor="create-todo-description ">
          Description:
        </label>
        <textarea
          className="descriptionField"
          value={description}
          onChange={handleDescription}
        ></textarea>
      </div>
      <br />
      <input
        className="space"
        type="submit"
        value="Add"
        disabled={title.length === 0}
      ></input>
    </form>
  );
}
