"use strict";

let mult = 0;
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        mult = i * j;
        console.log(`${i} * ${j} = ${mult}`);
    };
};