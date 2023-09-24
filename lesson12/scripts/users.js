'use strict';

// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const allUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}

const usersList = async () => {
    const users = await allUsers();
    const usersContainer = document.getElementById('usersContainer');
    const usersList = document.getElementById('usersList');
    usersList.style.listStyle = 'none';

    users.forEach(user => {
        const userItem = document.createElement('li');
        const userLink = document.createElement('a');

        userLink.href = `./userInfo.html?userId=${user.id}`;

        userLink.innerText = `${user.id}. ${user.name}`;

        userItem.appendChild(userLink);
        usersList.appendChild(userItem);
    });

    usersContainer.appendChild(usersList);
}

usersList().then();