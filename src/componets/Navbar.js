import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expend-lg navbar-dark bg-dark py-2 ps-5">
      <Link to="/" className="navbar-brand ml-5">
        Contact Manager
      </Link>
    </nav>
  );
};

export default Navbar;
