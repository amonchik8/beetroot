"use strict";

const styles = [
  {
    name: "color",
    meaning: "red",
  },
  {
    name: "font-size",
    meaning: "20px",
  },
  {
    name: "text-align",
    meaning: "center",
  },
];

const showText = (arr, text) => {
  const newStyles = arr.reduce(
    (sum, el) => `${sum}${el?.name}: ${el?.meaning};`, "");
  document.write(`<p style = "${newStyles}">${text}</p>`);
};

showText(styles, "Текст");