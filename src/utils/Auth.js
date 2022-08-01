export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
  };

export const register = ({ username, password, email }) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: 
      {'Content-type': 'application/json'},
      body: JSON.stringify({ username, password, email }),
    })
      .then(res => checkResponse(res));
  };

