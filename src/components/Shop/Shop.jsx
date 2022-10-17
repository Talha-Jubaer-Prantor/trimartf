import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { getStoredCart } from '../../utilities/fakedb';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    
    const handleAddToCart = (selectedProduct) =>{
        const user=JSON.parse(localStorage.getItem('loggedData'))
        if(user){
         fetch('https://shrouded-island-44483.herokuapp.com/cart',{
            method: 'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({'email':user.email,selectedProduct})
            })
        }else{
            window.location.replace('/login')
        }
    }

    return (
            
            <div>
                <Header></Header>
        <div className='shop-container'>
            <div className="products-container">
                {
                        products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
        </div>
        </div>
    );
};

export default Shop;