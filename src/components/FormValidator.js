export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    //собираем все инпуты внутри формы в массив.
    this._inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    this._buttonElement = formElement.querySelector(settings.submitButtonSelector);
  };

  //метод, устанавливающий слушателей
  _setEventListeners() {
    // вызываем метод для проверки состояния кнопки submit
    this._handleButtonState();
    //на каждый инпут вешаем слушатель с колбеком, вызывающим метод _isValid.
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkIsInputValid(inputElement);
        this._handleButtonState();
      });
    });
  };

  //метод переключает состояние кнопки submit
  _handleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    };

  };

  disableSubmitButton() {
    this._buttonElement.classList.add('popup__submit-button_disabled');
    this._buttonElement.disabled = true;
  }

  //метод проверки каждого инпута на валидность в помощью метода массива .some()
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //метод проверяет валидность поля (при вводе символов)
  _checkIsInputValid(inputElement) {
    if (!inputElement.validity.valid) {
      // если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    }
    else {
      // если проходит валидацию, скроем ошибку
      this._hideInputError(inputElement);
    }
  };

  //метод добавляет класс с ошибкой и сообщение об ошибке
  _showInputError(inputElement, errorMessage) {
    const formError = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    // показываем сообщение об ошибке
    formError.textContent = errorMessage;
    formError.classList.add(this._settings.errorClass);
  };

  //метод удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const formError = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    // скрываем сообщение об ошибке
    formError.textContent = '';
    formError.classList.add(this._settings.errorClass);
  };

  //метод, включающий валидацию формы
  enableValidation() {
    this._setEventListeners();
  };
};
