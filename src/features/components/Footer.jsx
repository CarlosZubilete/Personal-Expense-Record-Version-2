import "../styles/Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__section footer__about">
          <h2 className="footer__title">Contact Us</h2>
          <p className="footer__location">Argentina | Bs As | Tigre-Center</p>
          <p className="footer__email">
            <a href="mailto:carloszubiletesanhcez@gmail.com">
              carloszubiletesanhcez@
            </a>
          </p>
          <p className="footer__message">
            Thanks to see our website.
            <br />
            Si you like yours, ¡connect us!
          </p>
        </section>
        <section className="footer__section footer__links">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>
        </section>
        <section className="footer__section footer__social">
          <h2 className="footer__title">Follow Us</h2>
          <ul className="footer__social-list">
            <li>
              <a
                href="https://github.com/carloszubilete"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <FaGithub className="footer__icon" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carlos-zubilete-sanchez/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <FaLinkedin className="footer__icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/https://www.instagram.com/_zubiletecarlos/?next=%2F"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <FaInstagram className="footer__icon" /> Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 All rights reserved — Carlos Zubilete
        </p>
      </div>
    </footer>
  );
};
