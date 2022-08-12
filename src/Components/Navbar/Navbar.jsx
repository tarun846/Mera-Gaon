import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>OYODO</h1>
          </div>

          <div className="navlinks">
            <ul>
              <li>Home</li>
              <li>Dapibus</li>
              <li>Ultrices</li>
              <li>Bibendum</li>
              <li>Magna</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
