x = prompt(`Введите число`, "");
y = prompt(`Введите на сколько цифр его сдвинуть`, "");
arr = x.split('');
for (i = 0; i < y ; i++) {
    arr.push(arr[i]);
}
for (i = 0; i < y ; i++) {
    arr.shift(arr[i]);
}
let result = 0;
for (i = 0; i < arr.length ; i++) {
    result = arr.join(''); 
}
alert(Number(result));