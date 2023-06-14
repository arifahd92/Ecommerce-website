import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
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
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly">
          {productsArr.map((item) => {
            return (
              <>
                <div className="col-md-6">
                  <figure className="figure">
                    <figcaption className="figure-caption text-center">
                      {item.title}
                    </figcaption>
                    <img
                      src={item.imageUrl}
                      className="figure-img img-fluid"
                      alt=""
                    />
                    <figcaption className="figure-caption d-flex justify-content-between">
                      <div>${item.price}</div>{" "}
                      <button className="btn btn-outline-success">
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
            <button className="btn bg-info">See the cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
