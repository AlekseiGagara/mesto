(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._buttonElement=n.querySelector(t.submitButtonSelector)}var n,r;return n=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._handleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkIsInputValid(t),e._handleButtonState()}))}))}},{key:"_handleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkIsInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._settings.inputErrorClass),t.textContent="",t.classList.remove(this._settings.errorClass)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n,r,o,i,u,a){var c=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=c.name,this._src=c.link,this._alt=c.name,this._likesArr=c.likes,this._id=c._id,this._myUserId=u,this._ownerID=c.owner._id,this._handleCardClick=n,this._handleDeletePopup=r,this._setLikeCallback=o,this._removeLikeCallback=i,this._templateSelector=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".place__image").src=this._src,this._element.querySelector(".place__title").textContent=this._title,this._element.querySelector(".place__image").alt=this._alt,this._element.id=this._id,this._element.ownerId=this._ownerID,this._element.querySelector(".place__like-counter").textContent="".concat(this._likesArr.length),this._showLikedCards(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".place__like-button").addEventListener("click",(function(){e._handleLikeCard()})),this._element.querySelector(".place__delete-button").addEventListener("click",(function(){e._handleDeleteCard()})),this._element.querySelector(".place__image").addEventListener("click",(function(){e._handleImagePopup()}))}},{key:"_handleImagePopup",value:function(){this._handleCardClick(this._title,this._src)}},{key:"_handleDeleteCard",value:function(){this._handleDeletePopup(this)}},{key:"_showLikedCards",value:function(){this._isLikedByMe()&&this._element.querySelector(".place__like-button").classList.add("place__like-button_like-active")}},{key:"_isLikedByMe",value:function(){var e=this;return this._likesArr.some((function(t){return t._id===e._myUserId}))}},{key:"updateLikes",value:function(e){this._likesArr=e.likes,this._element.querySelector(".place__like-counter").textContent="".concat(e.likes.length)}},{key:"_handleLikeCard",value:function(){this._isLikedByMe()?this._removeLikeCallback(this):this._setLikeCallback(this)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}var p=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=f(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._popupOverlay=this._popup.querySelector(".popup__overlay")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popupOverlay.addEventListener("click",(function(){e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageCaption=t._popup.querySelector(".popup__image-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupImageCaption.textContent=e,h(b(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._confirmationCallback=t,n._confirmationButton=n._popup.querySelector(".popup__submit-button"),n._card=null,n}return t=u,(n=[{key:"open",value:function(e){this._card=e,S(w(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;S(w(u.prototype),"setEventListeners",this).call(this),this._confirmationButton.addEventListener("click",(function(){e._confirmationCallback(e._card)}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallback=t,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;O(L(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues())}))}},{key:"close",value:function(){O(L(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var x=function(){function e(t){var n=t.userNameSelector,r=t.profileInfoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfileInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userProfileInfo:this._userProfileInfo.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._userName.textContent=t,this._userProfileInfo.textContent=n,this._userAvatar.src=r}},{key:"setAvatar",value:function(e){var t=e.avatar;this._userAvatar.src=t}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=t}var t,n;return t=e,(n=[{key:"getUserData",value:function(){return fetch("".concat(this.settings.baseUrl,"/users/me"),{headers:this.settings.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"setUserData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.settings.baseUrl,"/users/me"),{method:"PATCH",headers:this.settings.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"setUserImage",value:function(e){var t=e.avatar;return fetch("".concat(this.settings.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.settings.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.settings.baseUrl,"/cards"),{method:"POST",headers:this.settings.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.settings.baseUrl,"/cards"),{headers:this.settings.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.settings.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this.settings.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"setLike",value:function(e){return fetch("".concat(this.settings.baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this.settings.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this.settings.baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this.settings.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=document.querySelector(".user-profile__edit-button"),V=document.querySelector(".user-profile__add-button"),M=document.querySelector(".user-profile__image-edit-icon"),J=document.querySelector('form[name="newPlaceForm"]'),z=document.querySelector('form[name="profileForm"]'),F=document.querySelector('form[name="editUserImage"]'),H=document.querySelector(".popup__input_profile_username"),$=document.querySelector(".popup__input_profile_description"),G=new n(A,J);G.enableValidation(),new n(A,z).enableValidation();var K=new n(A,F);K.enableValidation();var Q=new d(".popup_zoom-image"),W=new I(".popup_add-card",(function(e){re(e),W.close()})),X=new I(".popup_edit",(function(e){te(e),X.close()})),Y=new I(".popup_user-image",(function(e){ne(e),Y.close()})),Z=new j(".popup_confirm",(function(e){se(e)}));Q.setEventListeners(),W.setEventListeners(),X.setEventListeners(),Y.setEventListeners(),Z.setEventListeners();var ee=new x({userNameSelector:".user-profile__name",profileInfoSelector:".user-profile__description",avatarSelector:".user-profile__image"});M.addEventListener("click",(function(){Y.open()})),N.addEventListener("click",(function(){X.open();var e=ee.getUserInfo();H.value=e.userName,$.value=e.userProfileInfo}));var te=function(e){var t=document.querySelector('[aria-label="сохранить-профиль"]');oe(!0,t,"Сохранить"),pe.setUserData({name:e["username-input"],about:e["description-input"]}).then((function(e){ee.setUserInfo(e)})).catch((function(e){console.log("Ошибка при редактировании профиля",e)})).finally((function(){oe(!1,t,"Сохранить")}))},ne=function(e){var t=document.querySelector('[aria-label="сохранить-аватар"]');oe(!0,t,"Сохранить"),pe.setUserImage({avatar:e["userImageLink-input"]}).then((function(e){ee.setAvatar(e),K.disableSubmitButton()})).catch((function(e){console.log("Ошибка при изменении аватара",e)})).finally((function(){oe(!1,t,"Сохранить")}))},re=function(e){var t=document.querySelector('[aria-label="создать"]');oe(!0,t,"Создать"),pe.addNewCard({name:e["placeTitle-input"],link:e["placeLink-input"]}).then((function(e){var t=fe(e);ye.addItem(t),G.disableSubmitButton()})).catch((function(e){console.log("Ошибка при добавлении карточки",e)})).finally((function(){oe(!1,t,"Создать")}))};function oe(e,t,n){t.textContent=e?"Сохранение...":n}var ie,ue=function(e,t){Q.open(e,t)},ae=function(e){Z.open(e)},ce=function(e){pe.setLike(e).then((function(t){e._element.querySelector(".place__like-counter").textContent="".concat(t.likes.length),e._element.querySelector(".place__like-button").classList.add("place__like-button_like-active"),e.updateLikes(t)})).catch((function(e){console.log("Ошибка при добавлении лайка",e)}))},le=function(e){pe.removeLike(e).then((function(t){e._element.querySelector(".place__like-counter").textContent="".concat(t.likes.length),e._element.querySelector(".place__like-button").classList.remove("place__like-button_like-active"),e.updateLikes(t)})).catch((function(e){console.log("Ошибка при удалении лайка",e)}))},se=function(e){pe.deleteCard(e).then((function(){e._element.remove(),e._element=null,Z.close()})).catch((function(e){console.log("Ошибка при удалении карточки",e)}))},fe=function(e){return new i({data:e},ue,ae,ce,le,ie,".place-template_type_default").generateCard()},pe=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-77",headers:{authorization:"48764543-f2b3-448b-a918-5c4dcafe4f65","Content-Type":"application/json"}});Promise.all([pe.getInitialCards(),pe.getUserData()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ie=i._id,ee.setUserInfo(i),ye.renderItems(o)})).catch((function(e){console.log("Ошибка получения информации от сервера",e)}));var ye=new c({renderer:function(e){var t=fe(e);e.owner._id!==ie&&(t.querySelector(".place__delete-button").style.display="none"),ye.addItem(t)}},".places");V.addEventListener("click",(function(){W.open()}))})();