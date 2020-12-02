function delitel(a) {
    let x = 0;
    for (i = 1; i <= a; i++) {
        if (a % i === 0) {
        x = i;
        console.log(x);
        }
    }
}

a = +prompt(`Введите число`, "");
if (isNumber(a)) 
    delitel(a)
else alert(`Недопусимые символы! Введите число.`);