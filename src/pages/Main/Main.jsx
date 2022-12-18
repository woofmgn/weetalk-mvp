import React from "react";
import anna from "../../images/anna.png";
import "./styles.scss";

export const Main = () => {
  return (
    <section className="members">
      <div className="members__wrapper">
        <div className="page-header">
          <h3 className="page-header__title">Участники мероприятия</h3>
          <button className="page-header__group-button" type="button" />
        </div>
        <ul className="card-list">
          <li className="card">
            <div className="card__image-container">
              <img
                src={anna}
                alt="Фото участника или участницы"
                className="card__image"
              />
              <button className="card__like-button"></button>
            </div>
            <div className="card__wrapper">
              <h4 className="card__member-name">Анна Макарова</h4>
              <p className="card__member-about">Менеджер в РусАгро</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
