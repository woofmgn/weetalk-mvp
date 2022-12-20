import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";

export const Favourites = ({
  membersCards,
  owner,
  isColumn,
  onSetIsColumn,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLikedCard, setIsLikedCard] = useState(null);

  const handleSetIsLiked = () => {
    setIsLiked((prev) => !prev);
  };

  const handleSetIsColumn = () => {
    onSetIsColumn();
  };

  const filteredCard = () => {
    const likedCard = membersCards.filter((item) => {
      return item.likes.some((i) => i === owner);
    });
    console.log(likedCard);
    setIsLikedCard(likedCard);
  };

  useEffect(() => {
    filteredCard();
  }, []);
  return (
    <section className="members">
      <div className="members__wrapper">
        <div className="page-header">
          <h3 className="page-header__title">Участники мероприятия</h3>
          <button
            onClick={handleSetIsColumn}
            className={`page-header__group-button ${
              isColumn
                ? "page-header__group-button_active"
                : "page-header__group-button_inactive"
            }`}
            type="button"
          />
        </div>
        <ul
          className={`card-list ${
            isColumn ? "card-list_type_one-column" : null
          }`}
        >
          {isLikedCard &&
            isLikedCard.map((item) => {
              return (
                <Card
                  key={item._id}
                  name={item.name}
                  avatar={item.avatar}
                  about={item.about}
                  lookingFor={item.lookingFor}
                  isColumn={isColumn}
                  id={item.id}
                  owner={owner}
                  likes={item.likes}
                  isLiked={isLiked}
                  onSetIsLiked={handleSetIsLiked}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
};
