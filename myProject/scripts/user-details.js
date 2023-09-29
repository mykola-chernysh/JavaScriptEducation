'use strict';

const userById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json());
}

const userPostsById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json());
}

const getUserInfo = async () => {
    const url = new URL(location.href);
    const userId = url.searchParams.get('userId');
    const user = await userById(+userId);
    const userPosts = await userPostsById(+userId);

    const userContainer = document.getElementById('user-container');
    const userBlock = document.createElement('div');
    userBlock.classList.add('user-info');

    userContainer.appendChild(userBlock);

    userInfoDisplay(user, userBlock);
    showUserPostsTitle(userPosts, userBlock);
}

getUserInfo().then();

function userInfoDisplay(obj, block) {
    for (const key in obj) {
        let value = obj[key];

        if (typeof value === 'object') {
            userAddBlock(key, value, block);
        } else {
            userBuilder(key, value, block);
        }
    }
}

const userInfoBlock = document.createElement('div');
userInfoBlock.classList.add('user-info-block', 'user-block', 'user-info-block-all');
const userTextInfo = document.createElement('p');
userTextInfo.innerText = 'Information:';

const userContactsBlock = document.createElement('div');
userContactsBlock.classList.add('user-contacts', 'user-block', 'user-info-block-all');
const userContactsInfo = document.createElement('p');
userContactsInfo.innerText = 'Contacts:';

const userAddressBlock = document.createElement('div');
userAddressBlock.classList.add('user-address', 'user-block', 'user-info-block-all');

const userGeoBlock = document.createElement('div');
userGeoBlock.classList.add('user-geo', 'user-block', 'user-info-block-all');

const userCompanyBlock = document.createElement('div');
userCompanyBlock.classList.add('user-company', 'user-block', 'user-info-block-all');

const id = document.createElement('p');
id.classList.add('user-id');

const name = document.createElement('p');
name.classList.add('user-name');

const userName = document.createElement('p');
userName.classList.add('user-user-name');

const userEmail = document.createElement('p');
userEmail.classList.add('user-email');

const userPhone = document.createElement('p');
userPhone.classList.add('user-phone');

const userWebsite = document.createElement('p');
userWebsite.classList.add('user-website');

const userStreet = document.createElement('p');
userStreet.classList.add('user-street');

const userSuite = document.createElement('p');
userSuite.classList.add('user-suit');

const userCity = document.createElement('p');
userCity.classList.add('user-city');

const userZipcode = document.createElement('p');
userZipcode.classList.add('user-email');

const userGeoLat = document.createElement('p');
userGeoLat.classList.add('user-ltn');

const userGeoLng = document.createElement('p');
userGeoLng.classList.add('user-lng');

const userCompanyName = document.createElement('p');
userCompanyName.classList.add('user-company-name');

const userCompanyCatchPhrase = document.createElement('p');
userCompanyCatchPhrase.classList.add('user-company-catch-phrase');

const userCompanyBs = document.createElement('p');
userCompanyBs.classList.add('user-company-bs');


userInfoBlock.append(userTextInfo, id, name, userName);
userContactsBlock.append(userContactsInfo, userEmail, userPhone, userWebsite);
userAddressBlock.append(userStreet, userSuite, userCity, userZipcode);
userGeoBlock.append(userGeoLat, userGeoLng);
userCompanyBlock.append(userCompanyName, userCompanyCatchPhrase, userCompanyBs);

function userBuilder(key, value, block) {

    switch (key) {
        case 'id':
            id.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'name':
            name.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'username':
            userName.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'email':
            userEmail.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'phone':
            userPhone.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'website':
            userWebsite.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'street':
            userStreet.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'suite':
            userSuite.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'city':
            userCity.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'zipcode':
            userZipcode.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'lat':
            userGeoLat.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'lng':
            userGeoLng.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'nameCompany':
            userCompanyName.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'catchPhrase':
            userCompanyCatchPhrase.innerHTML = `<b>${key}:</b> ${value}`;
            break;

        case 'bs':
            userCompanyBs.innerHTML = `<b>${key}:</b> ${value}`;
            break;
    }

    block.appendChild(userInfoBlock);
    block.appendChild(userContactsBlock);
    block.appendChild(userAddressBlock);
    userAddressBlock.appendChild(userGeoBlock);
    block.appendChild(userCompanyBlock);
}

function userAddBlock(key, value, block) {
    const keyName = document.createElement('p');
    keyName.classList.add('key-name');
    keyName.innerHTML = `<b>${key}:</b>`;

    switch (key) {
        case 'address':
            userAddressBlock.prepend(keyName);
            break;

        case 'geo':
            userGeoBlock.prepend(keyName);
            break;

        case 'company':
            delete Object.assign(value, {['nameCompany']: value['name']})['name'];
            userCompanyBlock.prepend(keyName);
            break;
    }

    userInfoDisplay(value, block);
}


function showUserPostsTitle(posts, block) {
    const buttonPostTitle = document.createElement('button');
    buttonPostTitle.classList.add('user-posts', 'user-button');
    buttonPostTitle.innerText = 'Post of current user';

    const postsTitleBlocks = document.createElement('div');
    postsTitleBlocks.classList.add('posts-title-blocks', 'posts-display');

    block.appendChild(buttonPostTitle);
    block.appendChild(postsTitleBlocks);

    posts.forEach(value => {
        const postTitleBlock = document.createElement('div');
        postTitleBlock.classList.add('post-title-block', 'user-block');
        block.appendChild(postTitleBlock);

        const postTitle = document.createElement('h4');
        postTitle.innerText = value.title;

        const postInfo = document.createElement('a');
        postInfo.classList.add('post-info', 'user-button');
        postInfo.href = `./post-details.html?postId=${value.id}`;
        postInfo.innerText = 'Open post';

        postTitleBlock.append(postTitle, postInfo);
        postsTitleBlocks.appendChild(postTitleBlock);
    })

    buttonPostTitle.addEventListener('click', (event) => {
        event.preventDefault();

        postsTitleBlocks.classList.toggle('posts-display');
    });
}