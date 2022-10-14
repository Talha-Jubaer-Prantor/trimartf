import React from 'react';
import "./AdminNav.css"

const Admin = () => {
    return (
        <div>
        <div >
            <nav className='admin-header'>
                <a style={{"color":"black","textDecoration":"none"}} href='/controlerpage/home'>Home</a>
                <a style={{"color":"black","textDecoration":"none"}} href='/controlerpage/order'>Order</a>
                <a style={{"color":"black","textDecoration":"none"}} href='/controlerpage/post'>Post</a>
            </nav>
        </div>
        </div>
    );
};

export default Admin;