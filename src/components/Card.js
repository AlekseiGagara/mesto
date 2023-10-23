export default class Card {
  constructor({data: cardData}, handleCardClick, handleDeletePopup, setLike, removeLike, myUserId, templateSelector) {
    this._title = cardData.name;
    this._src = cardData.link;
    this._alt = cardData.name;
    this._likesArr = cardData.likes;
    this._id = cardData._id;
    this._myUserId = myUserId;
    this._ownerID = cardData.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeletePopup = handleDeletePopup;
    this._setLikeCallback = setLike;
    this._removeLikeCallback = removeLike;
    this._templateSelector = templateSelector;
  };

  // метод для получения разметки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".place")
    .cloneNode(true);

    return cardElement;
  };

  // метод подготовки к публикации, добавляем данные в разметку
  generateCard() {
    // в поле _element элемент записываем разметку через метод getTemplate()
    this._element = this._getTemplate();
    this._setEventListeners();
    // присваиваем значения из конструктора нужным эелементам в разметке
    this._element.querySelector(".place__image").src = this._src;
    this._element.querySelector(".place__title").textContent = this._title;
    this._element.querySelector(".place__image").alt = this._alt;
    this._element.id = this._id;
    this._element.ownerId = this._ownerID;
    this._element.querySelector(".place__like-counter").textContent = `${this._likesArr.length}`;
    this._showLikedCards();
    // возвращаем готовую к публикации карточку
    return this._element;
  };

  // метод для добавления слушателей событий карточке в generateCard()
  _setEventListeners() {
    //слушатель для кнопки like
    this._element.querySelector(".place__like-button")
    .addEventListener("click", () => {
      this._handleLikeCard();
    });
   // слшуатель для кнопки delete
    this._element.querySelector(".place__delete-button")
    .addEventListener("click", () => {
      this._handleDeleteCard();
    });
   // слушатель popup Image
    this._element.querySelector(".place__image")
    .addEventListener("click", () => {
      this._handleImagePopup();
    });
  }

  // метод для открытия popup Image
  _handleImagePopup() {
    this._handleCardClick(this._title, this._src);
  }

  // метод для удаления карточки
  _handleDeleteCard() {
    this._handleDeletePopup(this);
  }

  //метод для отрисовки лайков загруженным карточкам
  _showLikedCards() {
    if(this._isLikedByMe()) {
      this._element.querySelector(".place__like-button")
      .classList.add("place__like-button_like-active");
    }
  }

  //метод проверки поставлен ли лайк
  _isLikedByMe() {
    return (this._likesArr.some(user => user._id === this._myUserId));
  }

  //метод для обновления лайков на странице после ответа сервера
  updateLikes(newLikesData) {
    this._likesArr = newLikesData.likes;
    this._element.querySelector(".place__like-counter").textContent = `${newLikesData.likes.length}`;
  }

  // метод реализации функцционала кнопки like
  _handleLikeCard() {
    if(!this._isLikedByMe()) {
      this._setLikeCallback(this);
    } else {
      this._removeLikeCallback(this);
    }
  }
};
