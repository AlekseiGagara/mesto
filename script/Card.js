export class Card {
  constructor(cardData, templateSelector) {
    this._title = cardData.name;
    this._src = cardData.link;
    this._alt = cardData.name;
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
  _generateCard() {
    // в поле _element элемент записываем разметку через метод getTemplate()
    this._element = this._getTemplate();
    this._setEventListeners();
    // присваиваем значения из конструктора нужным эелементам в разметке
    this._element.querySelector(".place__image").src = this._src;
    this._element.querySelector(".place__title").textContent = this._title;
    this._element.querySelector(".place__image").alt = this._alt;
    // возвращаем готовую к публикации карточку
    return this._element;
  };

  renderCard() {
    // создаем карточку и возращаем ее для публикации
    const cardElement = this._generateCard();
    const cardsContainer = document.querySelector(".places");
    // добавляем елемент в начало cardsContainer
    cardsContainer.prepend(cardElement);
  }

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
  }

  // метод для удаления карточки
  _handleDeleteCard() {
    this._element.remove();
  }

  // метод реализации функцционала кнопки like
  _handleLikeCard() {
    this._element.querySelector(".place__like-button")
    .classList.toggle("place__like-button_like-active");
  }
};
