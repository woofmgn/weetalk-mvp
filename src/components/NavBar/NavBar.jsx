import React from "react";
import { Link, useLocation } from "react-router-dom";
import adviseIcon from "../../images/navbar-advise-icon.svg";
import membersIcon from "../../images/navbar-member-icon.svg";
import profileIcon from "../../images/navbar-profile-icon.svg";
import likeIcon from "../../images/navbar-star-icon.svg";
import "./styles.scss";

export const NavBar = () => {
  let location = useLocation();
  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <ul className="navbar__list">
          <li
            className={`navbar__item ${
              location.pathname === "/main" ? "navbar__item_active" : null
            }`}
          >
            <Link to="/main" className="navbar__link">
              <img
                src={membersIcon}
                alt="Иконка сообщество"
                className="navbar__icon"
              />
            </Link>
          </li>
          <li
            className={`navbar__item ${
              location.pathname === "/favourites" ? "navbar__item_active" : null
            }`}
          >
            <Link to="/favourites" className="navbar__link">
              <img
                src={likeIcon}
                alt=" Иконка избранное"
                className="navbar__icon"
              />
            </Link>
          </li>
          <li
            className={`navbar__item ${
              location.pathname === "/advise" ? "navbar__item_active" : null
            }`}
          >
            <Link to="/advise" className="navbar__link">
              <img
                src={adviseIcon}
                alt="Иконка вопросы"
                className="navbar__icon"
              />
            </Link>
          </li>
          <li
            className={`navbar__item ${
              location.pathname === "/profile" ? "navbar__item_active" : null
            }`}
          >
            <Link to="/profile" className="navbar__link">
              <img
                src={profileIcon}
                alt="Иконка профиль"
                className="navbar__icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
