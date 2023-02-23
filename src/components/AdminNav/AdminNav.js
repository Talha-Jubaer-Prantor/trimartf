import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./AdminNav.css"

const Admin = () => {

    const [sidebar,setSidebar]=useState(true)

    const btn=()=>{
    
    if(sidebar===true){
        setSidebar(false)
    }else{
        setSidebar(true)
    } 
    }

    return (
        <div>
        <div >
         

<div className={`sidebar ${sidebar? "active":""}`} id='sidebar'>
        <div className="logo_content">
            <div className="logo">
                <i className='bx bxl-c-plus-plus' style={{fontSize: "30px"}}></i>
                <div className="logoname" style={{marginLeft: "5px",color:"black"}}>T_trimart</div>
            </div>
            <i  className='bx bx-menu-alt-right fa-solid fa-bars' onClick={btn} id="btn" style={{fontSize: "25px",color:"black",boxShadow:"  2px 2px 6px #00000073, -2px -2px 9px white",borderRadius:"5px"}} ></i>
        </div>
        <ul className="nav_list" style={{paddingLeft:"0px"}}>
            <li>
                <Link to="/controlerpage/home">
                <i style={{color:"black"}} className="fa-solid fa-user"></i>
                    <span className="link_names">Home</span>
                </Link>
                <span className="tooltip">Home</span>
            </li><br />
            <li>
                <Link to="/controlerpage/order">
                <i style={{color:"black"}} className="fa-solid fa-layer-group"></i>
                    <span className="link_names">Order</span>
                </Link>
                <span className="tooltip">Order</span>
            </li><br />
            <li>
                <Link to="/controlerpage/post">
                <i style={{color:"black"}} className="fa-sharp fa-solid fa-trophy"></i>
                    <span className="link_names">Post</span>
                </Link>
                <span className="tooltip">Post</span>
            </li><br />
            
        </ul>
        
    </div>

        </div>
        </div>
    );
};

export default Admin;