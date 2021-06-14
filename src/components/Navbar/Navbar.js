import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navBar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          navBar
            ? "navbar active navbar-expand-lg fixed-top"
            : "navbar navbar-expand-lg fixed-top"
        }
      >
        <div className="container">
          <Link to="/" className="navbar-brand" href="#page-top" id="brand">
            <img
              src="../../image/logo-Bakery-01.png"
              width="30"
              height="35"
              className="d-inline-block align-top js-scroll-trigger"
              alt=""
            />
            BAKERY
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <Link
                  to="/products"
                  style={{ textDecoration: "none" }}
                  className="nav-link js-scroll-trigger"
                  
                  id="navItem"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#services"
                  id="navItem"
                >
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#team"
                  id="navItem"
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#contact"
                  id="navItem"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-link js-scroll-trigger"
                  href="#cart"
                  id="navItem"
                >
                  Cart
                </Link>
              </li>
              <span style={{ margin: "0 0 0 100px" }}></span>
              <br />
              <li className="nav-item">
                <Link to="/signin">
                  <button
                    className="btn"
                    href="#"
                    id={navBar ? "navButtonActive" : "navButton"}
                  >
                    Sign In
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
