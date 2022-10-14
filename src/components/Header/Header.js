import React from 'react';
import './Header.css';

const Header = () => {

  

  const loggedData=JSON.parse(localStorage.getItem('loggedData'))


  const logOut=()=>{
      localStorage.removeItem('loggedData')
  }

  const LogBtn=()=>{
    if(loggedData){
      return (<> <li className="nav-item">
          <a className="nav-link "  href='/menu' >Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " onClick={logOut} href='/' >Logout</a>
      </li></>) 
    }else{
     return (<li className="nav-item">
          <a className="nav-link " href='/login'>Login</a>
        </li>) 
    }
  }

  


  

    return (
        <nav className='header'>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="/"><h1>Trimart</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item ">
          <a className="nav-link active" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/orders">Orders</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/inventory">Inventory</a>
        </li> */}
      <LogBtn/>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </nav>
    );
};

export default Header;

{/* <h1>Okorma Shop</h1>
<div>
    <Link to="/shop">Shop</Link>
    <Link to="/orders">Orders</Link>
    <Link to="/inventory">Inventory</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">About</Link>
    <Link to="/orders">Review Order</Link>
</div> */}