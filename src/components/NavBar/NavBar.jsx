import React from "react";
import adviseIcon from "../../images/navbar-advise-icon.svg";
import membersIcon from "../../images/navbar-member-icon.svg";
import profileIcon from "../../images/navbar-profile-icon.svg";
import likeIcon from "../../images/navbar-star-icon.svg";
import "./styles.scss";

export const NavBar = () => {
  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <ul className="navbar__list">
          <li className="navbar__item">
            <img
              src={membersIcon}
              alt="Иконка сообщество"
              className="navbar__icon"
            />
          </li>
          <li className="navbar__item">
            <img
              src={likeIcon}
              alt=" Иконка избранное"
              className="navbar__icon"
            />
          </li>
          <li className="navbar__item">
            <img
              src={adviseIcon}
              alt="Иконка вопросы"
              className="navbar__icon"
            />
          </li>
          <li className="navbar__item">
            <img
              src={profileIcon}
              alt="Иконка профиль"
              className="navbar__icon"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
};
