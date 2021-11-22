import AppHeader from "../AppHeader.js";
import UserAuthRegister from "../user/UserAuthRegister.js";
import React, { useContext } from "react";
import { StateContext } from "../Contexts.js";

export default function HeaderBar() {
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <>
      <AppHeader />
      <React.Suspense fallback={"Loading..."}>
        <UserAuthRegister />
      </React.Suspense>{" "}
      <br />
    </>
  );
}
