import React from 'react';
import "./AdminOrder.css"
import AdminNav from "../AdminNav/AdminNav"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const AdminOrder = () => {


    const [confirmedOrders,setConfirmedOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/confirmedorder')
        .then(res=>res.json())
        .then(data=>setConfirmedOrders(data))
    },[])


    return (
        <div>
            <AdminNav></AdminNav>

            {confirmedOrders.map((orederItem) => (
        
        <div className="order-sec">
          <div className="order-owner">
            <p>
              <b>Name:</b>{orederItem.orderOwner.name}
            </p>
            <p>
              <b>Email:</b>{orederItem.orderOwner.email}
            </p>
            <p>
              <b>Phone:</b>{orederItem.orderOwner.name}
            </p>
          </div>
          {orederItem.order.map((item) => (
            <div className="order-items">
              <div className="admin-review-item">
                <div>
                  <img style={{"borderRadius":"50px"}} src={item.img} alt="img" />
                </div>
                <div className="review-item-details-container">
                  <div className="review-item-details">
                    <p className="product-name" title={item.name}>
                      {item.name.length > 20
                        ? item.name.slice(0, 20) + "..."
                        : item.name}
                    </p>
                    <p>
                      Price:{" "}
                      <span className="orange-color">{item.price} BDT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}


        </div>
    );
};

export default AdminOrder;