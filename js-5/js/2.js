"use strict";

const firstFraction = {
    numerator : 20,
    denumerator : 16,
};

const secondFraction = {
    numerator : 4,
    denumerator : 7,
};

function additionFraction(firstObject, secondObject) {

    if (firstObject.denumerator !== secondObject.denumerator) {
        firstObject.numerator = firstObject.numerator * secondObject.denumerator;
        secondObject.numerator = secondObject.numerator * firstObject.denumerator;
        firstObject.denumerator = firstObject.denumerator * secondObject.denumerator;
        secondObject.denumerator = firstObject.denumerator;
    };
        numeratorAdd = firstObject.numerator + secondObject.numerator;
        denumeratorAdd = firstObject.denumerator;   
    return {
        numeratorAdd : numeratorAdd,
        denumeratorAdd : denumeratorAdd, 
    };
};

function subtractionFraction(firstObject, secondObject) {

    if (firstObject.denumerator !== secondObject.denumerator) {
        firstObject.numerator = firstObject.numerator * secondObject.denumerator;
        secondObject.numerator = secondObject.numerator * firstObject.denumerator;
        firstObject.denumerator = firstObject.denumerator * secondObject.denumerator;
        secondObject.denumerator = firstObject.denumerator;
    };
        numeratorSub= firstObject.numerator - secondObject.numerator;
        denumeratorSub= firstObject.denumerator;   
    return {
        numeratorSub : numeratorSub,
        denumeratorSub: denumeratorSub,
    };
};

function multiplicationFraction(firstObject, secondObject) {
    numeratorMult = firstObject.numerator * secondObject.numerator;
    denumeratorMult = firstObject.denumerator * secondObject.denumerator;   
    return {
        numeratorMult : numeratorMult,
        denumeratorMult : denumeratorMult, 
    };
};

function divisionFraction(firstObject, secondObject) {
    numeratorDiv = firstObject.numerator * secondObject.denumerator;
    denumeratorDiv = firstObject.denumerator * secondObject.numerator;   
    return {
    numeratorDiv : numeratorDiv,
    denumeratorDiv : denumeratorDiv, 
    };
};

function reductionFraction (obj) {
    function getLessNumber(a, b) {
        return (a < b) ? a : b;
    };

    let lessNumber = getLessNumber(obj.numerator, obj.denumerator);
    while (lessNumber > 1) {
        if (obj.numerator % lessNumber === 0 && obj.denumerator % lessNumber === 0 ) {
            numeratorRed = obj.numerator /= lessNumber;
            denumeratorRed = obj.denumerator /= lessNumber;  
        };
        lessNumber--; 
    };
    return {
        numeratorRed : numeratorRed,
        denumeratorRed : denumeratorRed, 
        };
};

let numeratorSum = 0;
let denumeratorSum = 0;
let numeratorSub = 0;
let denumeratorSub = 0;
let numeratorMult = 0;
let denumeratorMult = 0;
let numeratorDiv = 0;
let denumeratorDiv = 0;
let numeratorRed = 0; 
let denumeratorRed = 0;


const result = reductionFraction(firstFraction);
alert(`${result.numeratorRed}\n
-
${result.denumeratorRed}`);