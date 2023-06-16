import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Cart({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="container">
            <Nav>
              <Nav.Item className="p-2">ITEM</Nav.Item>
              <Nav.Item className="p-2">PRICE</Nav.Item>
              <Nav.Item className="p-2">QUANTITY</Nav.Item>
            </Nav>
            <div>
              <Nav.Item className="ml-auto">TOTAL:0$</Nav.Item>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal! Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Reiciendis sapiente ad porro
          adipisci eum ducimus necessitatibus expedita iure libero hic cumque
          pariatur quis error, sint provident ipsam numquam reprehenderit.
          Deserunt.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("asdfghj")}>
            PURCHASE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
