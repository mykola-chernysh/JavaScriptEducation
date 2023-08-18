'use strict';

// ------------------------------------

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

console.log(trashArr[3]);

// ------------------------------------

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

// ------------------------------------

let newBookDescFirst = {
    title: "The Lords of the rings",
    pageCount: 1201,
    genre: 'Fantasy',
    authors: [
        'J.R.R. Tolkien',
        81
    ]
};

let newBookDescSecond = {
    title: "The Hobbit",
    pageCount: 400,
    genre: 'Fantasy',
    authors: [
        'J.R.R. Tolkien',
        81
    ]
};

let newBookDescThird = {
    title: "A Song of Ice and Fire",
    pageCount: 5232,
    genre: 'Fantasy',
    authors: [
        'George R.R. Martin',
        74
    ]
};

// ------------------------------------

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

console.log(users[6].password);

// ------------------------------------

let x = -3;

if (x !== 0) {
    console.log('Вірно!');
} else {
    console.log('Не вірно!');
}

// ------------------------------------

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

// ------------------------------------

let day = 32;
let decade= (day >= 1 && day <= 11) ? 'First decade'
    : (day >= 12 && day <= 21) ? 'Second decade'
    : (day >= 22 && day <= 31) ? 'Third decade'
    : 'There are only 31 days in a month!';

console.log(decade);

// ------------------------------------

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

// ------------------------------------

let numberOne = 2;
let numberTwo = 2;

let result = numberOne > numberTwo ? numberOne
    : numberOne < numberTwo ? numberTwo
    : 'They are equal!';

console.log(result);

// ------------------------------------

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

// ------------------------------------

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