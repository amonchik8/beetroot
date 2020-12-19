"use strict";

const $button = document.getElementById("popup-button");
const $popup = document.getElementById("popup");
const $popupCloseButton = document.querySelector(".popup button");

const onPopupClose = () => {
  $popup.classList.remove("_active");
};

const showPopup = () => {
  $popup.classList.add("_active");
};

const hidePopup = () => {
  $popup.classList.remove("_active");
};

$button.addEventListener("click", () => {
  showPopup();
});

$popupCloseButton.addEventListener("click", onPopupClose);