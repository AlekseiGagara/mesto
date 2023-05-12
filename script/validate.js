//функция собирает все инпуты в массив и методом forEach добавляет каждому слушатель с колбеком, вызывающим isValid
const setEventListeners = (formElement, validationSettings) => {
  //собираем все инпуты внутри формы в массив.
  const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
  const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationSettings);
  //на каждый инпут вешаем слушатель с колбеком, вызывающим функцию isValid.
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    buttonElement.disabled = false;
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//функция собирает все формы в DOM в массив и каждому элементу массива вызывает функцию setEventListeners.
const enableValidation = (validationSettings) => {
  //собираем все формы внутри DOM в массив.
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  //для каждой из форм в массиве вызываем функцию setEventListeners.
  formList.forEach((formElement) => {
    formElement.addEventListener('submit',(evt) => {
      evt.preventDefault();
      });
    setEventListeners(formElement, validationSettings);
  });
};

// функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
  const formError = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  // показываем сообщение об ошибке
  formError.textContent = errorMessage;
  formError.classList.add(validationSettings.errorClass);
};

// функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, validationSettings) => {
  const formError = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  // скрываем сообщение об ошибке
  formError.textContent = '';
  formError.classList.add(validationSettings.errorClass);
};

// функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, validationSettings) => {
  if (!inputElement.validity.valid) {
    // если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  }
  else {
    // если проходит валидацию, скроем ошибку
    hideInputError(formElement, inputElement, validationSettings);
  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
