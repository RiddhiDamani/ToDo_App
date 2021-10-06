import React, { useState } from "react";


export default function CreateToDoItem({ dispatch }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateCreated, setDateCreated] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
    setDateCreated(Date(Date.now()).toString().slice(0, 25));
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "CREATE_TODO", title, description, dateCreated });
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
