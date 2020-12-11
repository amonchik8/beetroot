"use strict";

let check = [
  {
    name: "milk",
    amount: 1,
    price: 20,
  },
  {
    name: "beer",
    amount: 2,
    price: 80,
  },
  {
    name: "cheese",
    amount: 3,
    price: 30,
  },
];

/////1
function printOnScreen() {
  let i = 0;
  let arr = [];
  for (i = 0; i < check.length; i++) {
    arr.push(check[i].name, check[i].amount, check[i].price);
  };
  let str = arr.join(" ");
  alert(str);
};

/////2
function sumBuy(arr) {
  let price = arr.map((item) => item.price * item.amount);
  let sum = 0;
  price.forEach(function (item) {
    sum += item;
  });
  return sum;
};

/////3
function getMostExpensiveBuy(arr) {
  arr.sort((a, b) => b.price * b.amount - a.price * a.amount);
  alert(`${arr[0].name}, ${arr[0].amount}, ${arr[0].price}`);
};

/////4
function sumAmout(arr) {
  let amoutArr = arr.map((item) => item.amount);
  let amout = 0;
  amoutArr.forEach(function (item) {
    amout += item;
  });
  return amout;
};

function averageCost(arr) {
  let avr = sumBuy(arr) / sumAmout(arr);
  return avr;
};