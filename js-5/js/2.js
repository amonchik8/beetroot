"use strict";

const firstFraction = {
    numerator : 4,
    denumerator : 5,
};

const secondFraction = {
    numerator : 4,
    denumerator : 5,
};

function sumFraction(firstObject, secondObject ) {
    let numeratorSum = firstObject.numerator + secondObject.numerator;
    let denumeratorSum = firstObject.denumerator + secondObject.denumerator;
    return {
        numeratorSum : numeratorSum,
        denumeratorSum : denumeratorSum, 
    };
};

const result = sumFraction(firstFraction, secondFraction);
alert(`${result.numeratorSum}\n
-
${result.denumeratorSum}`);