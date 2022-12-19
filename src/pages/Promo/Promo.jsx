import React from "react";
import { useNavigate } from "react-router-dom";
import adviseIcon from "../../images/advise-icon.svg";
import likeIcon from "../../images/like-icon.svg";
import membersIcon from "../../images/members-icon.svg";
import profileIcon from "../../images/profile-icon.svg";
import "../Promo/styles.scss";

export const Promo = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <section className="promo" onClick={handleClick}>
      <div className="promo__wrapper">
        <h1 className="promo__title">Привет, {currentUser}</h1>
        <p className="promo__description">
          Внизу находится описание каждого раздела нашего сервиса
        </p>
        <ul className="hints-list">
          <li className="hints-list__item">
            <div className="hints-list__wrapper">
              <img
                className="hints-list__icon"
                src={membersIcon}
                alt="Иконка группы пользователи, силуэты"
              />
            </div>
            <h2 className="hints-list__title">
              Здесь ты найдешь других участников мероприятия и узнаешь о них
              больше
            </h2>
          </li>
          <li className="hints-list__item">
            <div className="hints-list__wrapper">
              <img
                className="hints-list__icon"
                src={likeIcon}
                alt="Иконка группы избранное, звезда"
              />
            </div>
            <h2 className="hints-list__title">
              В этом разделе будут только те участники, которых ты выберешь
            </h2>
          </li>
          <li className="hints-list__item">
            <div className="hints-list__wrapper">
              <img
                className="hints-list__icon"
                src={adviseIcon}
                alt="Иконка группы инструкции, вопросительный знак"
              />
            </div>
            <h2 className="hints-list__title">
              Тут мы оставили пару полезных советов для знакомств
            </h2>
          </li>
          <li className="hints-list__item">
            <div className="hints-list__wrapper">
              <img
                className="hints-list__icon"
                src={profileIcon}
                alt="Иконка группы прифиль, силуэт пользователя"
              />
            </div>
            <h2 className="hints-list__title">
              Здесь можно будет изменить информацию о себе и поменять свое фото
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
};
