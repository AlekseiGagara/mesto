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

// переменные для кнопок
export const editButton = document.querySelector(".user-profile__edit-button");
export const addCardButton = document.querySelector(".user-profile__add-button");
//контейнер для карточек
export const cardsContainer = ".places";

// переменные для popup'ов и input'ов
export const popupAddCard = ".popup_add-card";
export const popupEditProfile = ".popup_edit";
export const popupZoomImage = ".popup_zoom-image";

export const newPlaceForm = document.querySelector('form[name="newPlaceForm"]');
export const profileForm = document.querySelector('form[name="profileForm"]');
export const inputUsername = document.querySelector(".popup__input_profile_username");
export const inputDescription = document.querySelector(".popup__input_profile_description");

// массив с настройками валидации
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
