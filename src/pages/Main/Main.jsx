import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import "./styles.scss";

export const Main = ({
  onGetMembersCards,
  membersCards,
  owner,
  isColumn,
  onSetIsColumn,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleSetIsLiked = () => {
    setIsLiked((prev) => !prev);
  };

  const handleSetIsColumn = () => {
    onSetIsColumn();
  };

  useEffect(() => {
    onGetMembersCards();
  }, [isLiked]);
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
          {membersCards.map((item) => {
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
                onSetIsLiked={handleSetIsLiked}
                onGetMembersCards={onGetMembersCards}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
