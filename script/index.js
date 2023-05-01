// переменные для кнопок
const editButton = document.querySelector(".user-profile__edit-button");
const addCardButton = document.querySelector(".user-profile__add-button");
const popupCloseButtons = document.querySelectorAll(".popup__close-button");
// переменные для popup'ов и input'ов
const popupAddCard = document.querySelector(".popup_add-card");
const popupEditProfile = document.querySelector(".popup_edit");
const popupZoomImage = document.querySelector(".popup_zoom-image");
const popupImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__image-caption");
const addForm = document.querySelector('form[name="addNewPlaceForm"]');
const editForm = document.querySelector('form[name="editProfileForm"]');
const inputUsername = document.querySelector(".popup__input_profile_username");
const inputDescription = document.querySelector(".popup__input_profile_description");
const userProfileName = document.querySelector(".user-profile__name");
const userProfileDescription = document.querySelector(".user-profile__description");
const inputPlaceTitle = document.querySelector(".popup__input_place_title");
const inputPlaceImageLink = document.querySelector(".popup__input_place_link");
// переменные для добавления карточек в places
const placeTemplate = document.querySelector("#place-template");
const cardsContainer = document.querySelector(".places");
// массив со стартовыми карточками
const initialCards = [
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
//функция создания новой карточки с обработчиком для Zoom по клику на фото
function createCard(data) {
  const cardElement = placeTemplate.content.cloneNode(true);
  const placeTitle = cardElement.querySelector(".place__title");
  const placeImage = cardElement.querySelector(".place__image");
  placeTitle.textContent = data.name;
  placeImage.src = data.link;
  placeImage.alt = data.name;
  placeImage.addEventListener("click", () => {
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupImageCaption.textContent = data.name;
    openPopup(popupZoomImage);
  });
  return cardElement;
}

// цикл для автоматического добавления стартовых карточек с использованием информации из массива
initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData);
  // добавляем карточку в начало контейнера
  cardsContainer.prepend(cardElement);
});

//функция добавления новой карточки на страницу
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  //создаем объект с данными для функции createCard
  const cardData = {
    name: inputPlaceTitle.value,
    link: inputPlaceImageLink.value,
  };
  const cardElement = createCard(cardData);
  // добавляем карточку в начало контейнера
  cardsContainer.prepend(cardElement);
  //закрываем popup
  const popup = evt.target.closest(".popup");
  closePopup(popup);
}

//слушатель для open popup EditProfile
editButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  //присваиваем данные инпутам из текущей информации профиля
  inputUsername.value = userProfileName.textContent;
  inputDescription.value = userProfileDescription.textContent;
});

//слушатель open popup AddCard
addCardButton.addEventListener("click", () => openPopup(popupAddCard));

//функция открытия popup
function openPopup(popupType) {
  popupType.classList.add("popup_opened");
}

//цикл для кнопок закрытия, где выбирается ближайший popup к слушателю
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", function (evt) {
    const popup = evt.target.closest(".popup");
    closePopup(popup);
  });
});

//функция редактирования профиля
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  //присваиваем значения из инпутов
  userProfileName.textContent = inputUsername.value;
  userProfileDescription.textContent = inputDescription.value;
  //закрываем popup
  const popup = evt.target.closest(".popup");
  closePopup(popup);
}

//close popup
function closePopup(popupType) {
  popupType.classList.remove("popup_opened");
}

//слушатели события на кнопках submit
editForm.addEventListener("submit", handleEditFormSubmit);
addForm.addEventListener("submit", handleAddCardFormSubmit);

//функция и слушатель для лайков
cardsContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("place__like-button")) {
    evt.target.classList.toggle("place__like-button_like-active");
  }
});
//функция и слушатель для удаления
cardsContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("place__delete-button")) {
    const placeElement = evt.target.closest(".place");
    placeElement.remove();
  }
});
