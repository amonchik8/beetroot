"use strict";
 
 function sumInDiapazon(i, n) {
    let s = 0;
    
    while (i <= n) {
    s = s + i;
    i++;
    }

    if (isNumber(i) === true && isNumber(n) === true) {
        return s;
    } else {
        return alert(`Недопустимый диапазон! Введите числа.`);
        };
};

const i = +prompt(`Введите число (от):`, "");
const n = +prompt(`Введите число (до):`, "");
let sum = sumInDiapazon (i, n);

if (sum !== undefined) {
    alert(`Сумма всех чисел в заданном Вами диапазоне = ${sum}`);
};