import React from "react";
import "./AdminPost.css";
import AdminNav from "../AdminNav/AdminNav";
import { useState } from "react";

const AdminPost = () => {
  const [previewData, setPreviewData] = useState([]);

  const handlePostForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.image.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const data = {
      name: name,
      price: price,
      img: img,
      category: category,
      description: description,
    };
    setPreviewData(data);
    console.log(data);
  };

  const postOrders = (previewData) => {
    const adminPostData = previewData;
    fetch("http://localhost:8080/adminpost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminPostData),
    }).then((res) => {
      if (res) {
        alert("Product posted successfully");
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <AdminNav></AdminNav>

      <div className="post-controler">
        <form onSubmit={handlePostForm} className="form-container form-sec">
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

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Category</label>
            <div className="col-sm-10">
              <select style={{ marginTop: "8px" }} name="category">
                <option value="">Select Category</option>
                <option value="Home decoration">Home decoration</option>
                <option value="Children items">Children items</option>
              </select>
            </div>
          </div>

          <br />

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <textarea name="description" cols="65" rows="10"></textarea>
            </div>
          </div>

          <br />
          <button type="submit" className="btn btn-primary submit-btn">
            Preview
          </button>
        </form>
        <div className="preview-sec">
          <div className="product">
            <img src={previewData.img ? previewData.img : null} alt=""></img>
            <div className="product-info">
              <p className="product-name">
                {previewData.name ? previewData.name : "name"}
              </p>
              <p>
                <b>
                  Price:{" "}
                  <span style={{ color: "red" }}>
                    {previewData.price ? previewData.price : "__"}{" "}
                  </span>
                </b>
                <span style={{ color: "#03c703" }}>BDT</span>
              </p>
              <p style={{ fontSize: "15px" }}>
                {previewData.category ? previewData.category : ""}
              </p>
              {/* <p style={{"fontSize":"15px"}}>Category: {previewData.category}</p> */}
            </div>
          </div>

          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/controlerpage/post"
          >
            <button type="button" className="btn btn-secondary">
              Reset
            </button>
          </a>
        </div>
      </div>
      <div className="createPostBtn">
        <button
          onClick={() => postOrders(previewData)}
          type="button"
          className="btn btn-primary"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default AdminPost;
