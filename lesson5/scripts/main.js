'use strict';
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const squareRectangle = (a, b) => a * b;

console.log(squareRectangle(5, 10));


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

const squareCircle = (r) => Math.PI * Math.pow(r, 2);

console.log(squareCircle(3));


// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const squareCylinder = (h, r) => 2 * Math.PI * r * (r + h);

console.log(squareCylinder(5, 2));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент

let someTrashArr = [
    'ice cream',
    'fish',
    false,
    999,
    'yellow',
    'python',
    3.14,
    'javascript',
    777,
    true
];

const outputArrayElement = (array) => {
    for (const item of array) {
        console.log(item);
    }
}

console.log(outputArrayElement(someTrashArr));


// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let someText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const createParagraph = (text) => {
    document.write(`<p>${text}</p>`);
}

createParagraph(someText);


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createListItemText = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createListItemText('Ice cream');


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createNewListItemText = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createNewListItemText('lemon', 7);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const arrayToList = (array) => {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

arrayToList(someTrashArr);


// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let someUsers = [
    {id: 1, name: 'Darth', age: 20},
    {id: 2, name: 'Vader', age: 26},
    {id: 3, name: 'Lord', age: 31},
    {id: 4, name: 'Voldemort', age: 45},
    {id: 6, name: 'The', age: 42},
    {id: 7, name: 'Lord', age: 30},
    {id: 8, name: 'Of', age: 21},
    {id: 9, name: 'The', age: 15},
    {id: 10, name: 'Rings', age: 34},
]

const outputUsers = (array) => {
    for (const user of array) {
        document.write(`<div>id: ${user['id']}, name: ${user['name']}, age: ${user['age']}</div>`);
    }
}

outputUsers(someUsers);


// 10 - створити функцію яка повертає найменьше число з масиву

let arrayOfNumbers = [333, 111, 55, 33, -2, 766, 6, 5, 124];

const outputMinNum = (array) => {
    let minNum = array[0];

    for (const item of array) {
        if (item < minNum) {
            minNum = item;
        }
    }

    return minNum;
}

console.log(outputMinNum(arrayOfNumbers));


// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let result = 0;

    for (const item of arr) {
        result += item;
    }

    return result;
}

console.log(sum(arrayOfNumbers));


// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {

    arr[arr.length] = (arr[index1]);
    arr[index1] = arr[index2];
    arr[index2] = arr[arr.length - 1];
    arr.length--;


    return arr;

    /*for (let i = 0; i < arr.length; i++) {
        let arrElem = arr[i];

        if (i === index1 ) {
            arr[i] = arr[index2];
            arr[index2] = arrElem;
        }
    }

    return arr;*/
}

console.log(swap([111, 333, 555, 777, 999], 0, 4));


// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    for (const elemCurr of currencyValues) {
        if (exchangeCurrency === elemCurr['currency']) {
            return (sumUAH / elemCurr['value']).toFixed(2);
        }
    }

    return 'Enter the correct value!';
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'GBP', value: 47.5}],  'GBP'));