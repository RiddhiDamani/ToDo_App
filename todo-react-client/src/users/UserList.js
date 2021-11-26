import React, { useContext } from "react";
import User from "./User";
import { StateContext } from "../Contexts";
import { Card } from "react-bootstrap";

export default function UserList() {
  const { state } = useContext(StateContext);
  const { users } = state;

  //console.log(state.users);

  return (
    <div>
      <Card>
        <Card.Header as="h5">Registered Users List </Card.Header>
        <Card.Body>
          {users.map((p, i) => (
            <Card.Text>
              <User {...p} userID={p._id} username={p.username} key={p._id} />
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
