import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import "./ProductDet.css";

const ProductDet = () => {
  const location = useLocation();
  const [product, setProduct] = useState(location.state);
  const [newPrice, setNewPrice] = useState(product.price);
  const user = JSON.parse(localStorage.getItem("loggedData"));

  const quantityControl = (e) => {
    const quantity = e.target.value;
    const total = quantity * product.price;
    setNewPrice(total);
  };

  function handleOrder() {
    if (user) {
      fetch("https://trimartb-talha-jubaer-prantor.vercel.app/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: user.email, product }),
      });
    } else {
      window.location.replace("/login");
    }
  }

  return (
    <div>
      <AnotherMenu></AnotherMenu>
      <div className="product-det">
        <div>
          <img style={{ width: "75%" }} src={product.img} alt="" />
        </div>
        <div>
          <p>
            <h3>{product.name}</h3>
          </p>
          <p>
            <h4>Category:{product.category}</h4>
          </p>
          <p>
            Description
            <p>{product.description}</p>
          </p>
          <button
            style={{ marginTop: "min(35vh)" }}
            type="button"
            onClick={handleOrder}
            className="btn btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDet;
