import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import "./ProductDet.css";

const ProductDet = () => {
  const location = useLocation();
  const [product, setProduct] = useState(location.state);
  const [newPrice,setNewPrice]=useState(product.price)
  const user = JSON.parse(localStorage.getItem("loggedData"));
  
    const quantityControl=(e)=>{
      const quantity=e.target.value
      const total=quantity*product.price
      setNewPrice(total)
      }
  

      
     function handleOrder(){
        if(user){
              fetch('http://localhost:8080/cart',{
                 method: 'POST',
                 headers:{'content-type':'application/json'},
                 body: JSON.stringify({'email':user.email,product})
                 })
             }else{
                 window.location.replace('/login')
             }
      }


  return (
    <div>
      <AnotherMenu></AnotherMenu>
      <div className="product-det">
        <div>
          <img style={{ width: "75%" }} src={product.img} alt="" />
        </div>
        <div>
          <p>
            <h3>{product.name}</h3>
          </p>
          <p>
            <h4>Category:{product.category}</h4>
          </p>
          <p>
            Description
            <p>
              {product.description}
            </p>
          </p>
          <form > 
            <h4>Quantity 
            <input onChange={quantityControl} style={{width:"50px"}} type="number" min={0} name="quantity" defaultValue={1}  id="quantity"/></h4>
            <br />
            <h4>Price: {newPrice}</h4>
            <br /><br /><br />
            <button type="button" onClick={handleOrder} className="btn btn-success">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDet;
