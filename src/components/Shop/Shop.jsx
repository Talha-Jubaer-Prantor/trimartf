import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import ProductDet from '../ProductDet/ProductDet';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [selectedProduct,setSelectedProduct]=useState({})
 
    const handleAddToCart = (selectedProduct) =>{
            setSelectedProduct(selectedProduct)
            console.log(selectedProduct)
                return <ProductDet productDet={selectedProduct}></ProductDet>
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
        <Footer></Footer>
        </div>
    );
};

export default Shop;