import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jagdish Harwani</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/jagdishharwani2002/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          {/* <a
            href="https://linktr.ee/atharva_uwu"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bx-link-alt"></i>
          </a> */}

          <a
            href="https://github.com/jagdishharwani2001"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Jagdish Harwani😎. All rights reserved

        </span>
      </div>
    </footer>
  );
};

export default Footer;
