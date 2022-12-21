import likeIcon from "../../images/like-icon.svg";
import "./styles.scss";

export const PromoFavourites = () => {
  return (
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
  );
};
