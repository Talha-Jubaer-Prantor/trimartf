import React from 'react';
import { Link } from 'react-router-dom';
import './LoginError.css'

const LoginError = () => {
    return (
    <div  className='error-container'>
        <h1 style={{fontSize:"100px"}}>404</h1>
        <p>Email or password incorrect</p>
        <Link style={{fontSize:"20px"}} to="/login">Try Again</Link>
    </div>
    );
};

export default LoginError;