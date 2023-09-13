'use strict';

document.body.style.background = '#f5f5f5';
let mainBlock = document.getElementById('wrapper');

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.innerText = 'Hello world!'
block.style.color = 'red';

mainBlock.appendChild(block);
mainBlock.appendChild(block.cloneNode(true));

// - Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let someArr = ['Main','Products','About us','Contacts'];
let list = document.createElement('ul');

list.style.marginTop = '20px';
list.style.marginBottom = '20px';

for (const item of someArr) {
    let listItem = document.createElement('li');

    listItem.innerText = item;
    list.appendChild(listItem);
}

mainBlock.appendChild(list);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesBlock = document.createElement('div');
coursesBlock.style.display = 'flex';
coursesBlock.style.flexWrap = 'wrap';
coursesBlock.style.justifyContent = 'center';
coursesBlock.style.alignItems = 'center';
coursesBlock.style.gap = '20px';
coursesBlock.style.marginBottom = '50px';

for (const item of coursesAndDurationArray) {
    let courseBlocks = document.createElement('div');
    let courseTitle = document.createElement('h4');
    let courseDuration = document.createElement('p');

    courseBlocks.style.textAlign = 'center';
    courseBlocks.style.border = '1px solid black';
    courseBlocks.style.padding = '10px';
    courseBlocks.style.minWidth = '165px';

    courseTitle.innerText = item['title'];
    courseDuration.innerText = item['monthDuration'];

    courseBlocks.append(courseTitle, courseDuration);
    coursesBlock.appendChild(courseBlocks);
}

mainBlock.appendChild(coursesBlock);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let blockOfCourses = document.createElement('div');
blockOfCourses.classList.add('courses-block');

for (const item of coursesAndDurationArray) {
    let courseBlocks = document.createElement('div');
    let courseTitle = document.createElement('h4');
    let courseDuration = document.createElement('p');

    courseBlocks.classList.add('item');
    courseTitle.classList.add('heading');
    courseDuration.classList.add('description');

    courseTitle.innerText = item['title'];
    courseDuration.innerText = item['monthDuration'];

    courseBlocks.append(courseTitle, courseDuration);
    blockOfCourses.appendChild(courseBlocks);
}

mainBlock.appendChild(blockOfCourses);

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Марджорі Жаклін "Мардж" Сімпсон (у дівочості Був\'є) (англ. Marjorie Jacqueline "Marge" Simpson) - постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї — намисто зі штучних перлів і їздить помаранчевим універсалом. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття — домогосподарка, більшу частину часу проводить у турботі про будинок, дітей та Гомера. Мардж копіює стереотип провінційної американської домогосподарки 50-х років. Мардж – єдиний член сім\'ї, який відвідує церкву добровільно. Намагається підтримувати моральність як своєї сім\'ї, а й усього міста. Відмінно готує, особливо славляться її свинячі відбивні та зефір. Улюблена страва – локшина з олією.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ліза Марі Сімпсон (англ. Lisa Marie Simpson) - героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сім\'ї, восьмирічна дівчинка, що виділяється серед інших Сімпсонів насамперед своїм розумом і розважливістю.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Маргарет Евелін "Меґгі" Сімпсон (англ. Margaret Evelyn "Maggie" Simpson) - персонаж мультсеріалу "Сімпсони". Вперше з\'явилася на телебаченні в шоу Трейсі Ульман, в короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі була придумана і розроблена карикатуристом Меттом Грейнінгом, поки він чекав на зустріч з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга. Після появи у шоу Трейсі Ульман, через три роки сім\'я Сімпсонів здобула власний серіал на телеканалі Fox, дебют відбувся 17 грудня 1989 року.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let simpsonsBlock = document.createElement('div');
simpsonsBlock.classList.add('simpsons-block');

for (const item of simpsons) {
    let memberFamily = document.createElement('div');

    let memberDescContainer = document.createElement('div');
    let memberName = document.createElement('h2');
    let memberSurname = document.createElement('p');
    let memberAge = document.createElement('p');
    let memberInfo = document.createElement('p');
    let memberPhotoContainer = document.createElement('div');
    let memberPhoto = document.createElement('img');

    memberDescContainer.classList.add('member-description');
    memberFamily.classList.add('member');
    memberName.classList.add('member-name');
    memberSurname.classList.add('member-surname');
    memberAge.classList.add('member-age');
    memberInfo.classList.add('member-info');
    memberPhotoContainer.classList.add('member-photo-container');
    memberPhoto.classList.add('member-photo');

    memberName.innerText = `Name: ${item['name']}`;
    memberSurname.innerText = `Surname: ${item['surname']}`;
    memberAge.innerText = `Age: ${item['age']}`;
    memberInfo.innerText = `Info: ${item['info']}`;
    memberPhoto.setAttribute('src', item['photo']);

    memberPhotoContainer.appendChild(memberPhoto);
    memberDescContainer.append(memberName, memberSurname, memberAge, memberInfo, );
    memberFamily.append(memberDescContainer, memberPhotoContainer);
    simpsonsBlock.appendChild(memberFamily);
}

mainBlock.appendChild(simpsonsBlock);

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesContainer = document.createElement('div');
coursesContainer.classList.add('courses-container');

mainBlock.appendChild(coursesContainer);

for (const item of coursesArray) {
    let itemBlock = document.createElement('div');
    let itemTitle = document.createElement('h2');
    let itemDurationContainer = document.createElement('div');
    let itemMonthDuration = document.createElement('p');
    let itemMonthDurationText = document.createElement('p');
    let itemHourDurationText = document.createElement('p');
    let itemLine = document.createElement('p');
    let itemHourDuration = document.createElement('p');
    let itemModulesText = document.createElement('p');
    let itemModules = document.createElement('ul');

    itemBlock.classList.add('item-block');
    itemDurationContainer.classList.add('item-duration-container');
    itemModules.classList.add('item-modules');

    itemTitle.innerText = item['title'];
    itemMonthDuration.innerText = item['monthDuration'];
    itemHourDuration.innerText = item['hourDuration'];
    itemModulesText.innerText = 'Modules:'

    itemMonthDurationText.innerText = 'Month duration:';
    itemHourDurationText.innerText = 'Hour duration:';
    itemLine.innerText= '|';

    let listModules = item['modules'];

    for (const module of listModules) {
        let moduleItem = document.createElement('li');

        moduleItem.innerText = module;

        itemModules.appendChild(moduleItem);
    }


    itemDurationContainer.append(itemMonthDurationText, itemMonthDuration, itemLine, itemHourDurationText, itemHourDuration);
    itemBlock.append(itemTitle, itemDurationContainer, itemModulesText, itemModules);
    coursesContainer.appendChild(itemBlock);
}

