import React, { useContext } from "react";
import { StateContext } from "../Contexts";

export default function ToDoItem({
  todoId,
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
}) {
  const { dispatch } = useContext(StateContext);

  function handleChecked(e) {
    if (e.target.checked) {
      complete = true;
    } else {
      complete = false;
    }
    dateCompleted =
      complete === true ? Date(Date.now()).toString().slice(0, 25) : null;
    dispatch({
      type: "TOGGLE_TODO",
      todoId,
      title,
      description,
      dateCreated,
      complete,
      dateCompleted,
    });
  }

  return (
    <div>
      <div>
        <span>
          <input
            type="checkbox"
            name="checkbox"
            onClick={handleChecked}
            checked={complete}
          />
          <strong>Date Completed:</strong>
          {complete && <text> {dateCompleted} </text>}
        </span>
        <br />
        <br />
        <span>
          <strong>Title: </strong>
          {title}
        </span>
        <br />
        <span>
          <strong>Description: </strong>
          {description}
        </span>
        <br />
        <span>
          <strong>Date Created:</strong> {dateCreated}
        </span>
        <br></br>
        <br></br>
        <button
          onClick={(e) => {
            dispatch({ type: "DELETE_TODO", todoId });
          }}
        >
          DELETE
        </button>
        <hr></hr>
      </div>
    </div>
  );
}
