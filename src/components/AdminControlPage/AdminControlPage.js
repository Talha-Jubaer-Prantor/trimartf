import React from 'react';
import "./AdminControlPage.css"

const AdminControlPage = () => {
    return (
        <div className='adminControl'>

            <div className='adminSidebar'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Order</a></li>
                <li><a href="/">Post</a></li>
            </div>
        </div>
    );
};

export default AdminControlPage;