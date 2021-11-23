import AppHeader from "../AppHeader.js";
import UserAuthRegister from "../user/UserAuthRegister.js";
import React from "react";

import { Nav, Navbar, Container, Row } from "react-bootstrap";

export default function HeaderBar() {
  //const { state } = useContext(StateContext);
  //const { user } = state;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand to="#home">
            <AppHeader />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav></Nav>
            <br />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="landing">
        <React.Suspense fallback={"Loading..."}>
          <UserAuthRegister />
        </React.Suspense>{" "}
      </Row>
    </>
  );
}
