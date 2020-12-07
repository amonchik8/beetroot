"use strict";

let check = [
  {
    name: "milk",
    amount: 1,
    price: 20,
  },
  {
    name: "beer",
    amount: 1,
    price: 40,
  },
  {
    name: "cheese",
    amount: 1,
    price: 60,
  },
];

function printOnScreen() {
  let i = 0;
  let arr = [];
  for (i = 0; i < check.length; i++) {
    arr.push(check[i].name, check[i].amount, check[i].price);
  };
  let str = arr.join(" ");
  alert(str);
};

printOnScreen();