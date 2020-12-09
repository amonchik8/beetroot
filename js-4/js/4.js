"use strict";

function getNumberOfDigits(a) {
    let count = 0;
    let result = a.split('');

    for (let i = 0; i < result.length; i++) {
        if (isNumber(Number(result[i])))
        count += 1;
    }
    return count;
}
const a = prompt(`Введите число`, ""); 
const result = getNumberOfDigits(a);
console.log(`Количество цифр в числе ${result}`);