import React from "react";

export default function ToDoItem({
  index,
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
  dispatch,
}) {
  return (
    <div>
      <div>
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
        <br />
        <span>
          <input
            type="checkbox"
            name="checkbox"
            checked={complete}
            onChange={(e) => {
              dispatch({ type: "TOGGLE_TODO", index });
            }}
          />
          <strong>Date Completed:</strong>
          {dateCompleted && (
            <text> {Date(Date.now()).toString().slice(0, 25)} </text>
          )}
        </span>
        <br />
        <button
          onClick={(e) => {
            dispatch({ type: "DELETE_TODO", index });
          }}
        >
          DELETE
        </button>
        <hr></hr>
      </div>
    </div>
  );
}
