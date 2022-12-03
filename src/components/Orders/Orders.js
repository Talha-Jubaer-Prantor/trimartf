import React, { useEffect, useState } from "react";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  // THIS FUNCTION WILL POST DATA IN DATABASE AT FETCH METHOD

  // Fetching from backend to cart
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("loggedData"));
  useEffect(() => {
    fetch(
      `https://trimartb-q671gn75t-talha-jubaer-prantor.vercel.app/mycart/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setIsLoading(false);
      });
  }, []);

  const handleRemoveProduct = (product) => {
    console.log(product._id);
    fetch(
      `https://trimartb-q671gn75t-talha-jubaer-prantor.vercel.app/deletecart/${product._id}`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res) {
        console.log(res);
        window.location.reload();
      }
    });
  };

  // console.log(cart.status);

  return (
    <div className="shop-container">
      <AnotherMenu></AnotherMenu>

      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            paddingTop: "25vh",
            paddingBottom: "25vh",
          }}
        >
          <h1>Loading Resources...</h1>
        </div>
      ) : (
        <div className="review-items-container">
          {cart.map((product) => (
            <ReviewItem
              // key={product.id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItem>
          ))}
        </div>
      )}

      {cart[0] ? (
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      ) : (
        <div style={{ textAlign: "center", paddingTop: "25vh" }}>
          {" "}
          <h1>No order placed yet</h1>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Orders;
