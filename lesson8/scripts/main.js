'use strict';

// 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [];

usersArray.push(new User(1, 'Alex', 'Lion', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(2, 'Marty', 'Zebra', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(3, 'Gloria', 'Hippo', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(4, 'Melman', 'Giraffe', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(5, 'Julian', 'Lemur', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(6, 'Mort', 'Lemur', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(7, 'Skipper', 'Penguin', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(8, 'Kowalski', 'Penguin', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(9, 'Rico', 'Penguin', 'qwerty@qwe.com', '+380971234567'));
usersArray.push(new User(10, 'Private', 'Penguin', 'qwerty@qwe.com', '+380971234567'));

// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = usersArray.filter(item => item['id'] % 2 === 0);
console.log(filteredUsers);

// 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = usersArray.sort((a, b) => a['id'] - b['id']);
console.log(sortedUsers);

// 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientsArray = [];

clientsArray.push(new Client(1, 'Alex', 'Lion', 'qwerty@qwe.com', '+380971234567', ['pork', 'beef', 'fish']));
clientsArray.push(new Client(2, 'Marty', 'Zebra', 'qwerty@qwe.com', '+380971234567', ['grass', 'flowers', 'leaves']));
clientsArray.push(new Client(3, 'Gloria', 'Hippo', 'qwerty@qwe.com', '+380971234567', ['grass', 'fruits']));
clientsArray.push(new Client(4, 'Melman', 'Giraffe', 'qwerty@qwe.com', '+380971234567', ['grass', 'flowers', 'leaves']));
clientsArray.push(new Client(5, 'Julian', 'Lemur', 'qwerty@qwe.com', '+380971234567', ['fruits', 'insects', 'sap', 'flowers', 'leaves']));
clientsArray.push(new Client(6, 'Mort', 'Lemur', 'qwerty@qwe.com', '+380971234567', ['fruits', 'insects', 'sap', 'flowers', 'leaves']));
clientsArray.push(new Client(7, 'Skipper', 'Penguin', 'qwerty@qwe.com', '+380971234567', ['fish', 'crustaceans', 'cephalopods']));
clientsArray.push(new Client(8, 'Kowalski', 'Penguin', 'qwerty@qwe.com', '+380971234567', ['fish', 'crustaceans', 'cephalopods']));
clientsArray.push(new Client(9, 'Rico', 'Penguin', 'qwerty@qwe.com', '+380971234567', ['fish', 'crustaceans', 'cephalopods']));
clientsArray.push(new Client(10, 'Private', 'Penguin', 'qwerty@qwe.com', '+380971234567', ['fish', 'crustaceans', 'cephalopods']));

// 5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientsArray.sort((a, b) => a['order'].length - b['order'].length);
console.log(clientsArray);
console.log('------------------');


// 6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, brand, yearOfManufacture, maxSpeed, engineSize) {
    this.model = model;
    this.brand = brand;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineSize = engineSize;

    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed}км. на годину`;
    };

    this.info = function () {
        return `model - ${this.model}, brand - ${this.brand}, yearOfManufacture - ${this.yearOfManufacture}, maxSpeed - ${this.maxSpeed}, engineSize - ${this.engineSize}`;
    };

    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        return this.yearOfManufacture = newValue;
    }

    this.addDriver = function (driver) {
        return this.driver = driver;
    }
}

let car = new Car('Civic', 'Honda', 2008, 280, 1.8);

console.log(car.drive());
console.log(car.info());

car.increaseMaxSpeed(20);
console.log(car['maxSpeed']);

car.changeYear(2009);
console.log(car['yearOfManufacture']);

car.addDriver({name: 'Niko', age: 31});
console.log(car);
console.log('------------------');

// 7 - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarDescription {
    constructor(model, brand, yearOfManufacture, maxSpeed, engineSize) {
        this.model = model;
        this.brand = brand;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineSize = engineSize;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed}км. на годину`;
    };
    info() {
        return `model - ${this.model}, brand - ${this.brand}, yearOfManufacture - ${this.yearOfManufacture}, maxSpeed - ${this.maxSpeed}, engineSize - ${this.engineSize}`;
    };
    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        return this.yearOfManufacture = newValue;
    }
    addDriver(driver) {
        return this.driver = driver;
    }

}

let descCar = new CarDescription('q8', 'Audi', 2023, 380, 3);

console.log(descCar.drive());
console.log(descCar.info());

descCar.increaseMaxSpeed(20);
console.log(descCar['maxSpeed']);

descCar.changeYear(2009);
console.log(descCar['yearOfManufacture']);

descCar.addDriver({name: 'Niko', age: 31});
console.log(descCar);
console.log('------------------');


// 8 - створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let arrayOfCinderella = [];

arrayOfCinderella.push(new Cinderella('Anna', 18, 29));
arrayOfCinderella.push(new Cinderella('Olivia', 19, 41));
arrayOfCinderella.push(new Cinderella('Amelia', 15, 38));
arrayOfCinderella.push(new Cinderella('Sophia', 21, 30));
arrayOfCinderella.push(new Cinderella('Mia', 30, 35));
arrayOfCinderella.push(new Cinderella('Emily', 24, 30));
arrayOfCinderella.push(new Cinderella('Josephine', 25, 39));
arrayOfCinderella.push(new Cinderella('Natalia', 19, 31));
arrayOfCinderella.push(new Cinderella('Allison', 21, 33));
arrayOfCinderella.push(new Cinderella('Eva', 31, 37));

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let Prince1 = new Prince('John', 30, 39);
let Prince2 = new Prince('John', 30, 31);

for (const cinderella of arrayOfCinderella) {
    if (cinderella['footSize'] === Prince1['shoe']) {
        console.log(cinderella);
    }
}

let cinderellaForThePrince = arrayOfCinderella.find(cinderella => cinderella['footSize'] === Prince2['shoe']);
console.log(cinderellaForThePrince);

