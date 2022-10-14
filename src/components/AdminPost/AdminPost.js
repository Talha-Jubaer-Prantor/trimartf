import React from "react";
import "./AdminPost.css";
import AdminNav from "../AdminNav/AdminNav";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AdminPost = () => {

const [previewData,setPreviewData]=useState([])
  
    const handlePostForm=e=>{
  e.preventDefault()
      const name=e.target.name.value
      const price=e.target.price.value
      const img=e.target.image.value
      const data={"name":name,"price":price,"img":img}
      setPreviewData(data)
      console.log (data)
    }

    const postOrders= (previewData)=>{
      const adminPostData=previewData
      fetch('http://localhost:8080/adminpost',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(adminPostData)
      })
    }

  return (
    <div>
      <AdminNav></AdminNav>

      <div className="post-controler">
        <form onSubmit={handlePostForm}  className="form-container form-sec">
        <h1>Post Product</h1>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                className="form-control"
                id="staticEmail"
                placeholder="Name"
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Price</label>
            <div className="col-sm-10">
              <input
                type="number"
                name="price"
                className="form-control"
                id="inputPassword"
                placeholder="Price"
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Image(link)</label>
            <div className="col-sm-10">
              <input
                type="string"
                name="image"
                className="form-control"
                id="inputPassword"
                placeholder="Image link"
                required
              />
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary submit-btn">
            Preview
          </button>
        </form>
        <div className="preview-sec">
        <div className='product'>
            <img src={previewData.img? previewData.img:null} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{previewData.name? previewData.name:"name"}</p>
                <p>Price:{previewData.price? previewData.price:"Price"} BDT</p>
            </div>
            {/* handleAddToCart function is in shop.js */}
            <button className='btn-cart' id='add'>
                <FontAwesomeIcon icon={faShoppingCart}/> 
                {/* <BtnText></BtnText> */}
            </button>
        </div>
        <button type="button" className="btn btn-secondary"><a style={{"color":"white","textDecoration":"none"}} href="/controlerpage/post">Reset</a></button>
        </div>
      </div>
      <div className="createPostBtn">
      <button onClick={()=>postOrders(previewData)} type="button" className="btn btn-primary">Create Post</button>
      </div>
    </div>
  );
};

export default AdminPost;
