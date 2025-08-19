import "../styles/Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = ({ toggleNavbar, navRef }) => {
  return (
    <nav className="navigation" ref={navRef}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" onClick={toggleNavbar}>
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/purchase"
            className="navigation__link"
            onClick={toggleNavbar}
          >
            Purchases
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" onClick={toggleNavbar}>
            Contact
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
