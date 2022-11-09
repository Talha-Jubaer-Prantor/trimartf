import React from "react";
import { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const [transiction, setTransiction] = useState();
  console.log(transiction);

  let totalAmount = 0;
  for (let i = 0; i < props.cart.length; i++) {
    const itemPrice = props.cart[i].item.price;

    totalAmount = Number(totalAmount) + Number(itemPrice);
  }

  const handleCheakOut = (props) => {
    const orders = props;
    const user = JSON.parse(localStorage.getItem("loggedData"));
    if (user == null) {
      window.location.replace("/login");
    }
    const userId = user.userId;
    const orderData = { user: user, orders, userId, transiction };
    fetch("https://trimartb-talha-jubaer-prantor.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    }).then((res) => {
      // window.location.replace("/");
    });
  };

  const handleTrx = (e) => {
    e.preventDefault();
    const trxId = document.getElementById("trxid").value;
    const method = document.getElementById("method").value;
    const paymentNum = document.getElementById("paymentNum").value;
    if (trxId && method !== "false" && paymentNum) {
      const payment = { trxId, method, paymentNum };
      setTransiction(payment);
    }
  };

  return (
    <form onSubmit={() => handleCheakOut(props.cart)} className="cart">
      <div className="cart-det">
        <h4>Order Summary</h4>
        <h5>
          <p>Selected Items: {props.cart.length}</p>
        </h5>
        <h5>
          <p>Total: {totalAmount} BDT</p>
        </h5>
        {/* {props.children} */}
        {transiction ? (
          <button type="submit" className="procced-btn">
            Proceed Checkout
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="cart-payment">
        <br />
        <form onChange={handleTrx}>
          Send{" "}
          <span style={{ color: "red", fontSize: "20px" }}>
            {totalAmount * 0.3}
          </span>{" "}
          BDT to{" "}
          <span style={{ color: "#0606ff", fontSize: "20px" }}>
            01234567890
          </span>{" "}
          as advance payment and fill the form below
          <br />
          Enter payment Number:{" "}
          <input
            type="number"
            name="paymentNum"
            id="paymentNum"
            placeholder="Enter payment number"
            required
          />
          <br />
          <br />
          Enter transiction id:{" "}
          <input
            type="text"
            name="trxid"
            id="trxid"
            placeholder="Enter your transiction id"
            required
          />
          <br />
          <br />
          Payment media:{" "}
          <select name="method" id="method" required>
            <option disabled selected value="false">
              Choose an option
            </option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
          </select>
        </form>
        <br />
        <span style={{ color: "red" }}>
          <h4>Your order will be confirmed after 30% payment</h4>
        </span>
      </div>
    </form>
  );
};

export default Cart;
