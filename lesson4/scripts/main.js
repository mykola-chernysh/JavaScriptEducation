'use strict';

// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareRectangle(a, b) {
    return a * b;
}

const sRectangle = squareRectangle(5, 7);
console.log(sRectangle);


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle(r) {
    // return Math.PI * Math.pow(r, 2);
    return 3.14 * (r * r);
}

const sCircle = squareCircle(5);
console.log(sCircle);


// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(h, r) {
    return 2 * Math.PI * r * (r + h);
}

const sCylinder = squareCylinder(5, 2);
console.log(sCylinder);


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// якщо розкоментувати закоментований код, і закоментувати консоль лог і виклик функції, то функція виведе усі елементи в один рядок (це зробив для практики) :)

let trashArr = [
    'apple',
    'stone',
    true,
    100500,
    'green',
    'house',
    3.14,
    'javascript',
    999,
    false
];

function outputArrayElement(array) {

    // let elements = '';

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);

        /*elements += array[i];

        if (i !== (array.length - 1)) {
            elements += ', ';
        };*/
    }

    // return elements;
}

outputArrayElement(trashArr);

// let elements = outputArrayElement(trashArr);
// console.log(elements);


// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
   document.write(`<p>${text}</p>`);
}

createParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createListItemText(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createListItemText('apple');


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createNewListItemText(text, num) {
    document.write(`<ul>`);
        for (let i = 0; i < num; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);
}

createNewListItemText('orange', 5);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayToList(array) {
    document.write(`<ul>`);
    for (const arrElem of array) {
        document.write(`<li>${arrElem}</li>`)
    }
    document.write(`</ul>`);
}

arrayToList(trashArr);


// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'Tom', age: 20},
    {id: 2, name: 'Angelina', age: 26},
    {id: 3, name: 'Nick', age: 31},
    {id: 4, name: 'Bill', age: 45},
    {id: 5, name: 'Merri', age: 18},
    {id: 6, name: 'Anna', age: 42},
    {id: 7, name: 'John', age: 30},
    {id: 8, name: 'Piter', age: 21},
    {id: 9, name: 'Jessica', age: 15},
    {id: 10, name: 'Arnold', age: 34},
]

function outputUsers(array) {
    for (const arrElem of array) {
        document.write(`<div>id: ${arrElem['id']}, name: ${arrElem['name']}, age: ${arrElem['age']}</div>`);
    }
}

outputUsers(users);

// 10 - створити функцію яка повертає найменьше число з масиву

let arrayOfNumbers = [111, 100, 50 ,35 , 2, 675, 6, 99, -100];

function outputMinNum(array) {
    let minNum = array[0];

    for (const arrElem of array) {
        if (arrElem < minNum) {
            minNum = arrElem;
        }
    }

    return minNum;
}

let arrMinNum = outputMinNum(arrayOfNumbers);
console.log(arrMinNum);

// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let result = 0;

    for (const arrElem of arr) {
        result += arrElem;
    }

    return result;
}

let sumArr = sum(arrayOfNumbers);
console.log(sumArr);

// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {

    for (let i = 0; i < arr.length; i++) {
        let arrElem = arr[i];

        if (i === index1 ) {
            arr[i] = arr[index2];
            arr[index2] = arrElem;
        }
    }

    return arr;
}

const swapFun = swap([11,22,33,44],1,3);
console.log(swapFun);

// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {

    for (const elemCurr of currencyValues) {
        if (exchangeCurrency === elemCurr['currency']) {
            return  (sumUAH / elemCurr['value']).toFixed(2);
        }
    }

    return 'Enter the correct value!';
}

const exchangeResult = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');
console.log(exchangeResult);