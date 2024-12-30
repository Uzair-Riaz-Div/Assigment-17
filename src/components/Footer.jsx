import React from "react";
import socialLinks from "../data/socialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <a href="#" className="footer-logo">
            <img src="/logo-light.svg" alt="SimpleBlog Logo" width="150" />
          </a>
          <p className="footer-text">
            Learn about Web accessibility, Web performance, and Database
            management.
          </p>
        </div>
        <div className="wrapper">
          <p className="footer-title">Let's Talk</p>
          <ul className="social-link">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={`icon-box ${link.className}`}>
                  <ion-icon name={link.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="copyright">© Copyright 2024 SimpleBlog</p>
    </footer>
  );
};

export default Footer;
