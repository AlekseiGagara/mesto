export default class Api {
  constructor(settings) {
    this.settings = settings;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserData() {
    return fetch(`${this.settings.baseUrl}/users/me`,
    {headers: this.settings.headers })
      .then((res) => {
        return this._getResponseData(res);
      })
    }

  setUserData({name, about}) {
    return fetch(`${this.settings.baseUrl}/users/me`,{
    method: 'PATCH',
    headers: this.settings.headers,
    body: JSON.stringify({
      name: name,
      about: about,
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  setUserImage({avatar}) {
    return fetch(`${this.settings.baseUrl}/users/me/avatar`,{
    method: 'PATCH',
    headers: this.settings.headers,
    body: JSON.stringify({
      avatar: avatar,
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  addNewCard({name, link}) {
    return fetch(`${this.settings.baseUrl}/cards`,{
    method: 'POST',
    headers: this.settings.headers,
    body: JSON.stringify({
      name: name,
      link: link,
      })
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  getInitialCards() {
    return fetch(`${this.settings.baseUrl}/cards`,
    {headers: this.settings.headers })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  deleteCard(card) {
    return fetch(`${this.settings.baseUrl}/cards/${card._id}`,{
    method: 'DELETE',
    headers: this.settings.headers })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  setLike(card) {
    return fetch(`${this.settings.baseUrl}/cards/${card._id}/likes`,{
      method: 'PUT',
      headers: this.settings.headers
      })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  removeLike(card) {
    return fetch(`${this.settings.baseUrl}/cards/${card._id}/likes`,{
      method: 'DELETE',
      headers: this.settings.headers
      })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}
