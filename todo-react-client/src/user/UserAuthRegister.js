import React, { useContext, useState } from "react";
import Login from "./Login.js";
import { StateContext } from "../Contexts.js";
import { Col, Row, Button } from "react-bootstrap";
import RightSide from "./RightSide.js";
import Register from "./Register.js";
import HomePage from "../pages/HomePage.js";

export default function UserAuthRegister() {
  const Logout = React.lazy(() => import("./Logout"));
  const { state } = useContext(StateContext);
  const { user } = state;

  const [showRegister, setShowRegister] = useState(false);
  //console.log(user);
  if (user) {
    return (
      <>
        <Logout />
        <HomePage />
      </>
    );
  } else {
    return (
      <>
        <Col>
          <Row>
            <Login />
          </Row>
          <Row>
            <br />
            <div className="mb-2" style={{ marginLeft: "31%" }}>
              <label style={{ color: "#090560" }}>Not a user?</label>
              <Button
                size="md"
                variant="link"
                onClick={(e) => setShowRegister(true)}
              >
                Register
              </Button>
              <Register
                show={showRegister}
                handleClose={() => setShowRegister(false)}
              />
            </div>
          </Row>
        </Col>
        <Col>
          <RightSide />
        </Col>
      </>
    );
  }
}
