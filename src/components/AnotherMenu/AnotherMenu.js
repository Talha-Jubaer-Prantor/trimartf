import React from 'react';
import { Link } from 'react-router-dom';
import "./AnotherMenu.css"

const AnotherMenu = () => {
    return (
        <div style={{backgroundColor:"white",paddingTop: "1px",paddingBottom: "2px"}}>
            <nav className="navbar navbar-light justify-content-between container anotherNav">
                <Link className="navbar-brand" to='/'><b style={{color:"white"}}>Trimart</b></Link>
                <div>
                <b><Link style={{'textDecoration':'none','color':'white'}} className="btn my-2 my-sm-0" to='/'>Home</Link></b>
                </div>
            </nav>
        </div>
    );
};

export default AnotherMenu;