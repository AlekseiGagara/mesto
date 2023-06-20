export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  };

  //метод, устанавливающий слушателей
  _setEventListeners() {
      //собираем все инпуты внутри формы в массив.
    const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    // вызываем метод для проверки состояния кнопки submit
    this._handleButtonState(inputList, buttonElement);
    //на каждый инпут вешаем слушатель с колбеком, вызывающим метод _isValid.
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkIsInputValid(inputElement);
        this._handleButtonState(inputList, buttonElement);
      });
    });
  };

  //метод переключает состояние кнопки submit
  _handleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    };

  };

  //метод проверки каждого инпута на валидность в помощью метода массива .some()
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
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
