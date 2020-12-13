"use strict";

const shoppingList = [
  {
    name: "beer",
    amount: 2,
    buy: true,
  },
  {
    name: "meet",
    amount: 2,
    buy: true,
  },
  {
    name: "milk",
    amount: 2,
    buy: false,
  },
];

/////1
function needBuy(arr) {
  arr.sort(function (a, b) {
    if (a.buy > b.buy) {
      return 1;
    }
    if (a.buy < b.buy) {
      return -1;
    }
    return 0;
  });
  arr.forEach((item, index, arr) => {
    alert(shoppingList[index].name);
  });
};

/////2
let buy = {
  name: "meet",
  amount: 1,
  buy: false,
};

function addBuy(obj) {
  let hasMatch = false;
  shoppingList.forEach((item, index, arr) => {
    if (obj.name === shoppingList[index].name) {
      shoppingList[index].amount += 1;
      hasMatch = true;
    };
  });
  if (!hasMatch) shoppingList.push(buy);
};

/////3
function toBuy(name) {
    shoppingList.forEach((item, index, arr) => {
      if (shoppingList[index].name === name) {
        shoppingList[index].buy = true;
      };
    });
};