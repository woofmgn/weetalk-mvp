import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import "./styles.scss";

export const Card = ({
  isColumn,
  name,
  avatar,
  about,
  lookingFor,
  id,
  owner,
  likes,
  isLiked,
  onSetIsLiked,
}) => {
  const [like, setLike] = useState(false);

  const handlerSetLikeCard = async () => {
    const liked = likes.some((item) => item === owner);
    api
      .toggleLikeCard(liked, id, owner)
      .then(() => {
        onSetIsLiked();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const liked = likes.some((item) => item === owner);
    if (liked) {
      setLike((prev) => !prev);
      console.log(like);
    }
  }, []);

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
          onClick={handlerSetLikeCard}
          className={`card__like-button ${like && "card__like-button_active"} ${
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
