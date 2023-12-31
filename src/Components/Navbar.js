import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <Link to={"/"}>CodeGraphics</Link>{" "}
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link className="nav-link" to={"/"}>
            {" "}
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
