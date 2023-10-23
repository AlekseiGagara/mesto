import './index.css';
import FormValidator from '../components/FormValidator';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {validationSettings, apiSettings} from '../utils/constants.js';

//контейнер для карточек
const cardsContainer = ".places";

// переменные для popup'ов и input'ов
const popupAddCard = ".popup_add-card";
const popupEditProfile = ".popup_edit";
const popupZoomImage = ".popup_zoom-image";
const popupEditAvatar = ".popup_user-image";
const popupConfirmDeleting = ".popup_confirm";

// переменные для кнопок
const editButton = document.querySelector(".user-profile__edit-button");
const addCardButton = document.querySelector(".user-profile__add-button");
const editAvatar = document.querySelector(".user-profile__image-edit-icon");
const editProfileSubmitButton = document.querySelector('[aria-label="сохранить-профиль"]');
const avatarSubmitButton = document.querySelector('[aria-label="сохранить-аватар"]');
const addCardSubmitButton = document.querySelector('[aria-label="создать"]');
const confirmatiobButton = document.querySelector('[aria-label="согласие"]');

const newPlaceForm = document.querySelector('form[name="newPlaceForm"]');
const profileForm = document.querySelector('form[name="profileForm"]');
const UserImageForm = document.querySelector('form[name="editUserImage"]');
const inputUsername = document.querySelector(".popup__input_profile_username");
const inputDescription = document.querySelector(".popup__input_profile_description");

const newPlaceFormValidation = new FormValidator(validationSettings, newPlaceForm);
newPlaceFormValidation.enableValidation();

const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();

const editAvatarFormValidation = new FormValidator(validationSettings, UserImageForm);
editAvatarFormValidation.enableValidation();

const popupWithImage = new PopupWithImage(popupZoomImage);

const popupAddPlace = new PopupWithForm(popupAddCard, (formData) => {
  handleAddCardFormSubmit(formData);
});
const popupEditForm = new PopupWithForm(popupEditProfile, (formData) => {
  handleEditFormSubmit(formData);
});
const popupEditUserImage = new PopupWithForm(popupEditAvatar, (formData) => {
  handleAvatarFormSubmit(formData);
});
const popupDeleteConfirmation = new PopupWithConfirmation(popupConfirmDeleting, (cardItem) => {
  deleteCard(cardItem);
});

popupWithImage.setEventListeners();
popupAddPlace.setEventListeners();
popupEditForm.setEventListeners();
popupEditUserImage.setEventListeners();
popupDeleteConfirmation.setEventListeners();


const profileData = new UserInfo({
  userNameSelector: ".user-profile__name",
  profileInfoSelector: ".user-profile__description",
  avatarSelector: ".user-profile__image"
});

//слушатель для open popup Avatar
editAvatar.addEventListener("click", () => {
  popupEditUserImage.open();
  editAvatarFormValidation.disableSubmitButton();
});

//слушатель для open popup EditProfile
editButton.addEventListener("click", () => {
  popupEditForm.open();
  //присваиваем данные инпутам из текущей информации профиля
  const currentUserInfo = profileData.getUserInfo();
  inputUsername.value = currentUserInfo.userName;
  inputDescription.value = currentUserInfo.userProfileInfo;
});

//слушатель open popup AddCard
addCardButton.addEventListener("click", () => {
  popupAddPlace.open();
  newPlaceFormValidation.disableSubmitButton();
});


//функция редактирования профиля
const handleEditFormSubmit = (formData) => {
  renderLoading(true, editProfileSubmitButton, "Сохранить", "Сохранение...");
  api.setUserData({
    name: formData['username-input'],
    about: formData['description-input'],
  })
    .then((data) => {
      profileData.setUserInfo(data);
      popupEditForm.close();
    })
    .catch((error) => {
      console.log('Ошибка при редактировании профиля',error);
    })
    .finally(() => {
      renderLoading(false, editProfileSubmitButton, "Сохранить", "Сохранение...")
    })
  }

//функция редактирования Аватара
const handleAvatarFormSubmit = (formData) => {
  renderLoading(true, avatarSubmitButton, "Сохранить", "Сохранение...");
  api.setUserImage({
    avatar: formData['userImageLink-input'],
  })
    .then((data) => {
      profileData.setAvatar(data);
      popupEditUserImage.close();
    })
    .catch((error) => {
      console.log('Ошибка при изменении аватара',error);
    })
    .finally(() => {
      renderLoading(false, avatarSubmitButton, "Сохранить", "Сохранение...")
    })
  }

//функция добавления новой карточки на страницу
const handleAddCardFormSubmit = (formData) => {
  renderLoading(true, addCardSubmitButton, "Создать", "Сохранение...");
  api.addNewCard({
    name: formData['placeTitle-input'],
    link: formData['placeLink-input'],
  })
    .then((receivedData) => {
      const cardElement = newCard(receivedData);
      defaultCards.addItem(cardElement);
      popupAddPlace.close();
    })
    .catch((error) => {
      console.log('Ошибка при добавлении карточки', error);
    })
    .finally(() => {
      renderLoading(false, addCardSubmitButton, "Создать", "Сохранение...");
    })
  };

  //функция для улучшения UX и добавления имитации загрузки
function renderLoading(isLoading, button, initialText, loadingText) {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = initialText;
  }
}

//функция для передачи данных в попап с картинкой, используется в конструкторе класса Card
const handleImagePopup = (imageTitle, imageLink) => {
  popupWithImage.open(imageTitle, imageLink);
};

const handleDeletePopup = (card) => {
  popupDeleteConfirmation.open(card);
};

//функция для установки лайка
const setLike = (card) => {
  api.setLike(card)
    .then((res) => {
      card.updateLikes(res);
    })
    .catch((error) => {
      console.log('Ошибка при добавлении лайка', error);
    })
};

//функция для удаления лайка
const removeLike = (card) => {
  api.removeLike(card)
    .then((res) => {
      card.updateLikes(res);
    })
    .catch((error) => {
      console.log('Ошибка при удалении лайка', error);
    })
};

//функция для удаления карточки
const deleteCard = (card) => {
  renderLoading(true, confirmatiobButton, "Да", "Удаление...");
  api.deleteCard(card)
    .then(() => {
      card.deleteCard();
      popupDeleteConfirmation.close();
    })
    .catch((error) => {
      console.log('Ошибка при удалении карточки',error);
    })
    .finally(() => {
      renderLoading(false, confirmatiobButton, "Да", "Удаление...");
    })
};

// функция для создания экземпляра класса Card
const newCard = (cardData) => {
  const card = new Card(
    {data: cardData}
    ,handleImagePopup
    ,handleDeletePopup
    ,setLike
    ,removeLike
    ,myUserId
    , '.place-template_type_default'
    );
  return card.generateCard();
};

const api = new Api(apiSettings);
let myUserId;

Promise.all([
  api.getInitialCards(),
  api.getUserData()])
  .then(([cards, userInfo]) => {
    myUserId = userInfo._id;
    profileData.setUserInfo(userInfo);
    defaultCards.renderItems(cards);
  })
  .catch((error) => {
    console.log('Ошибка получения информации от сервера',error);
  });

const defaultCards = new Section({
  renderer: (itemData) => {
    const cardElement = newCard(itemData);
    defaultCards.addItem(cardElement);
    }
  },
  cardsContainer
);


