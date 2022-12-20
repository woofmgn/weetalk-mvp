import membersIcon from "../../images/members-icon.svg";
import "./styles.scss";

export const PromoMembers = () => {
  return (
    <li className="hints-list__item">
      <div className="hints-list__wrapper">
        <img
          className="hints-list__icon"
          src={membersIcon}
          alt="Иконка группы пользователи, силуэты"
        />
      </div>
      <h2 className="hints-list__title">
        Здесь ты найдешь других участников мероприятия и узнаешь о них больше
      </h2>
    </li>
  );
};
