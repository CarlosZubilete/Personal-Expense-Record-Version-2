import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export const NavBar = ({ toggleNavbar, navRef }) => {
  return (
    <nav className="navigation" ref={navRef}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" onClick={toggleNavbar}>
            Inicio
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/purchase-page"
            className="navigation__link"
            onClick={toggleNavbar}
          >
            Gastos
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/about-us"
            className="navigation__link"
            onClick={toggleNavbar}
          >
            Nosotros
          </Link>
        </li>

        {/* Responsive */}
        <button
          className="navigation__btn navigation__btn--close"
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </ul>
    </nav>
  );
};
