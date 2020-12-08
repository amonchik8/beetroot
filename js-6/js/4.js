"use strict";

const classes = [
    {
        name : "ООП",
        seats : 10,
        faculty : "ФЕКІ"
    },
    {
        name : "Менеджмент",
        seats : 15,
        faculty : "ФЕіУ"
    },
    {
        name : "Історія",
        seats : 25,
        faculty : "ФПГіСН"
    },
    {
        name : "Політологія",
        seats : 20,
        faculty : "ФПН"
    },
];

function showAllClasses(arr) {
    arr.forEach(function (item, index, array) {
        alert(`${arr[index].name}, ${arr[index].seats}, ${arr[index].faculty}`);
    });
};