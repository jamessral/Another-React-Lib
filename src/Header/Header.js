import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ brandName = "My App", theme = "dark" }) => {
  return (
    <div>
      <nav>
        <ul className={theme}>
          <li>
            <div className="brand">{brandName}</div>
          </li>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#posts">Posts</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  brandName: PropTypes.string.isRequired,
  theme: PropTypes.string
};

export default Header;
