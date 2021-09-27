import React from "react";

export default function CreateToDoItem() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h3>ToDo Form</h3>
        <label className="space" htmlFor="create-todo-title">
          Title:
        </label>
        <input
          className="space"
          type="text"
          name="create-todo-title"
          id="create-todo-title"
        ></input>
        <label className="space" htmlFor="create-todo-description ">
          Description:
        </label>
        <textarea className="space"></textarea>
      </div>
      <br />
      <input className="space" type="submit" value="Add"></input>
    </form>
  );
}
