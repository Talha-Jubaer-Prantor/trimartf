import React, { useEffect } from 'react';
import { useState } from 'react';
import AnotherMenu from '../AnotherMenu/AnotherMenu';
import "./CartOrder.css"

const CartOrder = () => {
    // LoggedUser Data
    const user = JSON.parse(localStorage.getItem("loggedData"));
    // States
    const [cartItem,setCartItem]=useState([])


    // Added Item Feching from backend
    useEffect(() => {
        fetch(`http://localhost:8080/mycart/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setCartItem(data);
          });
      }, 1000);


    const handleRemoveItem=(props)=>{

        const productId=props._id
        fetch(`http://localhost:8080/deletecart/${productId}`, {
      method: "DELETE",
        }).then((res) => {
      if (res) {
        console.log(res);
        window.location.reload();
      }
        });
  };


    // Transiction Function
    const handleTrx=(e)=>{
        e.preventDefault()

        const paymentNum=e.target.paymentNum.value
        const trxid=e.target.trxid.value
        const method=e.target.method.value

    }




    console.log(cartItem)
    return (

        <div style={{backgroundColor:"#ecf0f3"}}>
        {/* Nav Starts Here */}
            <AnotherMenu></AnotherMenu>
        {/* Nav Ends Here */}

       <div className='order-cart container' >
         {/* Added Item Starts Here*/}
         <div className="cart" >
         {
            cartItem.map(item=> 
                <div className='item' key={item._id}>
                    <span><img style={{marginTop:"4px",height:"40px"}} src={item.item.img} alt="" /></span>
                    <span>{item.item.name}<br />{item.item.price} BDT</span>
                    <span style={{margin:"5px"}}><button onClick={()=>handleRemoveItem(item)} type="button" className="btn btn-danger">Remove</button></span>
                </div>
                )
        }
         </div>
        {/* Added Item Ends Here*/}

        <div className='transaction-area'>

            <h3>Order Summary</h3>
            <h5>Ordered Item: </h5>
            <h5>Total Amount: </h5>
            <h5>Advance Payment Require: </h5>
            {/* Payment Details Starts Here */} <br />
            <h3>Payment Details</h3>
            <form onSubmit={handleTrx}>
                <span>Payment Number : <br /> <input type="number" name="paymentNum" id="" /></span> <br /> <br />
                <span>Transiction Id : <br /> <input type="text" name="trxid" id="trxid" /></span> <br /> <br />
                <span>Payment Method : <br /> 
                    <select name="method" >
                        <option disabled >Chose an option</option>
                        <option value="bkash">Bkash</option>
                        <option value="nagad">Nagad</option>
                    </select>
                </span> <br /> <br />
                <span> <input className="btn btn-success" type="submit" value="Submit"></input> </span>
            </form>
            {/* Payment Details Starts Here */}

            <div>

            </div>
        </div>


       </div>







            
        </div>
    );
};

export default CartOrder;