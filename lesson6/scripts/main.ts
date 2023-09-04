'use strict';

// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strLength = (str: string): number => {
    return str.length;
};

console.log(strLength('hello world'));
console.log(strLength('lorem ipsum'));
console.log(strLength('javascript is cool'));
console.log('-----------------');

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strToUpperCase = (str: string): string => {
    return str.toUpperCase();
}

console.log(strToUpperCase('hello world'));
console.log(strToUpperCase('lorem ipsum'));
console.log(strToUpperCase('javascript is cool'));
console.log('-----------------');

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strToLowerCase = (str: string): string => {
    return str.toLowerCase();
}

console.log(strToLowerCase('HELLO WORLD'));
console.log(strToLowerCase('LOREM IPSUM'));
console.log(strToLowerCase('JAVASCRIPT IS COOL'));
console.log('-----------------');

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str: string = ' dirty          string   ';

let cleanSpaces = (str: string): string => {
    return str.replace(/ +/g, ' ').trim();
}

console.log(strToLowerCase(cleanSpaces(str)));
console.log('-----------------');

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToArray = (str: string): string[] => {
    return str.split(' ');
}

let str1: string = 'Ревуть воли як ясла повні';
let arr1: string[] = stringToArray(str1);
console.log(arr1);
console.log('-----------------');


// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let convertToStrings = (array: number[]): string[] => {
    return array.map((value: number) => String(value));
}

let arrayNumbers: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(convertToStrings(arrayNumbers));
console.log('-----------------');

// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (array: number[], direction: string): number[] | string => {
    return direction === 'ascending' ? array.sort((a: number, b: number) => a - b)
        : direction === 'descending' ? array.sort((a: number, b: number) => b - a)
            : 'Enter a valid direction!';
}

let nums: number[] = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log('-----------------');

// 8 - є масив:

interface ICoursesAndDuration {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray: ICoursesAndDuration[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration
let sortArr = (array: object[]): object[] => {
    return array.sort((a: object, b: object) => b['monthDuration'] - a['monthDuration']);
}

console.log(sortArr(coursesAndDurationArray));
console.log('-----------------');

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = (array: object[]): object[] => {
    return array.filter((value: object): boolean => value['monthDuration'] > 5);
}

let copyCoursesAndDurationArray: ICoursesAndDuration[] = coursesAndDurationArray.slice(0);

console.log(filterArr(copyCoursesAndDurationArray));
console.log('-----------------');

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let addIdToArrayElement = (array: object[]): object[] => {
    return array.map((value: object, index: number): object => {
        return {id: index + 1, ...value};
    });
}

console.log(addIdToArrayElement(copyCoursesAndDurationArray));
console.log('-----------------');


// 9 - описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

interface IDeckOfCards {
    cardSuit: string;
    value: string[];
    color: string;
}

let deckOfCards1: IDeckOfCards[] = [
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
]

// - знайти піковий туз

let findCard1 = (arrayCards: object[], cardSuit: string, searchElem: string): object => {
    let foundCard: object = {};

    arrayCards.forEach((item: object): void => {
        if (item['cardSuit'] === cardSuit && item['value'].includes(searchElem)) {
            item['value'] = searchElem;
            foundCard = item;
        }
    })

    return foundCard;
}

console.log(findCard1(deckOfCards1, 'spade', 'ace'));
console.log('-----------------');

// - всі шістки

let deckOfCards2: IDeckOfCards[] = [
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
]

let findCard2 = (arrayCards: object[], searchElem: string): object[] => {
    let foundCard: object[] = [];

    arrayCards.forEach((item: object): void => {
        if (item['value'].includes(searchElem)) {
            item['value'] = searchElem;
            foundCard.push(item);
        }
    })

    return foundCard;
}

console.log(findCard2(deckOfCards2, '6'));
console.log('----------------');

// - всі червоні карти
let deckOfCards3: IDeckOfCards[] = [
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
]

let findCard3 = (arrayCards: object[], color: string): object[] => {
    let foundCard: object[] = [];

    arrayCards.forEach((item: object): void => {
        if (item['color'] === color) {
            foundCard.push(item);
        }
    })

    return foundCard;
}

console.log(findCard3(deckOfCards3, 'red'));
console.log('------------------');

// - всі буби
let deckOfCards4: IDeckOfCards[] = [
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
]

let findCard4 = (arrayCards: object[], searchSuit: string): object[] => {
    let foundCard: object[] = [];

    arrayCards.forEach((item: object): void => {
        if (item['cardSuit'] === searchSuit) {
            foundCard.push(item);
        }
    })

    return foundCard;
}

console.log(findCard4(deckOfCards4, 'diamond'));
console.log('----------------');

// - всі трефи від 9 та більше
let deckOfCards5: IDeckOfCards[] = [
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
]

let findCard5 = (arrayCards: object[], cardSuit: string, fromValue: string): object => {
    let foundCard: object = {};

    arrayCards.forEach((item: object): void => {
        if (item['cardSuit'] === cardSuit) {
            let index = item['value'].indexOf(fromValue);

            item['value'] = item['value'].slice(index);
            foundCard = item;
        }
    })

    return foundCard;
}

console.log(findCard5(deckOfCards5, 'clubs', '9'));
console.log('-----------------');

// 10 - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let deckOfCards6: IDeckOfCards[] = [
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
]

let packingCardsBySuit = (arrayCards) => {
    return arrayCards.reduce((acc: object, item: object) => {
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
    }, {})
}

console.log(packingCardsBySuit(deckOfCards6));
console.log('-----------------');

// 11 - взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray: object[] = [
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

let findObjectByModule = (array: object[], module: string) => {
    return array.filter((item: object) => item['modules'].includes(module));
}

console.log(findObjectByModule(coursesArray, 'sass'));
console.log(findObjectByModule(coursesArray, 'docker'));