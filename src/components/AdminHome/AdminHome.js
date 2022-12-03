import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import "./AdminHome.css";

const AdminHome = (props) => {
  const [orederItems, setOrderItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/order")
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);

  // Order confirm button
  const handleConfirmOrder = (props) => {
    const id = props;
    console.log(id);
    const orderId = { orderId: id };
    console.log(orderId);

    fetch("http://localhost:8080/confirmorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderId),
    }).then((res) => {
      window.location.reload();
    });
  };

  const handleDeleteOrder = (props) => {
    const id = props;
    console.log(id);
    const orderId = { orderId: id };
    console.log(orderId);

    fetch("http://localhost:8080/deleteorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderId),
    }).then(window.location.reload());
  };
  return (
    <div>
      <AdminNav></AdminNav>
      <div className="home-sec">
        <div>
          <p style={{ writingMode: " vertical-rl" }}>
            ======================= HOME =======================
          </p>
        </div>

        <div>
          {orederItems.map((orederItem) => (
            <div className="order-sec">
              <div className="order-owner">
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
                  <div className="admin-review-item">
                    <div>
                      <img
                        style={{ borderRadius: "50px" }}
                        src={items.item.img}
                        alt="img"
                      />
                    </div>
                    <div className="review-item-details-container">
                      <div className="review-item-details">
                        <p className="product-name" title={items.name}>
                          {/* {item.name.length > 20
                        ? item.name.slice(0, 20) + "..."
                        : item.name} */}
                          {items.item.name}
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
              <div>
                <h5>
                  Payment number:{" "}
                  <span style={{ color: "red" }}>
                    {orederItem.transiction.paymentNum}
                  </span>
                </h5>
                <h5>
                  Transiction Id:{" "}
                  <span style={{ color: "red" }}>
                    {orederItem.transiction.trxId}
                  </span>
                </h5>
                <h5>
                  Payment via:{" "}
                  <span style={{ color: "red" }}>
                    {orederItem.transiction.method}
                  </span>
                </h5>
              </div>

              <button
                type="button"
                onClick={() => handleConfirmOrder(orederItem._id)}
                className="btn btn-success"
              >
                Confirm Order
              </button>
              <button
                type="button"
                onClick={() => handleDeleteOrder(orederItem._id)}
                className="btn btn-danger"
              >
                Delete Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
