'use strict';

// -------------------------------------

let greeting = 'hello';
let domPartOne = 'owu';
let domPartTwo = 'com';
let domPartThree = 'ua';

let numberOne = 1;
let numberTen = 10;
let numberSixteen = 16
let negativeNumber = -999;
let largeNumber = 123;
const PI = 3.14;
const E = 2.7;

let trueTruth = true;
let falseTruth = false;

console.log(greeting);
console.log(domPartOne);
console.log(domPartTwo);
console.log(domPartThree);
console.log(numberOne);
console.log(numberTen);
console.log(numberSixteen);
console.log(negativeNumber);
console.log(largeNumber);
console.log(PI);
console.log(E);
console.log(trueTruth);
console.log(falseTruth);

// -------------------------------------

let firstName = 'Mykola';
let middleName = 'Ivanovych';
let lastName = 'Chernysh';

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

//-------------------------------------

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


//-------------------------------------

let userName = prompt("Введіть своє ім'я:");
let userLastName = prompt("Введіть своє прізвище:");
let userAge = +prompt("Введіть ваш вік:");

let userInfo = `Name: ${userName}, Surname: ${userLastName}, age: ${userAge}`;

console.log(userInfo);


