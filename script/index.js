import {FormValidator} from '../script/FormValidator.js';
import {Card} from '../script/Card.js';
import {initialCards} from '../script/constants.js';

// переменные для кнопок
const editButton = document.querySelector(".user-profile__edit-button");
const addCardButton = document.querySelector(".user-profile__add-button");
const popupCloseButtons = document.querySelectorAll(".popup__close-button");
const createButton = document.querySelector(".popup__submit-button_create");

// переменные для popup'ов и input'ов
const popupOverlays = document.querySelectorAll(".popup__overlay");
const popupAddCard = document.querySelector(".popup_add-card");
const popupEditProfile = document.querySelector(".popup_edit");
const newPlaceForm = document.querySelector('form[name="newPlaceForm"]');
const profileForm = document.querySelector('form[name="profileForm"]');
const inputUsername = document.querySelector(".popup__input_profile_username");
const inputDescription = document.querySelector(".popup__input_profile_description");
const userProfileName = document.querySelector(".user-profile__name");
const userProfileDescription = document.querySelector(".user-profile__description");
const inputPlaceTitle = document.querySelector(".popup__input_place_title");
const inputPlaceImageLink = document.querySelector(".popup__input_place_link");


// массив с настройками валидации
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//функция открытия popup
const openPopup = (popupType) => {
  popupType.classList.add("popup_opened");
  //добавляем слушатель нажатия Ecs и закрытия popup
  document.addEventListener("keydown", handleEscape);
};

// цикл для добавления стартовых карточек
//с использованием информации из массива initialCards
initialCards.forEach((itemData) => {
  // создаем экземпляр карточки из класса Card
  const card = new Card(itemData, '.place-template_type_default');
  // публикуем карточку
  card.renderCard();
});

//close popup
const closePopup = (popupType) => {
  popupType.classList.remove("popup_opened");
  //удаляем слушатель нажатия Ecs и закрытия popup
  document.removeEventListener("keydown", handleEscape);
};

//цикл для кнопок закрытия, где выбирается ближайший popup к слушателю
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", function (evt) {
    const popup = evt.target.closest(".popup");
    closePopup(popup);
  });
});

//закрытие popup по клику на оверлей
popupOverlays.forEach((overlay) => {
  overlay.addEventListener("click", function (evt) {
    const popup = evt.target.closest(".popup");
    closePopup(popup);
  });
});

//функция закрытия popup при нажатии Esc
const handleEscape = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

//функция редактирования профиля
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  //присваиваем значения из инпутов
  userProfileName.textContent = inputUsername.value;
  userProfileDescription.textContent = inputDescription.value;
  //закрываем popup
  const popup = evt.target.closest(".popup");
  closePopup(popup);
}

//функция добавления новой карточки на страницу
const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  //создаем объект с данными для создания экземпляра Card
  const cardData = {
    name: inputPlaceTitle.value,
    link: inputPlaceImageLink.value,
  };
  // создаем экземпляр карточки из класса Card
  const card = new Card(cardData, '.place-template_type_default');
  // публикуем карточку
  card.renderCard();
  // закрываем popup
  closePopup(popupAddCard);
  // после создания карточки передаем кнопке состояние disabled
  newPlaceFormValidation.disableSubmitButton();
  // сбрасываем значения инпутов в форме
  evt.target.reset();
}

//слушатели события на кнопках submit
profileForm.addEventListener("submit", handleEditFormSubmit);
newPlaceForm.addEventListener("submit", handleAddCardFormSubmit);

//слушатель open popup AddCard
addCardButton.addEventListener("click", () => openPopup(popupAddCard));

//слушатель для open popup EditProfile
editButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  //присваиваем данные инпутам из текущей информации профиля
  inputUsername.value = userProfileName.textContent;
  inputDescription.value = userProfileDescription.textContent;
});

const newPlaceFormValidation = new FormValidator(validationSettings, newPlaceForm);
newPlaceFormValidation.enableValidation();

const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();



