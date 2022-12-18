import React from "react";
import "./styles.scss";

export const Login = () => {
  return (
    <section className="login">
      <form className="login-form">
        <h2 className="login-form__photo-title">Добавьте Ваше фото</h2>
        <label className="login-form__photo-label">
          <input type="file" name="login-form__photo-input" required />
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
