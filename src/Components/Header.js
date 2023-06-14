import React from "react";

export default function Header() {
  return (
    <div className="container-fluid ">
      <div className="row text-white bg-dark ">
        <div className="col text-center">HOME</div>
        <div className="col text-center">STORE</div>
        <div className="col text-center">ABOUT</div>
        <div className="col text-center btn btn-outline-info">CART</div>
      </div>
      <div className="row text-center bg-secondary display-5">
        <div className="col text-white pt-4 pb-4">The Generics</div>
      </div>
    </div>
  );
}
