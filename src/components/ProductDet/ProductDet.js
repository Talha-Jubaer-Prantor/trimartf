import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import Footer from "../Footer/Footer";
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
      fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: user.email, product }),
      }).then(alert("Order placed. Please check order"));
    } else {
      window.location.replace("/login");
    }
  }

  return (
    <div style={{ backgroundColor: "#1d3789" }}>
      <AnotherMenu></AnotherMenu>
      <div className="product-det">
        <div>
          <img
            style={{ width: "75%", borderRadius: "15px" }}
            src={product.img}
            alt=""
          />
        </div>
        <div>
          <p>
            <h3 style={{ color: "white" }}>{product.name}</h3>
          </p>
          <p>
            <h4 style={{ color: "white" }}>Category:{product.category}</h4>
          </p>
          <p style={{ color: "white" }}>
            Description
            <p>{product.description}</p>
          </p>
          <button
            style={{ marginTop: "min(35vh)" }}
            type="button"
            onClick={handleOrder}
            className="btn btn-danger"
          >
            Add
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDet;
