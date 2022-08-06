import React from "react";

import Success from "../../images/success.svg";
import Fail from "../../images/fail.svg";

function InfoTooltip({ isOpen, onClose, name, userStatus }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} id={`popup-${name}`}>
      <div className="popup__content">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          src={`${userStatus ? Success : Fail}`}
          alt="Статус"
          className="popup__image"
        />
        <h3 className="popup__header popup__header_infotooltip">
          {userStatus
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
