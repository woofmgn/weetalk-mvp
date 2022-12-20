import profileIcon from "../../images/profile-icon.svg";
import "./styles.scss";

export const PromoProfile = () => {
  return (
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
  );
};
