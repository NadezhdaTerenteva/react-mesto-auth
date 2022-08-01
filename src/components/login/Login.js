import React from "react";

function Login() {
    return (
      <div className="login">
        <h3 className="login__header">Вход</h3>
        <form className="login__form">
          <input 
          className="login__input" 
          type="email"
          name="email"
          placeholder="Email"
          required>
          </input>
          <input 
          className="login__input" 
          type="password"
          name="password"
          placeholder="Пароль"
          required>
          </input>
          <button className="login__submit-button" type="submit">Войти</button>
        </form>
      </div>  
    )
}

export default Login;