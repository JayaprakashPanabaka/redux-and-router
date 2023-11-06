import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav-items">
        <div className="logo-section">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <h2 className="logo-text">Wave</h2>
        </div>

        <ul className="items">
          <li>
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
