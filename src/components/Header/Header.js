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
            <Link className="nav-link " to="/orders">
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{color:"red"}} onClick={logOut} to="/">
              Logout
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link " to="/login">
            Login
          </Link>
        </li>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white nav-header">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            <img style={{ width: "200px" }} src="banerLogo.PNG" alt="" />{" "}
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
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item ">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/orders">
                  Orders
                </Link>
              </li> */}
              <LogBtn />
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <marquee style={{"color":"red","fontSize":"20px"}} behavior="scroll" direction="left">You have to pay advance 30% amount of ordered product. To know more about our terms and condition please click on about section</marquee>
    </div>
  );
};

export default Header;
