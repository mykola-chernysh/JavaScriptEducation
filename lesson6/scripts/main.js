'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
var strLength = function (str) {
    return str.length;
};
console.log(strLength('hello world'));
console.log(strLength('lorem ipsum'));
console.log(strLength('javascript is cool'));
console.log('-----------------');
// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
var strToUpperCase = function (str) {
    return str.toUpperCase();
};
console.log(strToUpperCase('hello world'));
console.log(strToUpperCase('lorem ipsum'));
console.log(strToUpperCase('javascript is cool'));
console.log('-----------------');
// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
var strToLowerCase = function (str) {
    return str.toLowerCase();
};
console.log(strToLowerCase('HELLO WORLD'));
console.log(strToLowerCase('LOREM IPSUM'));
console.log(strToLowerCase('JAVASCRIPT IS COOL'));
console.log('-----------------');
// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
var str = ' dirty          string   ';
var cleanSpaces = function (str) {
    return str.replace(/ +/g, ' ').trim();
};
console.log(strToLowerCase(cleanSpaces(str)));
console.log('-----------------');
// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
var stringToArray = function (str) {
    return str.split(' ');
};
var str1 = 'Ревуть воли як ясла повні';
var arr1 = stringToArray(str1);
console.log(arr1);
console.log('-----------------');
// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
var convertToStrings = function (array) {
    return array.map(function (value) { return String(value); });
};
var arrayNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(convertToStrings(arrayNumbers));
console.log('-----------------');
// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
var sortNums = function (array, direction) {
    return direction === 'ascending' ? array.sort(function (a, b) { return a - b; })
        : direction === 'descending' ? array.sort(function (a, b) { return b - a; })
            : 'Enter a valid direction!';
};
var nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log('-----------------');
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
//  -- відсортувати його за спаданням за monthDuration
var sortArr = function (array) {
    return array.sort(function (a, b) { return b['monthDuration'] - a['monthDuration']; });
};
console.log(sortArr(coursesAndDurationArray));
console.log('-----------------');
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
var filterArr = function (array) {
    return array.filter(function (value) { return value['monthDuration'] > 5; });
};
var copyCoursesAndDurationArray = coursesAndDurationArray.slice(0);
console.log(filterArr(copyCoursesAndDurationArray));
console.log('-----------------');
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
var addIdToArrayElement = function (array) {
    return array.map(function (value, index) {
        return __assign({ id: index + 1 }, value);
    });
};
console.log(addIdToArrayElement(copyCoursesAndDurationArray));
console.log('-----------------');
var deckOfCards1 = [
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    }
];
// - знайти піковий туз
var findCard1 = function (arrayCards, cardSuit, searchElem) {
    var foundCard = {};
    arrayCards.forEach(function (item) {
        if (item['cardSuit'] === cardSuit && item['value'].includes(searchElem)) {
            item['value'] = searchElem;
            foundCard = item;
        }
    });
    return foundCard;
};
console.log(findCard1(deckOfCards1, 'spade', 'ace'));
console.log('-----------------');
// - всі шістки
var deckOfCards2 = [
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    }
];
var findCard2 = function (arrayCards, searchElem) {
    var foundCard = [];
    arrayCards.forEach(function (item) {
        if (item['value'].includes(searchElem)) {
            item['value'] = searchElem;
            foundCard.push(item);
        }
    });
    return foundCard;
};
console.log(findCard2(deckOfCards2, '6'));
console.log('----------------');
// - всі червоні карти
var deckOfCards3 = [
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    }
];
var findCard3 = function (arrayCards, color) {
    var foundCard = [];
    arrayCards.forEach(function (item) {
        if (item['color'] === color) {
            foundCard.push(item);
        }
    });
    return foundCard;
};
console.log(findCard3(deckOfCards3, 'red'));
console.log('------------------');
// - всі буби
var deckOfCards4 = [
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    }
];
var findCard4 = function (arrayCards, searchSuit) {
    var foundCard = [];
    arrayCards.forEach(function (item) {
        if (item['cardSuit'] === searchSuit) {
            foundCard.push(item);
        }
    });
    return foundCard;
};
console.log(findCard4(deckOfCards4, 'diamond'));
console.log('----------------');
// - всі трефи від 9 та більше
var deckOfCards5 = [
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    }
];
var findCard5 = function (arrayCards, cardSuit, fromValue) {
    var foundCard = {};
    arrayCards.forEach(function (item) {
        if (item['cardSuit'] === cardSuit) {
            var index = item['value'].indexOf(fromValue);
            item['value'] = item['value'].slice(index);
            foundCard = item;
        }
    });
    return foundCard;
};
console.log(findCard5(deckOfCards5, 'clubs', '9'));
console.log('-----------------');
// 10 - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
var deckOfCards6 = [
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: 'red'
    }
];
var packingCardsBySuit = function (arrayCards) {
    return arrayCards.reduce(function (acc, item) {
        switch (item['cardSuit']) {
            case 'spade':
                acc['spades'] = item['value'];
                break;
            case 'diamond':
                acc['diamonds'] = item['value'];
                break;
            case 'heart':
                acc['hearts'] = item['value'];
                break;
            case 'clubs':
                acc['clubs'] = item['value'];
                break;
        }
        return acc;
    }, {});
};
console.log(packingCardsBySuit(deckOfCards6));
console.log('-----------------');
// 11 - взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
var coursesArray = [
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
var findObjectByModule = function (array, module) {
    return array.filter(function (item) { return item['modules'].includes(module); });
};
console.log(findObjectByModule(coursesArray, 'sass'));
console.log(findObjectByModule(coursesArray, 'docker'));
