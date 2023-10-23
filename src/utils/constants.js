// массив с настройками валидации
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// массив с настройками Api
export const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '48764543-f2b3-448b-a918-5c4dcafe4f65',
    'Content-Type': 'application/json'
  },
};


