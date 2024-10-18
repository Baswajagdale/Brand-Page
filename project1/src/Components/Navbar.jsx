import React from "react";


const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
        <li><a href="/">Menu</a></li>
        <li><a href="/location">Location</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
        <button><a href="/login">Login</a></button>
      </nav>
     
    </div>
  );
};

export default Navbar;
