import React from "react";
import "./styles.scss";

export const Card = ({ isColumn, name, avatar, about, lookingFor }) => {
  return (
    <li className={`card ${isColumn ? "card_type_one-column" : null}`}>
      <div
        className={`card__image-container ${
          isColumn ? "card__image-container_type_one-column" : null
        }`}
      >
        <img
          src={avatar}
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
          {name}
        </h4>
        <p
          className={`card__member-about ${
            isColumn ? "card__member-about_type_one-column" : null
          }`}
        >
          {about}
        </p>
        <button
          type="button"
          className={`card__member-button ${
            isColumn ? "card__member-button_type_active" : null
          }`}
        >
          {lookingFor}
        </button>
      </div>
    </li>
  );
};
