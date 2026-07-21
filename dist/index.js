"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = addNumbers;
exports.multiplyNumbers = multiplyNumbers;
function addNumbers(first, second) {
    return first + second;
}
function multiplyNumbers(first, second) {
    return first * second;
}
function normalizeLegacyReference(value) {
    return value.trim().toUpperCase();
}
console.log(addNumbers(10, 20));
console.log(multiplyNumbers(4, 5));
