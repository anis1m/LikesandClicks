import React from "react";
import "../css_files/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Likes and Clicks</h1>
      <blockquote>
        <mark>
          <h3>Portfolio</h3>
          <i className="fa-solid fa-angle-down" />
        </mark>
        <mark>
          <h3>Services</h3>
          <i className="fa-solid fa-angle-down" />
        </mark>
        <mark>
          <h3>About Us</h3>
          <i className="fa-solid fa-angle-down" />
        </mark>
        <mark>
          <h3>Blog</h3>
          <i className="fa-solid fa-angle-down" />
        </mark>
        <mark>
          <h3>Contact Us</h3>
          <i className="fa-solid fa-arrow-right" />
        </mark>
      </blockquote>
    </nav>
  );
}

export default Navbar;
