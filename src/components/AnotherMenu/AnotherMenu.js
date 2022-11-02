import React from 'react';
import { Link } from 'react-router-dom';

const AnotherMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between container">
                <Link className="navbar-brand" to='/'><b>Trimart</b></Link>
                <div>
                <b><Link style={{'textDecoration':'none','color':'black'}} className="btn my-2 my-sm-0" to='/'>Home</Link></b>
                </div>
            </nav>
        </div>
    );
};

export default AnotherMenu;