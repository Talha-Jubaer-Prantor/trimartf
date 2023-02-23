import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const loggedData = JSON.parse(localStorage.getItem("loggedData"));

  const logOut = () => {
    localStorage.removeItem("loggedData");
    window.location.reload()
  };

  const LogBtn = () => {
    if (loggedData) {
      return (
        <>
          {" "}
          <li className="nav-item">
            <Link className="nav-link " to="/orders" style={{fontSize:"large",fontWeight:"bold"}}>
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/menu" style={{fontSize:"large",fontWeight:"bold"}}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{fontSize:"large",fontWeight:"bold"}} onClick={logOut} to="/">
              Logout
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link " to="/login" style={{fontSize:"large",fontWeight:"bold"}}>
            Login
          </Link>
        </li>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-header" style={{backgroundColor: "white"}}>
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            <img style={{ width: "200px",borderRadius:"15px" }} src="banerLogo.PNG" alt="" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{borderRadius: "5px",fontWeight:"bold"}}>
              <li className="nav-item ">
                <Link className="nav-link active" to="/" style={{fontSize:"large",fontWeight:"bold"}}>
                  Home
                </Link>
              </li>
              <LogBtn />
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about" style={{fontSize:"large",fontWeight:"bold"}}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h3 style={{textAlign:"center"}}>You have to pay advance 30% of ordered product</h3>
      </div>
    </div>
  );
};

export default Header;
