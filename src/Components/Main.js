import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import Cart from "./Cart";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
export default function Main() {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  const [tPrice, setTPrice] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addToCart = (ind) => {
    let added = false;
    let clickedItemString = JSON.stringify(productsArr[ind]);
    item.forEach((item) => {
      if (JSON.stringify(item) == clickedItemString) {
        alert("item already adde in cart");
        added = true;
      }
    });
    if (added) {
      return;
    }
    let toSave = productsArr.filter((item, index) => {
      return ind == index;
    });
    let updateprice = 0;
    item.forEach((item) => {
      updateprice += +item.price;
    });
    setItem([...item, ...toSave]);
    setTPrice(updateprice + productsArr[ind].price);
    alert("item added");
  };
  return (
    <div>
      <Header
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        setShow={setShow}
        item={item}
      />
      <div className="container-fluid">
        <div className="row">
          {productsArr.map((item, ind) => {
            return (
              <>
                <div className="col-md-6 d-flex justify-content-center">
                  <figure className="figure">
                    <figcaption className="figure-caption text-center p-2">
                      {item.title}
                    </figcaption>
                    <img
                      src={item.imageUrl}
                      className="figure-img img-fluid"
                      alt=""
                    />
                    <figcaption className="figure-caption d-flex justify-content-between">
                      <div className="p-2">${item.price}</div>{" "}
                      <button
                        className="btn btn-outline-success"
                        onClick={() => addToCart(ind)}
                      >
                        add to cart
                      </button>
                    </figcaption>
                  </figure>
                </div>
              </>
            );
          })}
        </div>
        <div className="row ">
          <div className="col d-flex justify-content-center mb-2">
            <Button onClick={handleShow}>see the cart</Button>
          </div>
        </div>
      </div>
      <Cart
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        setShow={setShow}
        item={item}
        price={tPrice}
        setPrice={setTPrice}
        setItem={setItem}
      />
      <Footer />
    </div>
  );
}
