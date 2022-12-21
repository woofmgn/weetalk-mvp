import React from "react";
import { Link, useLocation } from "react-router-dom";
import adviseIconActive from "../../images/navbar-advise-icon-active.svg";
import adviseIcon from "../../images/navbar-advise-icon.svg";
import membersIconActive from "../../images/navbar-member-icon-active.svg";
import membersIcon from "../../images/navbar-member-icon-inactive.svg";
import profileIconActive from "../../images/navbar-profile-icon-active.svg";
import profileIcon from "../../images/navbar-profile-icon-inactive.svg";
import likeIconActive from "../../images/navbar-star-icon-active.svg";
import likeIcon from "../../images/navbar-star-icon.svg";
import "./styles.scss";

export const NavBar = ({ count }) => {
  let location = useLocation();

  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <ul className="navbar__list">
          <li
            className={`navbar__item ${
              count === 1 ? "navbar__item_active" : null
            }`}
          >
            <Link to="/main" className="navbar__link">
              <img
                src={
                  location.pathname === "/main"
                    ? membersIconActive
                    : membersIcon
                }
                alt="Иконка сообщество"
                className="navbar__icon"
              />
              <span
                className={`navbar__link-description ${
                  location.pathname === "/promo"
                    ? "navbar__link-description_inactive"
                    : null
                }`}
              >
                Другие гости
              </span>
            </Link>
          </li>
          <li
            className={`navbar__item ${
              count === 2 ? "navbar__item_active" : null
            }`}
          >
            <Link to="/favourites" className="navbar__link">
              <img
                src={
                  location.pathname === "/favourites"
                    ? likeIconActive
                    : likeIcon
                }
                alt=" Иконка избранное"
                className="navbar__icon"
              />
              <span
                className={`navbar__link-description ${
                  location.pathname === "/promo"
                    ? "navbar__link-description_inactive"
                    : null
                }`}
              >
                Избранное
              </span>
            </Link>
          </li>
          <li
            className={`navbar__item ${
              count === 3 ? "navbar__item_active" : null
            }`}
          >
            <Link to="/advise" className="navbar__link">
              <img
                src={
                  location.pathname === "/advise"
                    ? adviseIconActive
                    : adviseIcon
                }
                alt="Иконка вопросы"
                className="navbar__icon"
              />
              <span
                className={`navbar__link-description ${
                  location.pathname === "/promo"
                    ? "navbar__link-description_inactive"
                    : null
                }`}
              >
                Советы
              </span>
            </Link>
          </li>
          <li
            className={`navbar__item ${
              count === 4 ? "navbar__item_active" : null
            }`}
          >
            <Link to="/profile" className="navbar__link">
              <img
                src={
                  location.pathname === "/profile"
                    ? profileIconActive
                    : profileIcon
                }
                alt="Иконка профиль"
                className="navbar__icon"
              />
              <span
                className={`navbar__link-description ${
                  location.pathname === "/promo"
                    ? "navbar__link-description_inactive"
                    : null
                }`}
              >
                Мой профиль
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
