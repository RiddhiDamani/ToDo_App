import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";

function ToDoItem({
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

  const [updateTodo, updateToDo] = useResource(
    ({ complete, dateCompleted }) => ({
      url: `/todos/${id}`,
      method: "patch",
      data: { complete, dateCompleted },
    })
  );

  useEffect(() => {
    if (todos && todos.data !== undefined) {
      dispatch({ type: "DELETE_TODO", id });
    }
    // eslint-disable-next-line
  }, [todos]);

  useEffect(() => {
    // if todos.data contains a value - it indicates that the request is complete and we
    // have recieved data back from the server.
    if (updateTodo && updateTodo.isLoading === false && updateTodo.data) {
      dispatch({
        type: "TOGGLE_TODO",
        complete: updateTodo.data.complete,
        dateCompleted: updateTodo.data.dateCompleted,
        id: updateTodo.data.id,
      });
    }
    // eslint-disable-next-line
  }, [updateTodo]);

  const handleDelete = () => {
    deleteToDo();
  };

  const handleChecked = (e) => {
    complete = e.target.checked ? true : false;
    dateCompleted =
      complete === true ? Date(Date.now()).toString().slice(0, 25) : null;
    updateToDo({ complete: e.target.checked, dateCompleted: dateCompleted });
  };

  console.log("ToDo Rendered!");

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

export default React.memo(ToDoItem);
