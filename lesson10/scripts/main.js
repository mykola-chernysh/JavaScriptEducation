'use strict';

// 1 - Стоврити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let formWrapper = document.getElementById('form-wrapper');
let blockOfUsers = document.createElement('div');

formWrapper.appendChild(blockOfUsers);

let userForm = document.forms['user'];

userForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let newBlock = document.createElement('div');
    let textName = document.createElement('p');
    let textSurname = document.createElement('p');
    let textAge = document.createElement('p');

    textName.innerText = `Name: ${this.userName.value}`;
    textSurname.innerText = `Surname: ${this.userSurname.value}`;
    textAge.innerText = `Age: ${this.userAge.value}`;

    newBlock.classList.add('user-block');
    newBlock.append(textName, textSurname, textAge);
    blockOfUsers.appendChild(newBlock);
});

// 2 - є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numBlock = document.getElementById('add-one-after-reboot');
let resetButton = document.getElementsByClassName('reset-count');

let count = localStorage.getItem('count') || 1;
window.addEventListener('load', function () {
    count = +count + 1;
    localStorage.setItem('count', count);
    numBlock.innerText = localStorage.getItem('count') || 1;
})

resetButton[0].onclick = function () {
    count = 1;
    numBlock.innerText = count;
    localStorage.setItem('count', count);
}

// 3 - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

window.addEventListener('load', function () {
    let newDate = new Date();
    localStorage.setItem('session', JSON.stringify(newDate));
});

// 5 - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let divBlock = document.createElement('div');
let hiddenText = document.createElement('p');
let hiddenBtn = document.createElement('button');

divBlock.classList.add('block-hidden');
hiddenText.classList.add('hidden-text');
hiddenBtn.classList.add('hidden-btn');

divBlock.append(hiddenText, hiddenBtn);
document.body.appendChild(divBlock);

hiddenText.innerText = 'The text to hide!';
hiddenBtn.innerText = 'Hide text';

hiddenBtn.addEventListener('click', function () {
    hiddenText.classList.toggle('hidden-btn-hide');
});

// 6 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputBlock = document.createElement('div');
let inputAge = document.createElement('input');
let btnCheckAge = document.createElement('button');
let textCheckAge = document.createElement('p');

inputBlock.classList.add('input-block');
inputAge.classList.add('input-age');
btnCheckAge.classList.add('check-btn');
textCheckAge.classList.add('check-text');

inputAge.placeholder = 'Enter age for verification.';
inputBlock.append(inputAge, btnCheckAge, textCheckAge);
document.body.appendChild(inputBlock);

btnCheckAge.innerText = 'Check age';

btnCheckAge.addEventListener('click', function () {
    let age = +inputAge.value;

    if (isNaN(age) || age < 0 || age > 100 || !age) {
        textCheckAge.style.color = 'red';
        textCheckAge.innerText = 'Enter the correct age!';
    }else if (age < 18) {
        textCheckAge.style.color = 'green';
        textCheckAge.innerText = 'You are under 18 years old!';
    } else {
        textCheckAge.style.color = 'blue';
        textCheckAge.innerText = 'You are 18 or older!';
    }
});

