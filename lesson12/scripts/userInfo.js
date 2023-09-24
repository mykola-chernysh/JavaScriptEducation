'use strict';

const userInfo = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json());
}

const getUserInfo = async () => {
    const userId = new URL(location.href).searchParams.get('userId');
    const userInfoById = await userInfo(+userId);
    const userContainer = document.getElementById('userInfo');

    userContainer.innerText = JSON.stringify(userInfoById).split(',').join(', \n');
}

getUserInfo().then();