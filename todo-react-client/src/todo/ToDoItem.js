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

  const [updateTodo, updateToDoItem] = useResource(
    ({ _id, dateCompleted }) => ({
      url: `/todo/${_id}`,
      method: "patch",
      headers: { Authorization: `${user.access_token}` },
      data: {
        dateCompleted,
        username: user.username,
      },
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
    if (updateTodo && updateTodo.data && updateTodo.isLoading === false) {
      dispatch({
        type: "TOGGLE_TODO",
        // complete: updateTodo.data.complete,
        dateCompleted: updateTodo.data.dateCompleted,
        id: updateTodo.data._id,
      });
    }
    // eslint-disable-next-line
  }, [updateTodo]);

  const handleDelete = () => {
    deleteToDo(_id);
  };

  const handleChecked = (e) => {
    complete = e.target.checked ? true : false;
    dateCompleted =
      complete === true ? Date(Date.now()).toString().slice(0, 25) : null;
    updateToDoItem({ _id, dateCompleted: dateCompleted });
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
            {state.user.access_token && (
              <input
                type="checkbox"
                name="checkbox"
                onClick={handleChecked}
                checked={dateCompleted ? true : false}
              />
            )}
            <strong> Date Completed:</strong>
            {dateCompleted && <> {dateCompleted} </>}
            {/* {complete && <> {dateCompleted} </>} */}
          </span>
          <br />
        </Card.Text>
        {state.user.access_token && (
          <Button variant="primary" onClick={handleDelete}>
            DELETE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default React.memo(ToDoItem);
