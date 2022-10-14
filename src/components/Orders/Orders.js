import React, { useEffect, useState } from 'react';
import AnotherMenu from '../AnotherMenu/AnotherMenu';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
        // THIS FUNCTION WILL POST DATA IN DATABASE AT FETCH METHOD
    const handleCheakOut=(props)=>{
        const orders=props
console.log(orders)
        const user= JSON.parse(localStorage.getItem('loggedData'))

        if(user== null){
            window.location.replace("/login")
        }
        const userId=user.userId
        const orderData={"user":user,orders,userId}
        fetch('http://localhost:8080/order',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderData)
    }).then(res=>{
        console.log(res)
        window.location.reload()
    })
        
    }
    

    // Fetching from backend to cart
    const [cart,setCart]=useState([])
    const user=JSON.parse(localStorage.getItem('loggedData'))
    useEffect(()=>{
      fetch(`http://localhost:8080/mycart/${user.email}`)
      .then(res=>res.json())
      .then(data=>setCart(data[0].cart))
    },[])
// console.log(cart)
    // console.log(cart)
    const handleRemoveProduct = product =>{
        fetch(`http://localhost:8080/deletecart/${user.email}`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(res=>{
        if(res){
            console.log(res)
            window.location.reload();
        }
    })
    }

console.log(cart.status)

    return (
        <div className='shop-container'>
            <AnotherMenu></AnotherMenu>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='procced-btn' onClick={()=>handleCheakOut(cart)}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;