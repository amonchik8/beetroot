// const userAge = prompt('Сколько Вам лет?', "");
// if (userAge <= 12) {
//     alert("Вы ребёнок");
// }
// else if (userAge <= 18 & userAge > 13) {
//     alert("Вы подросток");
// } else if (userAge <= 60 & userAge > 19) {
//     alert("Вы взрослый");
// } else { alert("Вы пенсионер");};

// let number = prompt('Введите цифру', "");
// switch (Number(number)) {
//         case 0:
//         alert("Ваш спецсимвол: )");
//         break;
//         case 1:
//         alert("Ваш спецсимвол: !");
//         break;
//         case 2:
//         alert("Ваш спецсимвол: @");
//         break;
//         case 3:
//         alert("Ваш спецсимвол: #");
//         break;
//         case 4:
//         alert("Ваш спецсимвол: $");
//         break;
//         case 5:
//         alert("Ваш спецсимвол: %");
//         break;
//         case 6:
//         alert("Ваш спецсимвол: ^");
//         break;
//         case 7:
//         alert("Ваш спецсимвол: &");
//         break;
//         case 8:
//         alert("Ваш спецсимвол: *");
//         break;
//         case 9:
//         alert("Ваш спецсимвол: (");
//         break;
//         default:
//         alert( "Это не цифра!" );     
// };

// let number = prompt(`Введите трёхзначное число`, "");
// let arr = number.split('');
// if ( arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2] ) {
//     alert(`Обнаружены одинаковые цифры`)
// } else { alert(`Совпадений не обнаружено`); };

// let year = prompt(`Введите год`, "");
// if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(`Высокосный`);
// } else { alert(`Не высокосный`); };

// let number = prompt(`Введите пятиразрядное число`, "");
// let arr = number.split('');
// if (arr[0] === arr[4] && arr[1] === arr[3])
// alert(`Палиндром`)
// // else { alert(`Не палиндром`); };

// let money = prompt(`Введите количество USD`,"");
// let valuta = prompt(`Введите, в какую валюту хотите перевести (EUR, UAN, AZN)`,"");
// switch (valuta) {
//     case 'EUR':
//         money *= 0.84;
//         break;
//     case 'UAN':
//         money *= 28.37;
//         break;
//     case 'AZN':
//         money *= 1.7;
//         break;}
// alert(money);

// let summa = prompt(`Введите сумму покупки`,"");
// if (summa >= 200 && summa < 300) 
//     summa = summa - summa * 0.03;
//  else if (summa >= 300 && summa < 500) 
//     summa = summa - summa * 0.05;
//  else if (summa >=500) 
//     summa = summa - (summa * 0.07);
// alert (summa);

// let l = +prompt(`Укажите длину окружности`,"");
// let p = +prompt(`Укажите периметр квадрата`,"");
// let r = l / (2 * 3.14);
// let a = p / 4;
// if (r <= (a / 2))
// alert(`Окружность помещается в указанный квадрат`);
// else {
// alert(`Окружность не помещается в указанный квадрат`); };

// let = mark = 0;
// let firstAnswer = prompt(`1 вопрос:\nСколько весит гриф олимпийской штанги?\n1. 10кг\n2. 15кг\n3. 20кг\nВаш ответ?`,"");
// if (firstAnswer !== '1' && firstAnswer !== '2' && firstAnswer !== '3') alert(`Неправильный вариант ответа!`);
// if (firstAnswer === '3') mark += 2;
// let secondAnswer = prompt(`2 вопрос:\nСколько цветов у радуги?\n1. 7\n2. 5\n3. 8\nВаш ответ?`,"");
// if (secondAnswer !== '1' && firstAnswer !== '2' && firstAnswer !== '3') alert(`Неправильный вариант ответа!`);
// if (secondAnswer === '1') mark += 2;
// let thirdAnswer = prompt(`3 вопрос:\nКакая по счёту планета Земля в Солнечной системе?\n1. 1\n2. 3\n3. 5\nВаш ответ?`,"");
// if (thirdAnswer !== '1' && firstAnswer !== '2' && firstAnswer !== '3') alert(`Неправильный вариант ответа!`);
// if (thirdAnswer === '2') mark += 2;
// alert(`Ваш результат ${mark}`);

let day = +prompt(`Введите день`, "");
let month = +prompt(`Введите месяц`, "");
let year = +prompt(`Введите год`, "");

if ( (day === 31)||(day === 30 && month === 4 || month === 6 || month === 9 || month === 11)||(day === 28 && month === 2 && !((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) )||(day === 29 && month === 2) ) {
    day = 1;
    if (month != 12) month += 1;
    else {
    month = 1;
    year += 1;
    };
}
else day += 1;  
alert(`${day}.${month}.${year}`);