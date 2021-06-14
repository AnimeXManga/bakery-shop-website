import React from "react";
import { Link } from "react-router-dom";
import "./stickyitem.css";
const stickyitem = () => {
  return (
    <>
      <div className="cart">
        {" "}
        <Link to="/cart">
          <i className="fa fa-shopping-cart"></i>Buy Theme
        </Link>
      </div>
      <div className="mail">
        {" "}
        <Link to="/messenger">
          <i className="fa fa-envelope"></i>Quick Question{" "}
        </Link>{" "}
      </div>
    </>
  );
};

export default stickyitem;
