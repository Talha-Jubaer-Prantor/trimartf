import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import Footer from "../Footer/Footer";
import "./Menu.css";

const Menu = (product) => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("loggedData"));
  const userId = user.userId;
  useEffect(() => {
    fetch(`https://trimartb-talha-jubaer-prantor.vercel.app/
myorder/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setGoods(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="menu">
      <AnotherMenu></AnotherMenu>
      <div className="order-status">
        <h4 style={{ textAlign: "center",color:"white" }}>My Orders</h4>
        {/* Menu List */}

        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              paddingTop: "25px",
              paddingBottom: "25px",
            }}
          >
            <h1 style={{color:"white"}}>Loading resources...</h1>
          </div>
        ) : (
          <div>
            {goods?.map((good) => (
              <div className="order-container">
                {good.order.map((orderItem) => (
                  <li className="order-item">
                    <img src={orderItem.item.img} alt="" />
                    <span style={{ marginLeft: "1%" }}>
                      {orderItem.item.name}
                    </span>
                    <span style={{ float: "right", marginRight: "2%" }}>
                      <b>Price: {orderItem.item.price} BDT</b>
                    </span>
                  </li>
                ))}
                {good.status ? (
                  <span
                    style={{
                      float: "right",
                      color: "#21da02",
                      paddingRight: "1%",
                    }}
                  >
                    <b>Order Confirmed</b>
                  </span>
                ) : (
                  <span
                    style={{ float: "right", color: "red", paddingRight: "1%" }}
                  >
                    <b>Waiting for confirmation</b>
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Menu;
