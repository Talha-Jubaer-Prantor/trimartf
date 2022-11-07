import React, { useEffect, useState } from "react";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  // THIS FUNCTION WILL POST DATA IN DATABASE AT FETCH METHOD
  const handleCheakOut = (props) => {
    const orders = props;
    console.log(orders);
    const user = JSON.parse(localStorage.getItem("loggedData"));

    if (user == null) {
      window.location.replace("/login");
    }
    const userId = user.userId;
    const orderData = { user: user, orders, userId };
    fetch("https://trimartb-talha-jubaer-prantor.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    }).then((res) => {
      console.log(res);
      window.location.replace("/");
    });
  };

  // Fetching from backend to cart
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("loggedData"));
  useEffect(() => {
    fetch(
      `https://trimartb-talha-jubaer-prantor.vercel.app/
mycart/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setIsLoading(false);
      });
  }, []);
  // console.log(cart)

  const handleRemoveProduct = (product) => {
    console.log(product._id);
    fetch(
      `https://trimartb-talha-jubaer-prantor.vercel.app/
deletecart/${product._id}`,
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

      <div className="cart-container">
        <Cart cart={cart}>
          <button className="procced-btn" onClick={() => handleCheakOut(cart)}>
            Proceed Checkout
          </button>
        </Cart>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Orders;
