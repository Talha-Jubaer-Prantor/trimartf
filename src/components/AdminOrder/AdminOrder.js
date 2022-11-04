import React from "react";
import "./AdminOrder.css";
import AdminNav from "../AdminNav/AdminNav";
import { useState } from "react";
import { useEffect } from "react";
const AdminOrder = () => {
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  useEffect(() => {
    fetch("https://trimartb-talha-jubaer-prantor.vercel.app/confirmedorder")
      .then((res) => res.json())
      .then((data) => setConfirmedOrders(data));
  }, []);
  console.log(confirmedOrders);

  const handleDelete = (props) => {
    console.log(props);
    fetch(
      `https://trimartb-talha-jubaer-prantor.vercel.app/deleteconfirmorder/${props._id}`,
      {
        method: "delete",
      }
    ).then(window.location.reload());
  };

  return (
    <div>
      <AdminNav></AdminNav>
      <div className="order-section">
        <div>
          <p style={{ writingMode: " vertical-rl" }}>
            {" "}
            ======================= ORDER =======================
          </p>
        </div>
        <div>
          {confirmedOrders.map((orederItem) => (
            <div className="admin-order-sec">
              <div className="admin-order-owner">
                <p>
                  <b>Name:</b>
                  {orederItem.orderOwner.name}
                </p>
                <p>
                  <b>Email:</b>
                  {orederItem.orderOwner.email}
                </p>
                <p>
                  <b>Phone:</b>
                  {orederItem.orderOwner.phone}
                </p>
                <p>
                  <b>Address:</b>
                  {orederItem.orderOwner.address}
                </p>
              </div>
              {orederItem.order.map((items) => (
                <div className="order-items">
                  <div className="admin-order-review-item">
                    <div>
                      <img
                        style={{ borderRadius: "50px" }}
                        src={items.item.img}
                        alt="img"
                      />
                    </div>
                    <div className="review-item-details-container">
                      <div className="review-item-details">
                        <p className="product-name" title={items.item.name}>
                          {items.item.name.length > 20
                            ? items.item.name.slice(0, 20) + "..."
                            : items.item.name}
                        </p>
                        <p>
                          Price:{" "}
                          <span className="orange-color">
                            {items.item.price} BDT
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleDelete(orederItem)}
                class="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
