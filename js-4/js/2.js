"use strict";

function theBiggestDiv(firstNumber, secondNumber) {
    let result = 0;
    let i = 1;
    while (i <= firstNumber) {
        if (firstNumber % i === 0 && secondNumber % i === 0)
        result = i;
        i++;
    }
    return result;
}

const firstNumber = +prompt(`Введите число`, "");
const secondNumber = +prompt(`Введите число`, "");
let divider = 0;

if (isNumber(firstNumber) && isNumber(secondNumber) ) {
    divider = theBiggestDiv(firstNumber, secondNumber);
    alert(`Наибольший общий делитель = ${divider}`);
} else {
    alert(`Недопусимые символы! Введите числа.`);
    };