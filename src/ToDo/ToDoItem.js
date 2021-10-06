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
  function handleChecked(e) {
    //console.log(e.target.checked);
    if (e.target.checked) {
      complete = true;
    } else {
      complete = false;
    }
    dateCompleted =
      complete === true ? Date(Date.now()).toString().slice(0, 25) : null;
    dispatch({
      type: "TOGGLE_TODO",
      index,
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
            onChange={handleChecked}
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
