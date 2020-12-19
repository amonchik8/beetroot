"use strict";

const $sortByEmployeeButton = document.getElementById("employee");
const $sortBySalaryButton = document.getElementById("salary");
const $sortByBonusButton = document.getElementById("bonus");
const $sortBySupervisorButton = document.getElementById("supervisor");

const sortBy = (i) => {
    let sortedArray = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) =>
      rowA.cells[i].innerHTML > rowB.cells[i].innerHTML ? 1 : -1
    );
  table.tBodies[0].append(...sortedArray);
}

$sortByEmployeeButton.addEventListener("click", () => {
  sortBy(0);
});

$sortBySalaryButton.addEventListener("click", () => {
    sortBy(1);
});

$sortByBonusButton.addEventListener("click", () => {
    sortBy(2);
});

$sortBySupervisorButton.addEventListener("click", () => {
    sortBy(3);
});