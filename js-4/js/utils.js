"use strict";

const isNumber = (value) =>
!Number.isNaN(Number(value)) && typeof value === 'number' && !['', ' '].includes(value);

const isString = (value) => typeof value === 'string';

const isArray = (value) => Array.isArray(value);

const isObject = (value) =>
typeof value === 'object' && !Array.isArray(value) && value !== null;

const isFloat = (value) => {
    const hasDot = String(value).split('.').length === 2;
    return isNumber(value) && hasDot;
};