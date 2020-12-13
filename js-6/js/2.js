"use strict";

let check = [
  {
    name: "milk",
    amount: 2,
    price: 40,
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
function printOnScreen(arr) {
  let resultArr = [];
  arr.forEach((item, index, arr) => {
    resultArr.push(arr[index].name, arr[index].amount, arr[index].price);
  });
  const str = resultArr.join(" ");
  alert(str);
}

/////2
const sumBuy = (arr) => {
  return arr.reduce(
    (sum, item, index, array) => sum + arr[index].price * arr[index].amount, 0);
};


/////3
function getMostExpensiveBuy(arr) {
  arr.sort((a, b) => b.price * b.amount - a.price * a.amount);
  alert(`${arr[0].name}, ${arr[0].amount}, ${arr[0].price}`);
};

/////4
const sumAmout =(arr) => {
  return arr.reduce(
    (sum, item, index, array) => sum + arr[index].amount, 0);
};

function averageCost(arr) {
  let avr = sumBuy(arr) / sumAmout(arr);
  return avr;
};