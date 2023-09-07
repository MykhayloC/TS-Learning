"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
// try different target compiler options
function excercise10() {
    var _Rectangle_width, _Rectangle_height;
    console.log(`\nexercise 10 output:\n`);
    // TODO: declare a Rectangle class, with width and height properties
    class Rectangle {
        // TODO: add a constructor which takes width and height as parameters
        constructor(width, height) {
            _Rectangle_width.set(this, void 0);
            _Rectangle_height.set(this, void 0);
            __classPrivateFieldSet(this, _Rectangle_width, width, "f");
            __classPrivateFieldSet(this, _Rectangle_height, height, "f");
        }
        // TODO: add a method `getArea` which returns the area of the rectangle
        get getArea() {
            return __classPrivateFieldGet(this, _Rectangle_width, "f") * __classPrivateFieldGet(this, _Rectangle_height, "f");
        }
        // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
        get getPerimeter() {
            return __classPrivateFieldGet(this, _Rectangle_width, "f") * 2 + __classPrivateFieldGet(this, _Rectangle_height, "f") * 2;
        }
    }
    _Rectangle_width = new WeakMap(), _Rectangle_height = new WeakMap();
    // TODO: create an instance of the Rectangle class, with width 10 and height 20
    const newRectangle = new Rectangle(10, 20);
    // TODO: call the method `getArea` and print the result to console
    console.log(newRectangle.getArea);
    // TODO: call the method `getPerimeter` and print the result to console
    console.log(newRectangle.getPerimeter);
    // TODO: compile and run the code
    // TODO: change compiler target to ES5, complile and see the compiled code
    // TODO: change width and height properties to private, recomplile and
    // TODO: change compiler target to ES2015, complile and see the compiled code
    // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
    // TODO: change compiler target to ESNext, complile and see the compiled code
    // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028):
    /* Error:
       Private identifiers are only available when targeting ECMAScript 2015 and higher.ts(18028)
       (property) Rectangle.#width: number */
}
// TODO: compile and run the code
excercise10();
// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
    console.log(`\nexercise 11 output:\n`);
    // TODO: create a generic Stack class
    class Stack {
        constructor() {
            // TODO: add a private data property of type array of T
            this.data = [];
        }
        // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
        push(item) {
            this.data.push(item);
        }
        // TODO: add a pop method which removes and returns the item from the top of the stack
        get pop() {
            return this.data.pop();
        }
    }
    // TODO: create an instance of the Stack class with number type
    const arrayOfNumbers = new Stack();
    // TODO: push two numbers to the stack
    arrayOfNumbers.push(3.56482);
    arrayOfNumbers.push(5.25648137);
    // TODO: pop an item from the stack and print it to console, calling toFixed method on it
    console.log(arrayOfNumbers.pop?.toFixed(3));
    // TODO: create an instance of the Stack class with string type
    const arrayOfStrings = new Stack();
    // TODO: push two strings to the stack
    arrayOfStrings.push("Hello");
    arrayOfStrings.push("World!");
    // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
    console.log(arrayOfStrings.pop?.toUpperCase());
}
// TODO: compile and run the code
excercise11();
// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {
    const arrayOfNumbers = [1, 3, 6, 8, 99, 10, 12, 0];
    const arrayOfStrings = ["My", "name", "", "is", "John"];
    const user1 = {
        name: "John",
        age: 20,
    };
    const user2 = {
        name: "Bob",
        age: 25,
    };
    const user3 = {
        name: "Tom",
        age: 15,
    };
    const user4 = {
        name: "Mary",
        age: 30,
    };
    const arrayOfObjects = [user1, user2, user3, user4];
    console.log(`\nexercise 12 output:\n`);
    // TODO: create a function that takes an array of numbers and returns a random number from the array
    const randomNumber = (array) => {
        const i = Math.floor(Math.random() * array.length);
        return array[i];
    };
    // TODO: create a function that takes an array of strings and returns a random string from the array
    const randomStrig = (array) => {
        const i = Math.floor(Math.random() * array.length);
        return array[i];
    };
    // TODO: create a function that takes an array of objects and returns a random object from the array
    const randomObject = (array) => {
        const i = Math.floor(Math.random() * array.length);
        return array[i];
    };
    // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
    function randomItem(array) {
        const i = Math.floor(Math.random() * array.length);
        return array[i];
    }
    //Checking:
    const genericRandomNumber = randomItem(arrayOfNumbers);
    const genericRandomString = randomItem(arrayOfStrings);
    const genericRandomObject = randomItem(arrayOfObjects);
    console.log(genericRandomNumber);
    console.log(genericRandomString);
    console.log(genericRandomObject);
}
// TODO: compile and run the code
excercise12();
// add type assertion to the code
function excercise13() {
    console.log(`\nexercise 13 output:\n`);
    // NOTE: do not change this function
    function fetchUserAge() {
        const responseText = '{"name": "John", "age": 18}';
        return JSON.parse(responseText).age;
    }
    const userAge = fetchUserAge();
    // TODO: uncomment the following code and add type assertion to fix the error
    // console.log(userAge + 1);
    console.log(userAge + 1);
}
// TODO: compile and run the code
excercise13();
// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
    console.log(`\nexercise 14 output:\n`);
    function fetchUserAge() {
        const responseText = '{"name": "John", "age": "16"}';
        return +JSON.parse(responseText).age;
    }
    const userAge = fetchUserAge();
    // TODO: run the code below and observe the result, explain why it is happening,
    /* output in console: You are not old enough to drive
    it happens because operator "===" is an operator of strict camparison and it compares not only values but also types */
    // TODO: add type casting to the function above, to fix the error
    if (userAge === 16) {
        console.log("Time to get your driver license");
    }
    else if (userAge > 16) {
        console.log("You are old enough to drive");
    }
    else {
        console.log("You are not old enough to drive");
    }
}
// TODO: compile and run the code
excercise14();
// add type safety to the code which uses any
function excercise15() {
    console.log(`\nexercise 15 output:\n`);
    // TODO: fix the fetchUsers function to return an array of users, not any type
    function fetchUsers() {
        // TODO: add type safety to the data variable, annotate it with the type of users
        const data = JSON.parse('{"users": [{"name": "John"}, {"name": "Jane"}]}');
        // TODO: add check for the data type to contain list of users
        if (typeof data === "object" &&
            data !== null &&
            "users" in data &&
            Array.isArray(data.users) &&
            data.users.length > 0) {
            return data.users;
        }
        else
            console.log("List of users doesn't exists");
    }
    // TODO: fix typings of the users variable (currently it is of type any)
    const users = fetchUsers();
    // TODO: add type safety to the code to print the names of the users to console
    users ? users.forEach((user) => console.log(user.name)) : console.log("List of users doesn't exists");
}
// TODO: compile and run the code
excercise15();
// use type declarations to fix the comments in the code
function excercise16() {
    // TODO: add code which uses process.env.NODE_ENV variable,
    const test = process.env.NODE_ENV;
    // TODO: try to compile and see the error
    /* Error:
      Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.ts(2580) */
    // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
    //file with type declaration was added
    // TODO: try to compile and see the error fixed
    //the error is fixed
    // TODO: remove global.d.ts file, copile and see the error again
    /* the file global.d.ts was removed
      Error:
      Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.ts(2580)
       */
    // TODO: install type declarations from error message -  @types/node
    // was installed "npm i --save-dev @types/node"
    // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
}
// TODO: compile and run the code
excercise16();
