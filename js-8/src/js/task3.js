"use strict";

const $buttonRed = document.getElementById("button-red");
const $buttonYellow = document.getElementById("button-yellow");
const $buttonGreen = document.getElementById("button-green");

const $red = document.getElementById("red");
const $yellow = document.getElementById("yellow");
const $green = document.getElementById("green");

const toggleRed = () => {
  $red.classList.add("_active");
  $yellow.classList.remove("_active");
  $green.classList.remove("_active");
  $buttonRed.classList.add("_active");
  $buttonYellow.classList.add("_active");
};

$buttonRed.addEventListener("click", () => {
  toggleRed();
});

const toggleYellow = () => {
  $red.classList.remove("_active");
  $yellow.classList.add("_active");
  $green.classList.remove("_active");
  $buttonYellow.classList.remove("_active");
  $buttonGreen.classList.add("_active");
};

$buttonYellow.addEventListener("click", () => {
  toggleYellow();
});

const toggleGreen = () => {
  $red.classList.remove("_active");
  $yellow.classList.remove("_active");
  $green.classList.add("_active");
  $buttonGreen.classList.remove("_active");
  $buttonRed.classList.remove("_active");
};

$buttonGreen.addEventListener("click", () => {
  toggleGreen();
});
