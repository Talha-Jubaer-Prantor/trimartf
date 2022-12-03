import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import ProductDet from '../ProductDet/ProductDet';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useProducts();




const [isLoading,setIsLoading]=useState(true)

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://trimartb-q671gn75t-talha-jubaer-prantor.vercel.app/product")
        .then((res) => res.json())
        .then((data) => {
              setProducts(data)
              setIsLoading(false)
    });
    }, []);







console.log(isLoading)







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

            {
                isLoading ?
                <div style={{ textAlign: "center", paddingTop: "25vh", paddingBottom:"25vh" }}><h1 style={{color:"white"}}>Loading Resources...</h1></div>
                :
                <div className="products-container">
                {
                        products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            }

            



        </div>
        <Footer></Footer>
        </div>
    );
};

export default Shop;