"use strict";
// 4th task
function exercise4() {
    let firstPoint;
    let secondPoint;
    firstPoint = [1, 1];
    secondPoint = [4, 5];
    function distance(p1, p2) {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result;
    }
    console.log(`\nThe 4th task:
    Distance between points is ${distance(firstPoint, secondPoint)} units`);
}
exercise4();
//5th task
function exercise5() {
    let firstPoint;
    let secondPoint;
    firstPoint = { x: 1, y: 1 };
    secondPoint = { x: 4, y: 5 };
    function distance(p1, p2) {
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result;
    }
    console.log(`\nThe 5th task:
    Distance between points is ${distance(firstPoint, secondPoint)} units`);
}
exercise5();
function exercise6() {
    const PI = 3.14;
    function circleAreaCalculator(r) {
        const result = PI * r ** 2;
        return result;
    }
    const currentRadius = 10;
    console.log(`\nThe 6th task:\n
    The radius of circle is ${circleAreaCalculator(currentRadius)} square units`);
    console.log(`
    The type of "PI"-variable is "${typeof (PI)}"`);
    const person = { name: "John", age: 25 };
    function incrementorOfAge(p) {
        const { age } = p;
        p.age++;
        return p;
    }
    const newPerson = incrementorOfAge(person);
    console.log(`
    Person data:`);
    Object.entries(newPerson).forEach(item => {
        console.log(`\t${item[0]}: ${item[1]}`);
    });
}
exercise6();
function exercise7() {
    function map(arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = fn(arr[i]);
        }
        return arr;
    }
    const arrayOfNumbers = [0, 1, 2, 3, 4, 5];
    const toDouble = (a) => {
        a = a * 2;
        return a;
    };
    console.log(`\nThe 7th task:\n
    [${map(arrayOfNumbers, toDouble)}]`);
}
exercise7();
function exercise8() {
    console.log(`\nThe 8th task:\n`);
    function printGreeting(user) {
        console.log(`Hello ${user.name}!`);
    }
    let product = { name: "headphones", price: 1000 };
    // TODO: call the function with product as a parameter
    printGreeting(product);
    const productOnStck = { name: "phone", price: 10000, isAvailable: true };
    product = productOnStck;
}
exercise8();
function exercise9() {
    console.log(`\nThe 9th task:\n`);
    class Book {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        get getInfo() {
            return `Title: "${this.title}", year of publication: ${this.year}`;
        }
        setYear(year) {
            this.year = year;
        }
        get getAge() {
            const currentDate = new Date;
            const currentYear = currentDate.getFullYear();
            return currentYear - this.year;
        }
        revise(newYear) {
            const currentDate = new Date;
            const currentYear = currentDate.getFullYear();
            (newYear > currentYear || newYear < this.year) ?
                console.log("Input data is not valid!") :
                this.year = newYear;
        }
    }
    const newBoook = new Book("Some title", 2020);
    console.log(newBoook.getInfo);
    newBoook.setYear(2000);
    console.log(newBoook.getInfo);
    console.log(`The age of "${newBoook.title}" is ${newBoook.getAge} years`);
    newBoook.revise(2021);
    // TODO: add private modifier to the year property
    // TODO: try to access the year property from outside of the class - observe the error
    /* console.log(newBoook.year);
       Property 'year' is private and only accessible within class 'Book' */
    class Magazine extends Book {
        constructor(title, year, month, day) {
            super(title, year);
            this.month = month;
            this.day = day;
        }
        get getInfo() {
            console.log(super.getInfo);
            return `date of publication: ${this.day} of ${this.month}`;
        }
    }
    const newMagazine = new Magazine("Title of magazine", 2015, "May", 10);
    console.log(newMagazine.getInfo);
    console.log(`The age of "${newMagazine.title}" is ${newMagazine.getAge} years`);
}
exercise9();
