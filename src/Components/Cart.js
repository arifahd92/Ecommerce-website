import { useState } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Cart({ show, handleClose, item, setItem, price, setPrice }) {
  console.log("item in cart");
  console.log(item);
  let handlePurchase = () => {
    setItem([]);
    setPrice(0);

    alert("thanks for shopping with us");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="container">
            <div className="row d-flex justify-content-center">
              <div className="col d-flex justify-content-center">
                <h2>CART</h2>
              </div>
            </div>
            <Nav className="row">
              <Col>
                <Nav.Item>ITEM</Nav.Item>
              </Col>
              <Col>
                <Nav.Item>PRICE</Nav.Item>
              </Col>
              <Col>
                <Nav.Item>QUANTITY</Nav.Item>
              </Col>
            </Nav>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {item.map((item, ind) => {
                return (
                  <>
                    <Col className="d-flex col-4">
                      <img src={item.imageUrl} alt="" width={60} />
                      <span className="p-1">{item.title}</span>
                    </Col>
                    <Col className="col-4">
                      <div>{item.price}$</div>
                    </Col>
                    <Col className="col-2 offset-2">
                      <input
                        className="form-control"
                        type="text"
                        value={1}
                        name=""
                        id=""
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <div>
            <Nav.Item className="ml-auto">TOTAL:{price}$</Nav.Item>
          </div>
        </Modal.Footer>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handlePurchase()}>
            PURCHASE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
