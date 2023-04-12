const editButton = document.querySelector(".user-profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const inputUsername = document.querySelector(".popup__input_username");
const inputDescription = document.querySelector(".popup__input_description");
const userProfileName = document.querySelector(".user-profile__name");
const userProfileDescription = document.querySelector(".user-profile__description");

function openPopup () {
  popup.classList.add ("popup_opened");
  inputUsername.value = userProfileName.textContent;
  inputDescription.value = userProfileDescription.textContent;
};

function closePopup () {
  popup.classList.remove("popup_opened");
};

function handleFormSubmit (evt) {
    evt.preventDefault();
    userProfileName.textContent = inputUsername.value;
    userProfileDescription.textContent = inputDescription.value;
    closePopup ();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
