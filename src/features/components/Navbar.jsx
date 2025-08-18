import "../styles/Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = ({ toggleNavbar, navRef }) => {
  return (
    <nav className="navbar container" ref={navRef}>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" onClick={toggleNavbar}>
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={toggleNavbar}>
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={toggleNavbar}>
            Contact
          </Link>
        </li>

        {/* Responsive */}
        <button
          className="navbar__btn navbar__btn--close"
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </ul>
    </nav>
  );
};
