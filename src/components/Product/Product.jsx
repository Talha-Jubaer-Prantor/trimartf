import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings,quantity } = product;
    
    const BtnText=()=>{
        const [btn,setBtn]=useState([])
        const user=JSON.parse(localStorage.getItem('loggedData'))
        useEffect(()=>{
            fetch(`http://localhost:8080/mycart/${user.email}`)
            .then(res=>res.json())
            .then(data=>setBtn(data[0].cart))
          },[])
        
        
        
        
        if(!btn){
            return <span> Add to cart </span>
        }else{
            return <span> Added</span>
        }
    }

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            {/* handleAddToCart function is in shop.js */}
            <button onClick={() => {handleAddToCart(product)}} className='btn-cart' id='add'>
                <FontAwesomeIcon icon={faShoppingCart}/> 
                {/* <BtnText></BtnText> */}
            </button>
        </div>
    );
};

export default Product;