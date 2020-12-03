"use strict";

const car = {
  Manufacturer: 'Toyota',
  Model: 'Supra',
  Year: 2004,
  "Average speed": 100,
};

function getInfo(obj) {
  for (let key in obj) {
    alert( `${key}: ${obj[key]}`);
  };
};

function getTime(s, v) {
  let t = s / v;
  for (let i = 1; i <= t; i++) {
    if (i % 5 === 0 ){
      t += 1; 
    };
  };
  return t;
};
const s = 600;
const t = getTime(s, car["Average speed"]);
alert(`Время для преодоления расстояния: ${t} часов`);