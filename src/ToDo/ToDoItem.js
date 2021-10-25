import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";

export default function ToDoItem({
  id,
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
}) {
  const { dispatch } = useContext(StateContext);
  const [todos, deleteToDo] = useResource(() => ({
    url: `/todos/${id}`,
    method: "delete",
  }));

  useEffect(() => {
    if (todos && todos.data !== undefined) {
      dispatch({ type: "DELETE_TODO", id });
    }
  }, [todos]);

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
      id,
      title,
      description,
      dateCreated,
      complete,
      dateCompleted,
    });
  }

  const handleDelete = () => {
    deleteToDo();
  };

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
        <button onClick={handleDelete}>DELETE</button>
        <hr></hr>
      </div>
    </div>
  );
}
