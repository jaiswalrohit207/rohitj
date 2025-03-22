import React from "react";
import "./../styles.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">ROHIT.</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="contact-btn">Let's Talk</button>
    </header>
  );
}

export default Header;
