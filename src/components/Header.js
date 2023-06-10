import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand>Contact Manager</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

