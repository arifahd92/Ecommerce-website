import React from "react";
import { Button, Container, Nav, Row } from "react-bootstrap";
export default function Header({ handleShow, item }) {
  return (
    <Container fluid className="bg-light p-3">
      <Nav>
        <Nav.Item className="p-2">Home</Nav.Item>
        <Nav.Item className="p-2">Store</Nav.Item>
        <Nav.Item className="p-2">about</Nav.Item>
        <Nav.Item className="ml-auto">
          <Button onClick={handleShow}>Cart-({item.length})</Button>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
