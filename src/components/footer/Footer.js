import React from "react";
import "./footer.css";
import { PageViewCounts } from "./PageViewCounts";


const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Obaid</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/ubisage/"
            className="footer__social-link"
            target={"blank"}
          >
            <i className='bx bxl-instagram' ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/obaid-ashiq-809b20252/"
            className="footer__social-link"
            target={"blank"}
          >
            <i className='bx bxl-linkedin' ></i>
          </a>
          <a
            href="https://github.com/ubisage"
            className="footer__social-link"
            target={"blank"}
          >
            <i className='bx bxl-github'></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100090654915074"
            className="footer__social-link"
            target={"blank"}
          >
            <i className='bx bxl-facebook' ></i>
          </a>
        </div>
        <span className="footer__copyright">&#169; UBISAGE- <em>"you can use it as your portfolio"</em></span>
        <span className="footer__pageViewCount footer__copyright">

          <PageViewCounts/>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
