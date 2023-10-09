import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards,
  editButton,
  addCardButton,
  cardsContainer,
  popupAddCard,
  popupEditProfile,
  popupZoomImage,
  newPlaceForm,
  profileForm,
  inputUsername,
  inputDescription,
  validationSettings} from '../utils/constants.js';

const newPlaceFormValidation = new FormValidator(validationSettings, newPlaceForm);
newPlaceFormValidation.enableValidation();

const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();


const popupWithImage = new PopupWithImage(popupZoomImage);
const popupAddPlace = new PopupWithForm(popupAddCard, (formData) => {
  handleAddCardFormSubmit(formData);
});
const popupEditForm = new PopupWithForm(popupEditProfile, (formData) => {
  handleEditFormSubmit(formData);
});

popupWithImage.setEventListeners();
popupAddPlace.setEventListeners();
popupEditForm.setEventListeners();


const userData = new UserInfo({
  userNameSelector: ".user-profile__name",
  profileInfoSelector: ".user-profile__description",
});

const defaultCards = new Section({
  data: initialCards,
  renderer: (itemData) => {
    const cardElement = newCard(itemData);
    defaultCards.addItem(cardElement);
    }
  },
  cardsContainer
);

//слушатель open popup AddCard
addCardButton.addEventListener("click", () => {
  popupAddPlace.open();
});

//функция для передачи данных в попап с картинкой, используется в конструкторе класса Card
const handleImagePopup = (imageTitle, imageLink) => {
  popupWithImage.open(imageTitle, imageLink);
};

// функция для создания экземпляра класса Card
const newCard = (cardData) => {
  const card = new Card(
    {data: cardData}
    ,handleImagePopup
    , '.place-template_type_default'
    );
  return card.generateCard();
};


//слушатель для open popup EditProfile
editButton.addEventListener("click", () => {
  popupEditForm.open();
  //присваиваем данные инпутам из текущей информации профиля
  const CurrentUserInfo = userData.getUserInfo();
  inputUsername.value = CurrentUserInfo.userName;
  inputDescription.value = CurrentUserInfo.userProfileInfo;
});

defaultCards.renderItems();

//функция добавления новой карточки на страницу
const handleAddCardFormSubmit = (formData) => {
  const cardData = {
    name: formData['placeTitle-input'],
    link: formData['placeLink-input'],
  };
  const cardElement = newCard(cardData);
  defaultCards.addItem(cardElement);
  // после создания карточки передаем кнопке состояние disabled
  newPlaceFormValidation.disableSubmitButton();
}

//функция редактирования профиля
const handleEditFormSubmit = (formData) => {
//присваиваем значения из инпутов
userData.setUserInfo({
  userName: formData['username-input'],
  userInfo: formData['description-input'],
});
}

