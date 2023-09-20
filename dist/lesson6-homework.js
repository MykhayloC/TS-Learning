"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create and use a type guard
function exercise29() {
    // TODO: implement isWidget function to be a type guard
    function isWidget(arg) {
        if ("name" in arg)
            return true;
        return false;
    }
    function printThingDescription(arg) {
        // TODO: uncomment the following code
        if (isWidget(arg)) {
            console.log(arg.name);
        }
        else {
            console.log(arg.os);
        }
    }
    printThingDescription({ name: "widget" });
    printThingDescription({ os: "android" });
}
exercise29();
// Create an overloaded function definitions
function exercise30() {
    function assignWidgetCost(obj) {
        obj.cost = 100;
        return obj;
    }
    // TODO: fix problem - typeof a: TThing, not TWidget
    const a = assignWidgetCost({ name: "widget" });
    // TODO: fix same here - typeof b: TThing, not TGadget
    const b = assignWidgetCost({ os: "android" });
    console.log(a, b);
}
exercise30();
// Create call signatures
function exercise31() {
    function handleSaveUserSubmit(firstName, lastName, email) { }
    function createForm(onSubmit) {
        const firstName = "John";
        const lastName = "Smith";
        // TODO: uncomment the following line
        onSubmit(firstName, lastName);
    }
    function createForm2(onSubmit) {
        const firstName = "John";
        const lastName = "Smith";
        const email = "jsmith@somemail.some.com";
        // TOOD: uncomment the following line
        onSubmit(firstName, lastName, email);
    }
    function createAndPrintUser(ctor) {
        // TOOD: uncomment the following lines
        const user = new ctor("John Smith");
        console.log(user);
    }
    const User = class {
        constructor(name) {
            this.name = name;
        }
    };
    createAndPrintUser(User);
}
exercise31();
// Create an abstract class and concrete classes
function exercise32() {
    // TODO: make this class abstract
    class Animal {
        constructor(name) {
            this.name = name;
            this.name = name;
        }
        eat() {
            console.log("eating");
        }
    }
    // TODO: inherit from Animal and implement makeSound method
    class Dog extends Animal {
        makeSound() {
            console.log(`barking`);
        }
    }
    // TODO: uncomment the following lines, fix the errors
    const myDog = new Dog("Buddy");
    myDog.eat();
    myDog.makeSound();
}
exercise32();
// Create a type for a dictionary with string keys and number values
function exercise33() {
    // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
    const dictionary = {
        a: 1,
        b: 2,
        c: 3,
    };
    // TODO: uncomment the following lines, fix the errors
    dictionary["c"] = 3;
    //   dictionary['d'] = '3'; // should cause an error error
    /* Error: Type 'string' is not assignable to type 'number'.ts(2322)
  const dictionary: TDictionary */
    dictionary["d"] = 3;
    // TODO: implement a function that calculates number of characters
    // in a string using the dictionary type, and returns a most frequent character
    function getMostFrequentCharacter(str) {
        const characters = {};
        for (let char of str) {
            char = char.toLowerCase();
            if (char in characters) {
                characters[char]++;
            }
            else
                characters[char] = 1;
        }
        // const maxFrequentValue = Math.max(...Object.values(characters));
        for (let key in characters) {
            if (characters[key] === Math.max(...Object.values(characters)))
                return key;
        }
        return "";
    }
    console.log(getMostFrequentCharacter("She sells seashells by the seashore."));
}
exercise33();
// Use index signature and caching
function exercise34() {
    const studentGrades = {
        John: [5, 8, 1, 10, 2],
        Bob: [3, 12, 5],
        Mary: [8, 10, 2, 9, 4, 6],
        Ann: [11, 3, 12, 1, 8],
        Tom: [7, 6, 1, 11, 5],
        Mark: [2],
    };
    const studentsAverageGrades = {};
    // TODO: Implement function to calculate the average grade for a student
    function calculateAverageGrade(studentName) {
        let studentFound;
        studentName in studentGrades
            ? (studentFound = true)
            : (studentFound = false);
        if (studentFound) {
            if (!studentsAverageGrades[studentName]) {
                // TODO: calculate average grade
                const averageGrade = +(studentGrades[studentName].reduce((sum, current) => sum + current, 0) / studentGrades[studentName].length).toFixed(1);
                studentsAverageGrades[studentName] = averageGrade;
            }
            return studentsAverageGrades[studentName];
        }
        else {
            return "Student not found";
        }
    }
    // TODO: Iterate through the dictionary and display each student's average grade
    for (const studentName in studentGrades) {
        // TODO: call calculateAverageGrade and print the result
        console.log(studentName, calculateAverageGrade(studentName));
    }
    // TODO: add caching for the average grade calculation to the calculateAverageGrade function
}
exercise34();
