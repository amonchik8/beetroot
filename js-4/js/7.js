"use strict";

const num = prompt(`Введите число`, "");
const shift = prompt(`Введите на сколько цифр его сдвинуть`, "");
const arr = num.split('');
let i = 0;
for (i = 0; i < shift ; i++) {
    arr.push(arr[i]);
}
for (i = 0; i < shift ; i++) {
    arr.shift(arr[i]);
}
let result = 0;
for (i = 0; i < arr.length ; i++) {
    result = arr.join(''); 
}
alert(Number(result));