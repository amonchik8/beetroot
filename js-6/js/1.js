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
// function needBuy() {
//   shoppingList.sort(function (a, b) {
//     if (a.buy > b.buy) {
//       return 1;
//     };
//     if (a.buy < b.buy) {
//       return -1;
//     };
//     return 0;
//   });
//   for (let i = 0; i < shoppingList.length; i++) {
//     alert(`${shoppingList[i].name}`);
//   };
// };
// needBuy();

/////2
// let buy = {
//   name: "meet",
//   amount: 1,
//   buy: false,
// };

// function addBuy(obj) {
//   const len = shoppingList.length;
//   let hasMatch = false;
//   for (let i = 0; i < len; i++) {
//     if (buy.name === shoppingList[i].name) {
//       shoppingList[i].amount += 1;
//       hasMatch = true;
//     };
//   };
//   if (!hasMatch) shoppingList.push(buy);
// };

// addBuy(buy);
// console.log(shoppingList);

/////3
let buy = {
    name: "milk",
    amount: 1,
    buy: false,
  };
function toBuy(name) {
  const len = shoppingList.length;
  for (let i = 0; i < len; i++) {
    if (shoppingList[i].name === name) {
      shoppingList[i].buy = true;
    };
  };    
};

toBuy(buy.name);
console.log(shoppingList);