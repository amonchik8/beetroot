"use strict";

// ----------------------------------------------1
// function compare(a, b) {
//     if (a < b)  return -1
//     else if (a > b) return 1
//     else return 0;
// }
// console.log(compare(3, 2));

// ----------------------------------------------2
// function factorial(x) {
//     let result = x;
//     let i = 1;
//         while (i != x) {
//         result *= i;
//         i++; 
//         }
//     if ((x === 0) || (x === 1)) {
//         return 1;
//     } else {
//         return result;  }
// }
// console.log(factorial(5));

// ----------------------------------------------3
// function conka (a, b, c) {
//     return Number(String(a) + b + c);
// }
// console.log(conka(1, 3, 9));

// ----------------------------------------------4
// function square(a, b = a) {
//     return a * b;
// }
// console.log(square(4));

// ----------------------------------------------5
// function isSoversh(i) {
//     return i % 9 === 1 || i === 6  ? true : false; 
// }
//  console.log(isSoversh(28));

// ----------------------------------------------6
//function isSoversh(i) {
//     return i % 9 === 1 || i === 6  ? true : false; 
// }
// function searchSoversh(a, b) {
//     while (a <= b) {
//     let x = isSoversh(a);
//     if (x) console.log(a);
//     a++;
//     }
// }
// searchSoversh(1, 500);

// ----------------------------------------------7
// function to2DigitTime(hour, min = '00', sec = '00') {
//     if (hour < 9 && hour !==  '00') hour = `0${hour}`;
//     if (min < 9 && min !== '00') min = `0${min}`;
//     if (sec < 9 && sec !== '00') sec = `0${sec}`;
//     console.log(`«${hour}:${min}:${sec}»`);
// }
// to2DigitTime(17, 1, 2)

// ----------------------------------------------8
// function toSec(hour, min, sec) {
//     const s =sec + (min * 60) + (hour * 3600);
//     return s;
// }
// console.log(toSec(0, 2, 0));

// ----------------------------------------------9
// function toFullTime(sec) {
//     let hour = Math.floor(sec / 3600);
//     let min = Math.floor(sec / 60) - (hour * 60);
//     sec = sec % 60;
//     if (hour < 9) hour = `0${hour}`;
//     if (min < 9) min = `0${min}`;
//     if (sec < 9) sec = `0${sec}`;
//    return(console.log(`«${hour}:${min}:${sec}»`));
// }
// toFullTime(4000);

// ----------------------------------------------10
function toSec(hour, min, sec) {
    let s =sec + (min * 60) + (hour * 3600);
    return s;
}
function toFullTime(sec) {
        let hour = Math.floor(sec / 3600);
        let min = Math.floor(sec / 60) - (hour * 60);
        sec = sec % 60;
        if (hour < 9) hour = `0${hour}`;
        if (min < 9) min = `0${min}`;
        if (sec < 9) sec = `0${sec}`;
       return(console.log(`«${hour}:${min}:${sec}»`));
}
function calcDataChange(firstHour, firstMin, firstSec, secondHour, secondMin, secondSec) {
   let firstСonvertSeconds = toSec(firstHour, firstMin, firstSec);
   let secondСonvertSeconds = toSec(secondHour, secondMin, secondSec);
   let changeInSeconds = secondСonvertSeconds - firstСonvertSeconds;
   let dataChange = toFullTime(changeInSeconds);
   return(dataChange);
}
calcDataChange(13, 12, 12, 17, 20, 13);