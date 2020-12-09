"use strict";

function getNumberOfDigits(number) {
    let count = 0;
    let result = number.split('');

    for (let i = 0; i < result.length; i++) {
        if (isNumber(Number(result[i])))
        count += 1;
    }
    return count;
}
const number = prompt(`Введите число`, ""); 
const result = getNumberOfDigits(number);
alert(`Количество цифр в числе ${result}`);