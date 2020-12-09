"use strict";
 
 function sumInDiapazon(firstValue, secondValue) {
    let sum = 0;
    
    while (firstValue <= secondValue) {
    sum = sum + firstValue;
    firstValue++;
    }

    if (isNumber(firstValue) === true && isNumber(secondValue) === true) {
        return sum;
    } else {
        return alert(`Недопустимый диапазон! Введите числа.`);
        };
};

const firstValue = +prompt(`Введите число (от):`, "");
const secondValue = +prompt(`Введите число (до):`, "");
let sum = sumInDiapazon (firstValue, secondValue);

if (sum !== undefined) {
    alert(`Сумма всех чисел в заданном Вами диапазоне = ${sum}`);
};