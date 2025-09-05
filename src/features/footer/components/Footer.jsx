import "../styles/Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* FooterAbout */}
        <section className="footer__section footer__about">
          <h2 className="footer__title">¡Conversemos!</h2>
          <p className="footer__location">📍 Tigre - Buenos Aires, Argentina</p>
          <p className="footer__email">
            <a href="mailto:carloszubiletesanhcez@gmail.com">
              📩 carloszubiletesanchez@gmail.com
            </a>
          </p>
          <p className="footer__message">
            Gracias por visitar nuestra aplicación.
            <br /> <br />
            De tus sueños al mundo digital,
            <strong> solo nos separa un click. </strong>
          </p>
        </section>
        {/* FooterLink */}
        <section className="footer__section footer__links">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            <li>
              <Link to="/" className="footer__link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/purchase-page" className="footer__link">
                Gastos
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="footer__link">
                Nosotros
              </Link>
            </li>
          </ul>
        </section>
        {/* FooterSocial */}
        <section className="footer__section footer__social">
          <h2 className="footer__title">Siguenos</h2>
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
                href="https://www.instagram.com/_zubiletecarlos/?next=%2F"
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
      {/* FooterCopyRight */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 All rights reserved — Carlos Zubilete
        </p>
      </div>
    </footer>
  );
};
