let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function isEmpty(obj) {
for (let key in obj) {
  return false;
}
return true;
}

if (isEmpty(salaries)) {
  sum = 0
} else {
  sum = salaries.Ann + salaries.John + salaries.Pete; 
}

console.log(sum);