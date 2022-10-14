import React from 'react';

const AnotherMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between container">
                <a className="navbar-brand" href='/'><b>Trimart</b></a>
                <div>
                <b><a style={{'textDecoration':'none','color':'black'}} className="btn my-2 my-sm-0" href='/'>Home</a></b>
                </div>
            </nav>
        </div>
    );
};

export default AnotherMenu;