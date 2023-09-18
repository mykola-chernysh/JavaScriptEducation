'use strict';

// 3 - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let dateBlock = document.createElement('div');
let bodySession = document.getElementById('session');
dateBlock.classList.add('date-block');
bodySession.prepend(dateBlock);

let dateParse = JSON.parse(localStorage.getItem('session'));
let dateHours = new Date(dateParse).getHours();
let dateMinutes = new Date(dateParse).getMinutes();
let dateSeconds = new Date(dateParse).getSeconds();

dateBlock.innerText = `${dateHours}:${dateMinutes}:${dateSeconds}`;

// 4 -зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let bigArr = [
    {name: 'A', age: 1},
    {name: 'B', age: 2},
    {name: 'C', age: 3},
    {name: 'D', age: 4},
    {name: 'E', age: 5},
    {name: 'F', age: 6},
    {name: 'G', age: 7},
    {name: 'H', age: 8},
    {name: 'I', age: 9},
    {name: 'J', age: 10},
    {name: 'K', age: 11},
    {name: 'L', age: 12},
    {name: 'M', age: 13},
    {name: 'N', age: 14},
    {name: 'O', age: 15},
    {name: 'P', age: 16},
    {name: 'Q', age: 17},
    {name: 'R', age: 18},
    {name: 'S', age: 19},
    {name: 'T', age: 20},
    {name: 'U', age: 21},
    {name: 'V', age: 22},
    {name: 'W', age: 23},
    {name: 'X', age: 24},
    {name: 'Y', age: 25},
    {name: 'Z', age: 26},
    {name: 'A', age: 27},
    {name: 'B', age: 28},
    {name: 'C', age: 29},
    {name: 'D', age: 30},
    {name: 'E', age: 31},
    {name: 'F', age: 32},
    {name: 'G', age: 33},
    {name: 'H', age: 34},
    {name: 'I', age: 35},
    {name: 'J', age: 36},
    {name: 'K', age: 37},
    {name: 'L', age: 38},
    {name: 'M', age: 39},
    {name: 'N', age: 40},
    {name: 'O', age: 41},
    {name: 'P', age: 42},
    {name: 'Q', age: 43},
    {name: 'R', age: 44},
    {name: 'S', age: 45},
    {name: 'T', age: 46},
    {name: 'U', age: 47},
    {name: 'V', age: 48},
    {name: 'W', age: 49},
    {name: 'X', age: 50},
    {name: 'Y', age: 51},
    {name: 'Z', age: 52},
    {name: 'A', age: 53},
    {name: 'B', age: 54},
    {name: 'C', age: 55},
    {name: 'D', age: 56},
    {name: 'E', age: 57},
    {name: 'F', age: 58},
    {name: 'G', age: 59},
    {name: 'H', age: 60},
    {name: 'I', age: 61},
    {name: 'K', age: 62},
    {name: 'L', age: 63},
    {name: 'M', age: 64},
    {name: 'N', age: 65},
    {name: 'O', age: 66},
    {name: 'P', age: 67},
    {name: 'Q', age: 68},
    {name: 'R', age: 69},
    {name: 'S', age: 70},
    {name: 'T', age: 71},
    {name: 'U', age: 72},
    {name: 'V', age: 73},
    {name: 'W', age: 74},
    {name: 'X', age: 75},
    {name: 'Y', age: 76},
    {name: 'Z', age: 77},
    {name: 'A', age: 78},
    {name: 'B', age: 79},
    {name: 'C', age: 80},
    {name: 'D', age: 81},
    {name: 'E', age: 82},
    {name: 'F', age: 83},
    {name: 'G', age: 84},
    {name: 'H', age: 85},
    {name: 'I', age: 86},
    {name: 'J', age: 87},
    {name: 'K', age: 88},
    {name: 'L', age: 89},
    {name: 'M', age: 90},
    {name: 'N', age: 91},
    {name: 'O', age: 92},
    {name: 'P', age: 93},
    {name: 'Q', age: 94},
    {name: 'R', age: 95},
    {name: 'S', age: 96},
    {name: 'T', age: 97},
    {name: 'U', age: 98},
    {name: 'V', age: 99},
    {name: 'V', age: 100}
];

let slideBlock = document.createElement('div');
let itemsBlock = document.createElement('div');
let btnBlock = document.createElement('div');
let prevBtn = document.createElement('button');
let nextBtn = document.createElement('button');

slideBlock.classList.add('slide-block');
itemsBlock.classList.add('items-block');
btnBlock.classList.add('btn-block');
prevBtn.classList.add('prev-btn');
prevBtn.setAttribute('type', 'button');
prevBtn.innerText = 'Prev';
nextBtn.classList.add('next-btn');
nextBtn.setAttribute('type', 'button');
nextBtn.innerText = 'Next';

btnBlock.append(prevBtn, nextBtn);
slideBlock.append(btnBlock, itemsBlock);
bodySession.appendChild(slideBlock);

let count = 10;

for (let i = 0; i < count; i++) {
    let elemBlock = document.createElement('div');
    elemBlock.classList.add('el-block');
    elemBlock.innerText = `${bigArr[i].name} - ${bigArr[i].age}`;
    itemsBlock.appendChild(elemBlock);
    prevBtn.disabled = true;
}

nextBtn.addEventListener('click', function () {
    prevBtn.disabled = false;
    itemsBlock.innerHTML = '';

    let nextArr = bigArr.slice(count, count + 10);
    count += 10;


    for (let i = 0; i < nextArr.length; i++) {
        let elemBlock = document.createElement('div');

        elemBlock.classList.add('el-block');
        elemBlock.innerText = `${nextArr[i].name} - ${nextArr[i].age}`;
        itemsBlock.appendChild(elemBlock);
    }

    if (count === 100) {
        nextBtn.disabled = true;
    }
});

prevBtn.addEventListener('click', function () {
    nextBtn.disabled = false;
    itemsBlock.innerHTML = '';
    count -= 10;

    let prevArr = bigArr.slice(count - 10, count);

    if (count === 10) {
        prevBtn.disabled = true;
    }

    for (let i = 0; i < prevArr.length; i++) {
        let elemBlock = document.createElement('div');
        elemBlock.classList.add('el-block');
        elemBlock.innerText = `${prevArr[i].name} - ${prevArr[i].age}`;
        itemsBlock.appendChild(elemBlock);
    }
});







