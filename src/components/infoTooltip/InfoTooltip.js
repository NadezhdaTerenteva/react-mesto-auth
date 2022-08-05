import React from "react";

import Success from "../../images/success.svg";
import Fail from "../../images/fail.svg";

function InfoTooltip ({isOpen, onClose, name, isLoggedIn}) {

  return (
  <div className={`popup ${isOpen && "popup_opened"}`} id={`popup-${name}`}>
      <div className="popup__content">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img src={`${isLoggedIn ? Success : Fail }`} alt="Статус" className="popup__image" />
        <h3 className="popup__header popup__header_infotooltip">{isLoggedIn ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h3>
      </div>
    </div>
  );
   
}

export default InfoTooltip;