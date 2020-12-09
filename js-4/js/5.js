"use strict";

const numbers = [];
let i = 0;

while (i <= 9) {
    numbers[i] = prompt(`Введите ${i + 1}-ое число`, "");
    i++; 
}
let countPos = 0;
let countNeg = 0;
let countZero = 0;
let countOdd = 0;
let countEven = 0;
let countNaN = 0;

for (i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);

    if (!isNaN(numbers[i])) {

        if (numbers[i] > 0) {
            countPos += 1
            } else if ((numbers[i] < 0))
            countNeg += 1
        else countZero += 1;

        if (numbers[i] % 2 ==0)
            countOdd += 1
        else countEven += 1;
    } else countNaN += 1;
};

alert(`Количество чисел больше нуля: ${countPos}
\nКоличество чисел меньше нуля: ${countNeg}
\nКоличество нулей: ${countZero}
\nКоличество чётных чисел: ${countOdd}
\nКоличество нечётных чисел: ${countEven}
\nКоличество нечисел: ${countNaN}`);