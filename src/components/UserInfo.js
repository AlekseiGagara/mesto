export default class UserInfo {
  constructor({userNameSelector, profileInfoSelector, avatarSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userProfileInfo = document.querySelector(profileInfoSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userName : this._userName.textContent,
      userProfileInfo : this._userProfileInfo.textContent,
    };
  }

  setUserInfo({name, about, avatar}) {
    this._userName.textContent = name;
    this._userProfileInfo.textContent = about;
    this._userAvatar.src = avatar;
  }

  setAvatar({avatar}) {
    this._userAvatar.src = avatar;
  }

}

