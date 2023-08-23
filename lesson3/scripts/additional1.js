'use strict';

/*
--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

let numberArr = [1, 2, 3, 4, 5];
let stringArr = ['a', 'b', 'c', 'd', 'e'];
let trashArr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', true, true, true, false, false];

console.log(numberArr);
console.log(stringArr);
console.log(trashArr);

console.log('----------------');

/*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

let emptyArr = [];

emptyArr[0] = 'Hello';
emptyArr[1] = 'world';
emptyArr[2] = '!';

console.log(emptyArr);

console.log('----------------');

// є масив:

let someArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// перебрати його циклом while

let index = 0;
while (index < someArr.length) {
    console.log(someArr[index]);
    index++;
}

console.log('----------------');

// перебрати його циклом for

for (let i = 0; i < someArr.length; i++) {
    const someArrElement = someArr[i];
    console.log(someArrElement);
}

console.log('----------------');

// перебрати циклом while та вивести  числа тільки з непарним індексом

let newIndex = 1;
while (newIndex < someArr.length) {
    console.log(someArr[newIndex]);

    newIndex += 2;
}

console.log('----------------');

// перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 1; i < someArr.length; i += 2) {
    const someArrElement = someArr[i];
    console.log(someArrElement);
}

console.log('----------------');

// перебрати циклом while та вивести числа тільки парні значення

let indexSomeArr = 0;
while (indexSomeArr < someArr.length) {
    if (someArr[indexSomeArr] % 2 === 0) {
        console.log(someArr[indexSomeArr]);
    }

    indexSomeArr++;
}

console.log('----------------');

// перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < someArr.length; i++) {
    const someArrElement = someArr[i];

    if (someArrElement % 2 === 0) {
        console.log(someArrElement);
    }
}

console.log('----------------');

// замінити кожне число кратне 3 на слово "okten"

for (let number of someArr) {
    if (number % 3 === 0) {
        number = 'okten';
    }

    console.log(number);
}

console.log('----------------');

// вивести масив в зворотньому порядку

for (let i = someArr.length - 1; i >= 0; i--) {
    const someArrElement = someArr[i];
    console.log(someArrElement);
}

console.log('----------------');

// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let indexOne = someArr.length - 1;
while (indexOne >= 0) {
    console.log(someArr[indexOne]);
    indexOne--;
}

console.log('----------------');

for (let i = someArr.length - 1; i >= 0; i--) {
    const someArrElement = someArr[i];
    console.log(someArrElement);
}

console.log('----------------');

let indexTwo = someArr.length - 1;
while (indexTwo >= 0) {
    console.log(someArr[indexTwo]);

    indexTwo -= 2;
}

console.log('----------------');

for (let i = someArr.length - 1; i >= 0; i -= 2) {
    const someArrElement = someArr[i];
    console.log(someArrElement);
}

console.log('----------------');

let indexThree = someArr.length - 1;
while (indexThree >= 0) {
    if (someArr[indexThree] % 2 === 0) {
        console.log(someArr[indexThree]);
    }

    indexThree--;
}

console.log('----------------');


for (let i = someArr.length - 1; i >= 0; i--) {
    const someArrElement = someArr[i];

    if (someArrElement % 2 === 0) {
        console.log(someArrElement);
    }
}

console.log('----------------');

for (let i = someArr.length - 1; i >= 0; i--) {
    let indexThreeElement = someArr[i];
    if (indexThreeElement % 3 === 0) {
        indexThreeElement = 'okten';
    }

    console.log(indexThreeElement);

}

console.log('----------------');

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let someNumberArr = [32, 56, 123, 11, 13, 56, 7, 99, 555, 1];

for (const number of someNumberArr) {
    console.log(number);
}

console.log('----------------');

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let someStringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (const string of someStringArr) {
    console.log(string);
}

console.log('----------------');

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let someTrashArr = [123, 'b', true, 'd', false, 'f', 45, 999, 'i', 'j'];

for (const arrElem of someTrashArr) {
    console.log(arrElem);
}

console.log('----------------');

/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
*/

let anotherSomeTrashArr = [123, 'b', true, 'd', false, 'f', 45, 999, true, 'j'];

for (const arrElem of anotherSomeTrashArr) {
    if (typeof arrElem === "boolean") {
        console.log(arrElem);
    }
}

console.log('----------------');

for (const arrElem of anotherSomeTrashArr) {
    if (typeof arrElem === "number") {
        console.log(arrElem);
    }
}

console.log('----------------');

for (const arrElem of anotherSomeTrashArr) {
    if (typeof arrElem === "string") {
        console.log(arrElem);
    }
}

console.log('----------------');

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let someEmptyArr = [];

someEmptyArr[0] = true;
someEmptyArr[1] = 1;
someEmptyArr[2] = 'Tom';
someEmptyArr[3] = '&';
someEmptyArr[4] = 'Jerry';
someEmptyArr[5] = 345;
someEmptyArr[6] = false;
someEmptyArr[7] = 45345;
someEmptyArr[8] = 'qwerty';
someEmptyArr[9] = true;

for (const arrElem of someEmptyArr) {
    console.log(arrElem);
}

console.log('----------------');

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i}`);
}

console.log('----------------');
document.write('-----');

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}`);
}

console.log('----------------');
document.write('-----');

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i}`);
}

console.log('----------------');
document.write('-----');

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i}`);
    }
}

console.log('----------------');
document.write('-----');

// творити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`${i}`);
    }
}

console.log('----------------');
document.write('-----');

/*
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
*/

let booksArr = [
    {
        name: 'Funny house',
        pageCount: 500,
        authors: [
            {name: 'Tom', surname: 'Cat', age: 5},
            {name: 'Jerry', surname: 'Mouse', age: 3}
        ],
        genre: ['fantasy', 'Action and adventure', 'Children\'s']
    },

    {
        name: 'The Hobbit and The Lord of the Rings',
        pageCount: 1601,
        authors: [
            {name: 'J. R. R.', surname: 'Tolkien', age: 81},
        ],
        genre: ['fantasy', 'Adventure']
    },

    {
        name: 'Clean Code',
        pageCount: 464,
        authors: [
            {name: 'Robert C.', surname: 'Martin', age: 71},
            {name: 'Robert C.', surname: 'Martin', age: 71}
        ],
        genre: ['programming']
    },

    {
        name: "A Song of Ice and Fire",
        pageCount: 5232,
        authors: [
            {name: 'George R.R.', surname: 'Martin', age: 74},
        ],
        genre: ['fantasy', 'fantasy', 'fantasy']
    },

    {
        name: "Qwerty",
        pageCount: 90,
        authors: [
            {name: 'Mykola', surname: 'Chernysh', age: 31},
            {name: 'Mykola', surname: 'Chernysh', age: 74}
        ],
        genre: ['fantasy', 'fantasy', 'fantasy']
    }
];

// знайти найбільшу книжку

let maxPage = 0;
let nameMaxPageBook = [];

for (let i = 0; i < booksArr.length; i++) {
    const book = booksArr[i];

    if (book["pageCount"] > maxPage) {
        maxPage = booksArr[i]["pageCount"];
        nameMaxPageBook = [];
        nameMaxPageBook[nameMaxPageBook.length] = book["name"];
    } else if (book["pageCount"] === maxPage) {
        nameMaxPageBook[nameMaxPageBook.length] = book["name"];
    }
}

console.log(nameMaxPageBook);

console.log('----------------');

//  знайти книжку/ки з найбільшою кількістю жанрів

let maxGenre = 0;
let nameMaxGenreBook = [];

for (let i = 0; i < booksArr.length; i++) {

    if (booksArr[i]["genre"].length > maxGenre) {
        maxGenre = booksArr[i]["genre"].length;
        nameMaxGenreBook = [];
        nameMaxGenreBook[nameMaxGenreBook.length] = booksArr[i]["name"];

    } else if (booksArr[i]["genre"].length === maxGenre) {
        nameMaxGenreBook[nameMaxGenreBook.length] = booksArr[i]["name"];
    }

}
console.log(nameMaxGenreBook);

console.log('----------------');

// знайти книжку/ки з найдовшою назвою

let longestName = 0;
let longestNameBook = [];

for (let i = 0; i < booksArr.length; i++) {
    const book = booksArr[i];

    if (book["name"].length > longestName) {
        longestName = book["name"].length;
        longestNameBook = [];
        longestNameBook[longestNameBook.length] = book["name"];
    } else if (book["name"].length === longestName) {
        longestNameBook[longestNameBook.length] = book["name"];
    }
}

console.log(longestNameBook);

console.log('----------------');

// знайти книжку/ки які писали 2 автори

let authorsBook = [];

for (const book of booksArr) {
    if (book["authors"].length === 2) {
        authorsBook[authorsBook.length] = book["name"];
    }
}

console.log(authorsBook);

console.log('----------------');

// знайти книжку/ки які писав 1 автор

let authorBook = [];

for (const book of booksArr) {
    if (book["authors"].length === 1) {
        authorBook[authorBook.length] = book["name"];
    }
}

console.log(authorBook);
