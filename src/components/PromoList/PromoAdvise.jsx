import adviseIcon from "../../images/advise-icon.svg";
import "./styles.scss";

export const PromoAdvise = () => {
  return (
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
  );
};
