"use strict";

const car = {
  Manufacturer: 'Toyota',
  Model: 'Supra',
  Year: 2004,
  "averageSpeed": 100,
};

function getInfo(obj) {
  for (let key in obj) {
    alert( `${key}: ${obj[key]}`);
  };
};

function getTime(distance, speed) {
  let time = distance / speed;
  for (let i = 1; i <= time; i++) {
    if (i % 5 === 0 ){
      time += 1; 
    };
  };
  return time;
};
const distance = 800;
const time = getTime(distance, car["averageSpeed"]);
alert(`Время для преодоления расстояния: ${time} часов`);