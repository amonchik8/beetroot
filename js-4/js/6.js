"use strict";

function calc(x, y, z) {
    firstNum = +prompt(`Введите 1-ое число`, "");
    secondNum = +prompt(`Введите 2-ое число`, "");
    sign = prompt(`Введите знак`, "");

    if (sign === '*') {
        result = firstNum * secondNum
    } else if (sign === '/') {
        result = firstNum / secondNum
    } else if (sign === '+') {
        result = firstNum + secondNum
    } else {
        result = firstNum - secondNum;}

    if (!isNaN(result)) {
        flag = confirm(`Результат: ${result}. Хотите продолжить?`);
    } else {
        flag = confirm(`Некорректные данные, введите числа. Хотите продолжить?`);
    };
    while (flag) {calc(firstNum, secondNum, sign);
        };
}

let firstNum = 0;
let secondNum = 0;
let sign = 0;
let flag = 0;
let result = 0;
result = calc(firstNum, secondNum, sign);