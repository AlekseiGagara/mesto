import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, confirmationCallback) {
    super(popupSelector);
    this._confirmationCallback = confirmationCallback;
    this._confirmationButton = this._popup.querySelector('.popup__submit-button');
    this._card = null;
  }

  open(card) {
    this._card = card; // Запоминаем переданную карточку
    super.open();
  }

  //наследуемые слушатели от родителя и слушатель,
  //вызывающий колбэк c запросом на удаление
  setEventListeners() {
    super.setEventListeners();
    this._confirmationButton.addEventListener("click", () => {
      this._confirmationCallback(this._card); //вызываем колбек из конструктора с карточкой переданной при открытии Popup
    });
  }
}
