"use strict";

const $textDiv = document.querySelector(".textdiv");
const $textArea = document.querySelector(".textarea");

const showTextArea = () => {
  $textArea.classList.add("_visible");
  $textDiv.classList.add("_hide");
};

const hideTextArea = () => {
  $textArea.classList.remove("_visible");
  $textDiv.classList.remove("_hide");
};

document.addEventListener("keydown", (e) => {
  $textArea.innerHTML = $textDiv.innerHTML;
  if ((e.code === "KeyE" || e.code === "Comma") && e.ctrlKey)
    e.preventDefault();
  if (e.code === "KeyE" && e.ctrlKey) {
    showTextArea();
  };
  let editText = $textArea.value;
  if (e.code === "Comma" && e.ctrlKey) {
    hideTextArea();
    $textDiv.innerHTML = editText;
  };
});