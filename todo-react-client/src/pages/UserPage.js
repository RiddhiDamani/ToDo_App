import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import UserList from "../users/UserList";
import { Link } from "react-navi";
import AppHeader from "../AppHeader";

export default function UserPage() {
  const { dispatch } = useContext(StateContext);

  const [users, getUsers] = useResource(() => ({
    url: "/user",
    method: "get",
  }));

  // eslint-disable-next-line
  useEffect(getUsers, []);

  useEffect(() => {
    if (users && users.data && users.isLoading === false) {
      //console.log("----FETCH USER DISPATCH ON RUN-----");
      dispatch({ type: "FETCH_USERS", users: users.data });
    }
    // eslint-disable-next-line
  }, [users]);

  const { isLoading } = users;

  return (
    <>
      <AppHeader />
      {/* <h3> Registered Users List </h3> */}
      {isLoading && "Users loading..."}
      <UserList /> <br />
      <div>
        <Link href="/">Go Back to Homepage</Link>
      </div>
    </>
  );
}
