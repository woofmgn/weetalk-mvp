import React from "react";
import { useNavigate } from "react-router-dom";
import { PromoAdvise } from "../../components/PromoList/PromoAdvise";
import { PromoFavourites } from "../../components/PromoList/PromoFavourites";
import { PromoMembers } from "../../components/PromoList/PromoMembers";
import { PromoPreview } from "../../components/PromoList/PromoPreview";
import { PromoProfile } from "../../components/PromoList/PromoProfile";
import "../Promo/styles.scss";

export const Promo = ({ currentUser, onSetCount, count }) => {
  const navigate = useNavigate();

  const handlerClickSlide = () => {
    if (count === 4) {
      navigate("/main");
      onSetCount();
      return;
    }
    onSetCount();
  };

  return (
    <section className="promo" onClick={handlerClickSlide}>
      <div className="promo__wrapper">
        <h1 className="promo__title">Привет, {currentUser}</h1>
        <p className="promo__description">
          Внизу находится описание каждого раздела нашего сервиса
        </p>
        <ul className="hints-list">
          {count === 0 ? (
            <PromoPreview />
          ) : count === 1 ? (
            <PromoMembers />
          ) : count === 2 ? (
            <PromoFavourites />
          ) : count === 3 ? (
            <PromoAdvise />
          ) : count === 4 ? (
            <PromoProfile />
          ) : null}
        </ul>
      </div>
    </section>
  );
};
