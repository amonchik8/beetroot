"use strict";

function getDivNumber(a) {
    let x = 0;

    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
        x = i;
        console.log(x);
        }
    }
}

const a = +prompt(`Введите число`, "");

if (isNumber(a)) {
    getDivNumber(a)
} else {
    alert(`Недопусимые символы! Введите число.`);
};