// массив со стартовыми карточками
export const initialCards = [
  {
    name: "Карачаевск",
    link: "https://alekseigagara.github.io/mesto/images/photo-grid-karachaevsk.jpg",
  },
  {
    name: "Гора Эльбрус",
    link: "https://alekseigagara.github.io/mesto/images/photo-grid-elbrus.jpg",
  },
  {
    name: "Домбай",
    link: "https://alekseigagara.github.io/mesto/images/photo-grid-dombai.jpg",
  },
  {
    name: "Гранд-Каньон",
    link: "https://alekseigagara.github.io/mesto/images/photo-grid-grand_canyon.jpg",
  },
  {
    name: "Каппадокия",
    link: "https://alekseigagara.github.io/mesto/images/photo-grid-capadocia.jpg",
  },
  {
    name: "Большое Алматинское озеро",
    link: "https://alekseigagara.github.io/mesto/images/photo-grid-BAO.jpg",
  },
];

// массив с настройками валидации
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
