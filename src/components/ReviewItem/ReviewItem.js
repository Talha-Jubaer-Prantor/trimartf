import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;
  const { name, img, price } = product.item;



  return (
    <div>
      <div className="review-item">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="review-item-details-container">
          <div className="review-item-details">
            <p className="product-name" title={name}>
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </p>
            <p style={{color:"white"}}>
              Price: <span className="orange-color">{price} BDT</span>
            </p>
          </div>
          <div className="delete-container">
            <button
              onClick={() => handleRemoveProduct(product)}
              className="delete-button"
            >
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrashAlt}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
