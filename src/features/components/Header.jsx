import "../styles/Header.css";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { useRef } from "react";
import Logo from "../../assets/spend-svg-com.svg";
export const Header = ({ isDarkMode, toggleTheme }) => {
  const navRef = useRef();
  const toggleNavbar = () => {
    navRef.current.classList.toggle("navbar--responsive");
  };
  return (
    <header className="header container">
      {/* Logo */}
      <div className="header__logo">
        <img src={Logo} alt="logo" className="header__log__img" />
      </div>
      {/* Dark/Light */}
      <button className="header__btn" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      {/* Only shows mode responsive */}
      <button className="header__btn header__btn--menu" onClick={toggleNavbar}>
        <FaBars />
      </button>
      {/* Menu */}
      <Navbar toggleNavbar={toggleNavbar} navRef={navRef} />
    </header>
  );
};
