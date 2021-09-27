import React from "react";

export default function CreateToDoItem() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h3>ToDo Form</h3>
        <label htmlFor="create-todo-title">Title:</label>
        <input
          type="text"
          name="create-todo-title"
          id="create-todo-title"
        ></input>
      </div>
      <br />
      <label htmlFor="create-todo-description ">Description:</label>
      <textarea></textarea>
      <br />
      <br />
      <input type="submit" value="Add"></input>
    </form>
  );
}
