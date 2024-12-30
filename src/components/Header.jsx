import React from "react";
import navLinks from "../data/navLinks";
import ThemeToggle from "./ThemeToggle";

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img src="/logo-light.svg" alt="SimpleBlog logo" width="150" />
            <img src="/logo-dark.svg" alt="SimpleBlog logo" width="150" />
          </a>

          <div className="btn-group">
            <ThemeToggle toggleTheme={toggleTheme} />
          </div>

          <div className="flex-wrapper">
            <ul className="desktop-nav">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
