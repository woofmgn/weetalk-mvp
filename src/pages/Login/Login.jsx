import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../utils/api";
import { setStorageUser } from "../../utils/storage";
import "./styles.scss";

export const Login = ({ onChangeUserData }) => {
  const navigate = useNavigate();
  const [changeAvatar, setChangeAvatar] = useState("");
  const [changeName, setChangeName] = useState("");
  const [changeAbout, setChangeAbout] = useState("");
  const [changeLookingFor, setChangeLookingFor] = useState("");

  const hangleChangeAvatar = (evt) => {
    setChangeAvatar(() => evt.target.value);
  };

  const handleChangeName = (evt) => {
    setChangeName(() => evt.target.value);
  };

  const handleChangeAbout = (evt) => {
    setChangeAbout(() => evt.target.value);
  };

  const handleChangeLookingFor = (evt) => {
    setChangeLookingFor(() => evt.target.value);
  };

  const handleSubmit = async (evt) => {
    const ownerId = uuidv4();
    evt.preventDefault();
    try {
      const res = await api.createUser({
        name: changeName,
        avatar:
          "http://timix.nios.ru/sites/timix.nios.ru/files/images/248a5579.jpg",
        about: changeAbout,
        lookingFor: changeLookingFor,
        _id: ownerId,
      });
      onChangeUserData(res);
      navigate("/promo");
      setStorageUser(ownerId);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__photo-title">Добавьте Ваше фото</h2>
        <label className="login-form__photo-label">
          <input
            type="file"
            name="login-form__photo-input"
            onChange={hangleChangeAvatar}
          />
          <span className="login-form__photo-cover"></span>
        </label>
        <p className="login-form__photo-description">
          Выберите фотографию на которой хорошо видно ваше лицо, а если вы
          сегодня в ударе, то лучше всего сделать селфи
        </p>
        <fieldset className="user-form">
          <div className="user-form__form-wrapper">
            <div className="user-form__input-wrapper">
              <label forhtml="username" className="user-form__label">
                Как вас зовут?
              </label>
              <input
                type="text"
                className="user-form__input user-form__input-name"
                id="username"
                onChange={handleChangeName}
              />
            </div>
            <div className="user-form__input-wrapper">
              <label forhtml="username" className="user-form__label">
                Расскажите о себе
              </label>
              <textarea
                rows="4"
                type="text"
                className="user-form__input user-form__input-name"
                id="username"
                onChange={handleChangeAbout}
              />
            </div>
            <div className="user-form__input-wrapper">
              <label forhtml="username" className="user-form__label">
                Почему вы пришли сюда
              </label>
              <input
                type="text"
                className="user-form__input user-form__input-name"
                id="username"
                onChange={handleChangeLookingFor}
              />
            </div>
          </div>
        </fieldset>
        <button type="sumbit" className="login-form__submit-button">
          Найти новых людей
        </button>
      </form>
    </section>
  );
};
