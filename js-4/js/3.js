"use strict";

function getDivNumber(number) {
    let divider = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
        divider = i;
        alert(divider);
        }
    }
}

const number = +prompt(`Введите число`, "");

if (isNumber(number)) {
    getDivNumber(number)
} else {
    alert(`Недопусимые символы! Введите число.`);
};