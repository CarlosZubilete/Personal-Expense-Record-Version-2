import { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../styles/UserMenu.css";
import { useAuthContext } from "../../account/context/useAuthContext";

export const UserMenu = () => {
  const { handleLoginOut, username } = useAuthContext();
  const [open, setOpen] = useState(false);

  console.log("UserMenu - username:", username); // Debug log

  // If no user is logged in, don't show the menu
  if (!username) return null;

  const handleLogout = () => {
    setOpen(false);
    handleLoginOut();
  };

  return (
    <div className="user-menu">
      <button className="user-menu__btn" onClick={() => setOpen(!open)}>
        <FaUserCircle className="user-menu__icon" />
        <span className="user-menu__name">{username}</span>
      </button>

      {open && (
        <div className="user-menu__dropdown">
          <ul className="user-menu__list">
            <li className="user-menu__item">
              <button
                className="user-menu__link user-menu__link--danger"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="user-menu__item-icon" />
                <span>Cerrar sesión</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
