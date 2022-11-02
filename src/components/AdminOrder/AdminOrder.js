import React from "react";
import "./AdminOrder.css";
import AdminNav from "../AdminNav/AdminNav";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const AdminOrder = () => {
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/confirmedorder")
      .then((res) => res.json())
      .then((data) => setConfirmedOrders(data));
  }, []);
  console.log(confirmedOrders);
  return (
    <div>
      <AdminNav></AdminNav>

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
                      <span className="orange-color">{items.item.price} BDT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminOrder;
