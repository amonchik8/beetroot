"use strict";

const firstFraction = {
  numerator: 2,
  denumerator: 4,
};

const secondFraction = {
  numerator: 1,
  denumerator: 4,
};

const isNumber = (value) => !Number.isNaN(Number(value)) && !!value;

const isValidFraction = (fraction) => {
  return (
    typeof fraction === "object" &&
    fraction !== null &&
    isNumber(fraction.numerator) &&
    isNumber(fraction.denumerator)
  );
};

const reductionFraction = (obj) => {
    const getLessNumber = (a, b) => {
      return a < b ? a : b;
    };
    let divider = getLessNumber(obj.numerator, obj.denumerator);
    while (divider > 1) {
      if (obj.numerator % divider === 0 && obj.denumerator % divider === 0)
        return {
          numerator: obj.numerator / divider,
          denumerator: obj.denumerator / divider,
        };
      divider--;
    }
    return {
      numerator: obj.numerator,
      denumerator: obj.denumerator,
    };
  };

const additionFraction = (a, b) => {
  if (!isValidFraction(a) || !isValidFraction(b))
    return alert(`Некорректная дробь`);
  return reductionFraction({
    numerator: a.numerator * b.denumerator + b.numerator * a.denumerator,
    denumerator: a.denumerator * b.denumerator,
  });
};

const subtractionFraction = (a, b) => {
  if (!isValidFraction(a) || !isValidFraction(b))
    return alert(`Некорректная дробь`);
    const numerator = a.numerator * b.denumerator - b.numerator * a.denumerator;
  return reductionFraction({
    numerator: numerator,
    denumerator: numerator ? a.denumerator * b.denumerator : 0,
  });
};

const multiplicationFraction = (a, b) => {
  if (!isValidFraction(a) || !isValidFraction(b))
    return alert(`Некорректная дробь`);
  return reductionFraction({
    numerator: a.numerator * b.numerator,
    denumerator: a.denumerator * b.denumerator,
  });
};

const divisionFraction = (a, b) => {
  if (!isValidFraction(a) || !isValidFraction(b))
    return alert(`Некорректная дробь`);
  return reductionFraction({
    numerator: a.numerator * b.denumerator,
    denumerator: a.denumerator * b.numerator,
  });
};

console.log(additionFraction(firstFraction, secondFraction));
console.log(subtractionFraction(firstFraction, secondFraction));
console.log(multiplicationFraction(firstFraction, secondFraction));
console.log(divisionFraction(firstFraction, secondFraction));
console.log(reductionFraction(firstFraction));