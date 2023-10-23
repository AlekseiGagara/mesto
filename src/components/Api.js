export default class Api {
  constructor(settings) {
    this.settings = settings;
  }

  getUserData() {
    return fetch(`${this.settings.baseUrl}/users/me`,
    {headers: this.settings.headers })
      .then((res) => {
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
        }
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
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
        }
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
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
        }
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
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
      }
    })
  }

  getInitialCards() {
    return fetch(`${this.settings.baseUrl}/cards`,
    {headers: this.settings.headers })
    .then((res) => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
      }
    })
  }

  deleteCard(card) {
    return fetch(`${this.settings.baseUrl}/cards/${card._id}`,{
    method: 'DELETE',
    headers: this.settings.headers })
    .then((res) => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
      }
    })
  }

  setLike(card) {
    return fetch(`${this.settings.baseUrl}/cards/${card._id}/likes`,{
      method: 'PUT',
      headers: this.settings.headers
      })
      .then((res) => {
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
        }
      })
  }

  removeLike(card) {
    return fetch(`${this.settings.baseUrl}/cards/${card._id}/likes`,{
      method: 'DELETE',
      headers: this.settings.headers
      })
      .then((res) => {
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
        }
      })
  }
}
