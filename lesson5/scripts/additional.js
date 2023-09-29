'use strict';

// Всі функції повинні бути описані стрілочним типом!!!!

// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const minNumber = (a, b, c) => {
    return a < b && a < c ? a
        : b < a && b < c ? b
            : c;
}
console.log(minNumber(3, 2, 5));

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const maxNumber = (a, b, c) => {
    return a > b && a > c ? a
        : b > a && b > c ? b
            : c;
}
console.log(maxNumber(3, 2, 5));

// 3 створити функцію яка повертає найбільше число з масиву

const maxNumArray = (array) => {
    let maxNum = array[0];

    for (const item of array) {
        if (item > maxNum) {
            maxNum = item;
        }
    }

    return maxNum;
}
console.log(maxNumArray([2, 10, 6, 8]));

// 4 - створити функцію яка повертає найменьше число з масиву

const minNumArray = (array) => {
    let minNum = array[0];

    for (const item of array) {
        if (item < minNum) {
            minNum = item;
        }
    }

    return minNum;
}
console.log(minNumArray([2, 10, 6, 8]));

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sumNumArray = (array) => {
    let result = 0;

    for (const item of array) {
        result += item;
    }

    return result;
}
console.log(sumNumArray([2, 10, 6, 8]));
console.log('--------------');

// 6 - Дано натуральное число n. Выведите все числа от 1 до n.

const naturalNumbers = (n) => {
    if (n <= 1) {
        return 1;
    }

    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
console.log(naturalNumbers(5));
console.log('--------------');

// 7 - - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

const outputNumbers = (a, b) => {
    if (a === b) {
        return a;
    }

    if (a <= b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }

    if (a >= b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

console.log(outputNumbers(5, 10));

// 8 - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const swaps = (array, i) => {
    for (let j = 0; j < array.length; j++) {
        if (array[j] === array[i]) {
            console.log(array[j + 1]);
            
        }
    }

    return array;
}

console.log(swaps([9,8,0,4], 1));