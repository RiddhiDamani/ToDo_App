import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import { Card, Button } from "react-bootstrap";

function ToDoItem({
  _id,
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
}) {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [deletedToDo, deleteToDo] = useResource((_id) => ({
    url: `/todo/${_id}`,
    method: "delete",
    headers: { Authorization: `${user.access_token}` },
    data: {
      username: user.username,
    },
  }));

  const [updateTodo, updateToDo] = useResource(
    ({ complete, dateCompleted }) => ({
      url: `/todo/${_id}`,
      method: "patch",
      data: { complete, dateCompleted },
    })
  );

  useEffect(() => {
    if (deletedToDo && deletedToDo.data && deletedToDo.isLoading === false) {
      const deleteToDoId = deletedToDo.data._id;
      dispatch({ type: "DELETE_TODO", id: deleteToDoId });
    }
    // eslint-disable-next-line
  }, [deletedToDo]);

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
    console.log("Trying to delete: ", _id);
    deleteToDo();
  };

  const handleChecked = (e) => {
    complete = e.target.checked ? true : false;
    dateCompleted =
      complete === true ? Date(Date.now()).toString().slice(0, 25) : null;
    updateToDo({ complete: e.target.checked, dateCompleted: dateCompleted });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>{description}</span>
          <br />
          <span>ToDo ID: {_id}</span>
          <br />
          <span>Date Created: {dateCreated}</span>
          <br />
          <span>
            {" "}
            <input
              type="checkbox"
              name="checkbox"
              onClick={handleChecked}
              checked={complete}
            />
            <strong> Date Completed:</strong>
            {complete && <> {dateCompleted} </>}
          </span>
          <br />
        </Card.Text>
        <Button variant="primary" onClick={handleDelete}>
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

export default React.memo(ToDoItem);
