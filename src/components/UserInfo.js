export default class UserInfo {
  constructor({userNameSelector, profileInfoSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userProfileInfo = document.querySelector(profileInfoSelector);
  }

  getUserInfo() {
    return {
      userName : this._userName.textContent,
      userProfileInfo : this._userProfileInfo.textContent,
    };
  }

  setUserInfo({userName, userInfo}) {
    this._userName.textContent = userName;
    this._userProfileInfo.textContent = userInfo;
  }

}

