import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer__links">
          <li className="footer__link">
            <a href="!#">About</a>
          </li>
          <li className="footer__link">
            <a href="!#">Blog</a>
          </li>
          <li className="footer__link">
            <a href="!#">FAQs</a>
          </li>
          <li className="footer__link">
            <a href="!#">Order Tracking</a>
          </li>
          <li className="footer__link">
            <a href="!#">Contact</a>
          </li>
          <li className="footer__link">
            <span>&copy; By</span>
            <a href="!#">NordicMade</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="!#" className="footer__social">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="!#" className="footer__social">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="!#" className="footer__social">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
