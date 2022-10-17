import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, price} = product;
    
    // const BtnText=()=>{
        const [btn,setBtn]=useState()
        // const user=JSON.parse(localStorage.getItem('loggedData'))
        // useEffect(()=>{
        //     fetch(`https://shrouded-island-44483.herokuapp.com/mycart/${user.email}`)
        //     .then(res=>console.log(res))
            // .then(data=>console.log(data))
        //   },[])
        
        // console.log(product)
        
        
        // if(!btn){
        //     return <span> Add to cart </span>
        // }else{
        //     return <span> Added</span>
        // }
    // }

useEffect(()=>{
    fetch("https://shrouded-island-44483.herokuapp.com/mycart/talhajubaer3020@gmail.com")
    .then(res=>res.json())
    .then(data=>setBtn(data[0].cart))
},[])
console.log(btn)

const Button=e=>{
    

    if(btn){
        return "ase prod"
    }else{
        return 'nai'
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
                 {/* <Button></Button> */}
            </button>
        </div>
    );
};

export default Product;