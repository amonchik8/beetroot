// ----------------------------------------------1
// function compare(a, b) {
//    return a < b ? -1 :
//     b < a ? 1 :
//     0;
// }
// console.log(compare(3,2));

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
// let x = conka(1, 4, 9);
// console.log(x);

// ----------------------------------------------4
// function square(a, b = a) {
//     return a * b;
// }
// let s = square(4, 5);
// console.log(s);

// ----------------------------------------------5
//  function soversh(i) {
//     return (i % 9 == 1 || i == 6 ) ? true : false; 
// }
//  let x = soversh(28);
//  console.log(x);

// ----------------------------------------------6
// function soversh(a) {
//     return (a % 9 == 1 || a == 6 ) ? true : false; 
// }
// function searchSoversh(a, b) {
//     while (a <= b) {
//     x = soversh(a);
//     if (x) console.log(a);
//     a++;
//     }
// }
// searchSoversh(1, 500);

// ----------------------------------------------7
// function time(hour, min = '00', sec = '00') {
//     if (hour < 9 && hour !==  '00') hour = '0' + hour;
//     if (min < 9 && min !== '00') min = '0' + min;
//     if (sec < 9 && sec !== '00') sec = '0' + sec;
//     alert(`«${hour}:${min}:${sec}»`);
// }
// time(17, 1, 25)

// ----------------------------------------------8
// function time(hour, min, sec) {
//     let s =sec + (min * 60) + (hour * 3600);
//     return s;
// }
// s = time(1, 0, 0);
// console.log(s);

// ----------------------------------------------9
// function time(sec) {
//    hour = Math.floor(sec / 3600);
//     min = Math.floor(sec / 60) - (hour * 60);
//     sec = sec % 60;
//     if (hour < 9) hour = '0' + hour;
//     if (min < 9) min = '0' + min;
//     if (sec < 9) sec = '0' + sec;
//    return(console.log(`«${hour}:${min}:${sec}»`));
// }
// time(4000);

// ----------------------------------------------10
function toSec(hour, min, sec) {
    let s =sec + (min * 60) + (hour * 3600);
    return s;
}
function toDate(sec) {
   hour = Math.floor(sec / 3600);
    min = Math.floor(sec / 60) - (hour * 60);
    sec = sec % 60;
    if (hour < 9) hour = '0' + hour;
    if (min < 9) min = '0' + min;
    if (sec < 9) sec = '0' + sec;
   return(console.log(`«${hour}:${min}:${sec}»`));
}
function calcDataChange(firstHour, firstMin, firstSec, secondHour, secondMin, secondSec) {
    firstСonvertSeconds = toSec(firstHour, firstMin, firstSec);
    secondСonvertSeconds = toSec(secondHour, secondMin, secondSec);
    changeInSeconds = secondСonvertSeconds - firstСonvertSeconds;
    dataChange = toDate(changeInSeconds);
    return(dataChange);
}
calcDataChange(13, 12, 12, 16, 20, 13);