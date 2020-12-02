function kolvo(a) {
    let count = 0;
    let result = a.split('');
    for (let i = 0; i < result.length; i++) {
        if (isNumber(Number(result[i])))
        count += 1;
    }
    return count;
}
a = prompt(`Введите число`, ""); 
result = kolvo(a)
console.log(`Количество цифр в числе ${result}`);