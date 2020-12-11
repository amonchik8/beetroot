"use strict";

const classes = [
  {
    name: "ООП",
    seats: 15,
    faculty: "ФПГіСН",
  },
  {
    name: "Менеджмент",
    seats: 10,
    faculty: "ФЕіУ",
  },
  {
    name: "Історія",
    seats: 20,
    faculty: "ФПГіСН",
  },
  {
    name: "Політологія",
    seats: 20,
    faculty: "ФЕКІ",
  },
];

const group = {
  name: "ЖУР-20-1М",
  amout: 11,
  faculty: "ФПГіСН",
};

const showAllClasses = (arr) => {
  arr.forEach(function (item, index, array) {
    alert(`${arr[index].name}, ${arr[index].seats}, ${arr[index].faculty}`);
  });
};

const showClassForFaculty = (arr) => {
  const faculty = prompt(`Введите факультет`, "");
  const find = arr.filter((item) => item.faculty === faculty);
  find.forEach(function (item, index, array) {
    alert(`${find[index].name} ${find[index].seats}`);
  });
};

const showClassForGroup = (arr, obj) => {
  const filterByFaculty = arr.filter((item) => item.faculty === obj.faculty);
  const filterBySeats = filterByFaculty.filter((item) => item.seats >= obj.amout);
  filterBySeats.forEach(function (item, index, array) {
    alert(`${filterBySeats[index].name} ${filterBySeats[index].seats}`);
  });
};

const sortBySeats = (arr) => {
  arr.sort( (a, b) => a.seats - b.seats );
};

const sortByName = (arr) => {
  arr.sort( (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    return 0;
  });
};