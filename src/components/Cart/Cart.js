import React from 'react';
import './Cart.css';

const Cart = (props) => {
   
    let totalAmount=0
console.log(props)
    for(let i=0;i<props.cart.length;i++){
        const itemPrice=props.cart[i].item.price

        totalAmount=Number(totalAmount)+Number(itemPrice)

    }

    console.log(totalAmount)

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <h5><p>Selected Items: {props.cart.length}</p></h5>
            <h5><p>Total: {totalAmount} BDT</p></h5>
            
            {props.children}
        </div>
    );
};

export default Cart;