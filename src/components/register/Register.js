import React from "react";

function Register() {
    return (
    <div className="register">
        <h3 className="register__header">Регистрация</h3>
        <div className="register__form">
          <input 
          className="register__input" 
          type="email"
          name="email"
          placeholder="Email"
          required>
          </input>
          <input 
          className="register__input" 
          type="password"
          name="password"
          placeholder="Пароль"
          required>
          </input>
          <button className="register__submit-button" type="submit">Зарегистрироваться</button>
        </div>
        <h4 className="register__caption">Уже зарегистрированы? Войти</h4>
    </div>
    );
}

export default Register;