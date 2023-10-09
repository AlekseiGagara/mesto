import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._formElement = this._popup.querySelector('.popup__form'); // находим форму в попапе
    this._inputList = this._formElement.querySelectorAll('.popup__input'); //достаем список всех инпутов в форме
  }
  // метод для получения данных всех инпутов в объект
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  //наследуемые слушатели от родителя и слушатель сабмита формы,
  //вызывающий колбэк с данными полученными из инпутов в _getInputValues
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
