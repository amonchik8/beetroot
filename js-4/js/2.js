"use strict";

function theBiggestDiv(a, b) {
    let x = 0;
    let i = 1;
    while (i <= a) {
        if (a % i === 0 && b % i === 0)
        x = i;
        i++;
    }
    return x;
}

const a = +prompt(`Введите число`, "");
const b = +prompt(`Введите число`, "");
let delitel = 0;

if (isNumber(a) && isNumber(b) ) {
    delitel = theBiggestDiv(a, b);
    alert(`Наибольший общий делитель = ${delitel}`);
} else {
    alert(`Недопусимые символы! Введите числа.`);
    };