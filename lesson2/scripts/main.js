'use strict';

// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

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

console.log(trashArr[0]);
console.log(trashArr[1]);
console.log(trashArr[2]);
console.log(trashArr[3]);
console.log(trashArr[4]);
console.log(trashArr[5]);
console.log(trashArr[6]);
console.log(trashArr[7]);
console.log(trashArr[8]);
console.log(trashArr[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookDescFirst = {
    title: "The Lords of the rings",
    pageCount: 1201,
    genre: 'Fantasy'
}

let bookDescSecond = {
    title: "The Hobbit",
    pageCount: 400,
    genre: 'Fantasy'
}

let bookDescThird = {
    title: "A Song of Ice and Fire",
    pageCount: 5232,
    genre: 'Fantasy'
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let newBookDescFirst = {
    title: "The Lords of the rings",
    pageCount: 1201,
    genre: 'Fantasy',
    authors: [
        {name: 'J.R.R.', age: 60},
        {name: 'Tolkien', age: 21}
    ]
};

let newBookDescSecond = {
    title: "The Hobbit",
    pageCount: 400,
    genre: 'Fantasy',
    authors: [
        {name: 'J.R.R.', age: 21},
        {name: 'Tolkien', age: 61}
    ]
};

let newBookDescThird = {
    title: "A Song of Ice and Fire",
    pageCount: 5232,
    genre: 'Fantasy',
    authors: [
        {name: 'George', age: 20},
        {name: 'R.R.', age: 30},
        {name: 'Martin', age: 24}
    ]
};

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Aragorn', username: 'strider', password: 999777555},
    {name: 'Gandalf', username: 'wizard', password: 777777777},
    {name: 'Frodo', username: 'hobbit', password: 333222111},
    {name: 'Legolas', username: 'SindarElf', password: 1155511},
    {name: 'Gimli',username: 'dwarf',password: 12345},
    {name: 'Sam',username: 'hobbitAssistant',password: 666},
    {name: 'Galadriel',username: 'royalElf',password: 777},
    {name: 'Saruman',username: 'traitor',password: 123456789},
    {name: 'Gollum',username: 'smeagol',password: 999999},
    {name: 'Sauron',username: 'LordOfTheRings',password: 666},
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;

if (x !== 0) {
    console.log('Вірно!');
} else {
    console.log('Не вірно!');
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 390;

if (time >= 0 && time <= 14) {
    console.log('The first part of an hour.');
} else if (time >= 15 && time <= 29) {
    console.log('The second part of an hour.');
} else if (time >= 30 && time <= 44) {
    console.log('The third part of an hour.');
} else if (time >= 45 && time <= 59) {
    console.log('The fourth part of an hour.');
} else {
    console.log('An hour has only 60 minutes!');
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 32;
let decade= (day >= 1 && day <= 11) ? 'First decade'
    : (day >= 12 && day <= 21) ? 'Second decade'
    : (day >= 22 && day <= 31) ? 'Third decade'
    : 'There are only 31 days in a month!';

console.log(decade);

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt('Enter the day number:', '1');

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;

    case 5:
        console.log('Friday');
        break;

    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Enter the correct day!');
}

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let numberOne = 2;
let numberTwo = 2;

let result = numberOne > numberTwo ? numberOne
    : numberOne < numberTwo ? numberTwo
    : 'They are equal!';

console.log(result);

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let q = Math.sqrt(-1); //перевірка NaN
let q = 555;

if (typeof q === 'undefined'
    || isNaN(q)
    || q === null
    || q === ''
    || q === 0
    || q === false) {
    q = 'default';
    console.log(q);
} else {
    console.log(q);
}

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration
    && coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[1].monthDuration
    && coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[2].monthDuration
    && coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[3].monthDuration
    && coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[4].monthDuration
    && coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[5].monthDuration
    && coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
}