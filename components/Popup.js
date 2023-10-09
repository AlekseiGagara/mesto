export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    this._popupOverlay = this._popup.querySelector(".popup__overlay");
  }
// метод для открытия попапа
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
// метод для закрытия попапа
  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }
// приватный метод для закрытия попапа при нажатии на клавишу ESC
  _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
      this.close();
      };
  }
// метод для слушателей попапа
  setEventListeners() {
    this._popupCloseButton.addEventListener( 'click', () => {
      this.close();
    })
    this._popupOverlay.addEventListener( 'click', () => {
      this.close();
    })
  }
}
