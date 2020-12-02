function calc(x, y, z) {
x = +prompt(`Введите 1-ое число`, "");
y = +prompt(`Введите 2-ое число`, "");
z = prompt(`Введите знак`, "");
if (z === '*') 
rezult = x * y
else if (z === '/')
rezult = x / y
else if (z === '+')
rezult = x + y
else 
rezult = x - y;
q = confirm(`Результат: ${rezult}. Хотите продолжить?`)
while (q) calc(x, y, z);
}

let x = 0;
let y = 0;
let z = 0;
rezult = calc(x, y, z);