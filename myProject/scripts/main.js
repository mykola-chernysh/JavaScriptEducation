'use strict';

const allUsers = () => fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json());

const usersDisplay = async () => {
    const users = await allUsers();
    console.log(users);
    const usersContainer = document.getElementById('users-container');

    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.classList.add('user-block');

        const userInfoWrapper = document.createElement('div');
        userInfoWrapper.classList.add('user-info-wrapper');

        userBlock.onselectstart = (event) => {
            event.preventDefault();
        };

        userBlock.onmouseover = () => {
            userBlock.style.cursor = 'default';
        };

        const userName = document.createElement('p');
        const userId = document.createElement('p');
        const userInfo = document.createElement('a');
        userInfo.classList.add('user-button');

        userName.innerText = user.name;
        userId.innerText = `${user.id}.`;
        userInfo.innerText = 'Info about the user';
        userInfo.href = `./user-details.html?userId=${user.id}`;

        userInfoWrapper.append(userId, userName);
        userBlock.append(userInfoWrapper, userInfo);
        usersContainer.appendChild(userBlock);
    });
}

usersDisplay().then();