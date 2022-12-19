import React, { useState } from "react";
import anna from "../../images/anna.png";
import iren from "../../images/iren.png";
import vika from "../../images/vika.png";
import "./styles.scss";

export const Main = () => {
  const [isColumn, setIsColumn] = useState(false);

  return (
    <section className="members">
      <div className="members__wrapper">
        <div className="page-header">
          <h3 className="page-header__title">Участники мероприятия</h3>
          <button
            onClick={() => setIsColumn((prev) => !prev)}
            className="page-header__group-button"
            type="button"
          />
        </div>
        <ul
          className={`card-list ${
            isColumn ? "card-list_type_one-column" : null
          }`}
        >
          <li className={`card ${isColumn ? "card_type_one-column" : null}`}>
            <div
              className={`card__image-container ${
                isColumn ? "card__image-container_type_one-column" : null
              }`}
            >
              <img
                src={anna}
                alt="Фото участника или участницы"
                className={`card__image ${
                  isColumn ? "card__image_type_one-column" : null
                }`}
              />
              <button
                className={`card__like-button ${
                  isColumn ? "card__like-button_type_one-column" : null
                }`}
              />
            </div>
            <div
              className={`card__wrapper ${
                isColumn ? "card__wrapper_type_one-column" : null
              }`}
            >
              <h4
                className={`card__member-name ${
                  isColumn ? "card__member-name_type_one-column" : null
                }`}
              >
                Анна Макарова
              </h4>
              <p
                className={`card__member-about ${
                  isColumn ? "card__member-about_type_one-column" : null
                }`}
              >
                Менеджер в РусАгро
              </p>
              <button
                type="button"
                className={`card__member-button ${
                  isColumn ? "card__member-button_type_active" : null
                }`}
              >
                Цель на мероприятие
              </button>
            </div>
          </li>
          <li className={`card ${isColumn ? "card_type_one-column" : null}`}>
            <div
              className={`card__image-container ${
                isColumn ? "card__image-container_type_one-column" : null
              }`}
            >
              <img
                src={iren}
                alt="Фото участника или участницы"
                className={`card__image ${
                  isColumn ? "card__image_type_one-column" : null
                }`}
              />
              <button
                className={`card__like-button ${
                  isColumn ? "card__like-button_type_one-column" : null
                }`}
              />
            </div>
            <div
              className={`card__wrapper ${
                isColumn ? "card__wrapper_type_one-column" : null
              }`}
            >
              <h4
                className={`card__member-name ${
                  isColumn ? "card__member-name_type_one-column" : null
                }`}
              >
                Анна Макарова
              </h4>
              <p
                className={`card__member-about ${
                  isColumn ? "card__member-about_type_one-column" : null
                }`}
              >
                Менеджер в РусАгро
              </p>
              <button
                type="button"
                className={`card__member-button ${
                  isColumn ? "card__member-button_type_active" : null
                }`}
              >
                Цель на мероприятие
              </button>
            </div>
          </li>
          <li className={`card ${isColumn ? "card_type_one-column" : null}`}>
            <div
              className={`card__image-container ${
                isColumn ? "card__image-container_type_one-column" : null
              }`}
            >
              <img
                src={vika}
                alt="Фото участника или участницы"
                className={`card__image ${
                  isColumn ? "card__image_type_one-column" : null
                }`}
              />
              <button
                className={`card__like-button ${
                  isColumn ? "card__like-button_type_one-column" : null
                }`}
              />
            </div>
            <div
              className={`card__wrapper ${
                isColumn ? "card__wrapper_type_one-column" : null
              }`}
            >
              <h4
                className={`card__member-name ${
                  isColumn ? "card__member-name_type_one-column" : null
                }`}
              >
                Анна Макарова
              </h4>
              <p
                className={`card__member-about ${
                  isColumn ? "card__member-about_type_one-column" : null
                }`}
              >
                Менеджер в РусАгро
              </p>
              <button
                type="button"
                className={`card__member-button ${
                  isColumn ? "card__member-button_type_active" : null
                }`}
              >
                Цель на мероприятие
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
