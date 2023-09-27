"use strict";
// Use mappping types
function exercise47() {
    const point = {
        x: 1,
        y: 2,
        z: 3,
    };
}
exercise47();
// Use mappping types modifiers
function exercise48() {
    const p1 = { x: 10 };
    const p2 = { x: 10, y: null };
}
exercise48();
// Template Literal Type
function exercise49() {
    function createTshirt(size, color) {
        return `${size}-${color}`;
    }
    const tshirt = createTshirt("S", "red");
}
exercise49();
// Fix autocoplete problem for literal union types
function exercise50() {
    function createCar(brand) {
        return `${brand} car`;
    }
    // TODO: check if autocomplete works before and after the fix
    const car = createCar("BMW");
}
exercise50();
// Use satisfies constraint
function exercise51() {
    const shapes = {
        circle: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        square: [
            [1, 2, 3],
            [4, 5, 6],
        ],
    };
    // TODO: create a function that takes a list points and prints them into console
    function drawShape(points) {
        console.log(points);
    }
    drawShape(shapes.circle); // TOOD: uncomment and fix this to have compile check error, using satisfies constraint
}
exercise51();
// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra2() {
    /**
     * Write a program that prints the integers from 1 to 100 (inclusive).
     * But:
     *  - for multiples of three, print Fizz (instead of the number)
     *  - for multiples of five, print Buzz (instead of the number)
     *  - for multiples of both three and five, print FizzBuzz (instead of the number)
     */
    function fizzBuzz() {
        // TODO: add your code here
        let i = 1;
        while (i <= 100) {
            let outputStr = "";
            const fizz = !!(i % 3);
            const buzz = !!(i % 5);
            !fizz && !buzz
                ? (outputStr = "FizzBuzz")
                : !fizz && buzz
                    ? (outputStr = "Fizz")
                    : fizz && !buzz
                        ? (outputStr = "Buzz")
                        : (outputStr = `${i}`);
            console.log(outputStr);
            i++;
        }
    }
    fizzBuzz();
    /**
     * 1
     * 2
     * Fizz
     * 4
     * Buzz
     * ...
     */
    // TODO: convert fizzBuzz to generate a string instead of printing to console
    function fizzBuzzToString() {
        // TODO: add your code here
        let i = 1;
        let resultStr = [];
        while (i <= 100) {
            const fizz = !!(i % 3);
            const buzz = !!(i % 5);
            !fizz && !buzz
                ? resultStr.push("FizzBuzz")
                : !fizz && buzz
                    ? resultStr.push("Fizz")
                    : fizz && !buzz
                        ? resultStr.push("Buzz")
                        : resultStr.push(`${i}`);
            i++;
        }
        console.log(resultStr.join(" "));
    }
    fizzBuzzToString();
    // TODO: write a test to validate fizzBuzz output using console.assert
    // console.assert( ... );
    // Message: I'm not sure in my solution of the next task because I've neve had a deals neither with "console.assert" no with similar tests
    function fizzBuzzAssert() {
        let i = 1;
        while (i <= 100) {
            const fizz = !!(i % 3);
            const buzz = !!(i % 5);
            !fizz && !buzz
                ? console.assert((i % 3 === 0 && i % 5 === 0) === true)
                : !fizz && buzz
                    ? console.assert((i % 3 === 0 && !(i % 5 === 0)) === true)
                    : fizz && !buzz
                        ? console.assert((!(i % 3 === 0) && i % 5 === 0) === true)
                        : console.assert((!(i % 3 === 0) && !(i % 5 === 0)) === true);
            i++;
        }
    }
    fizzBuzzAssert();
}
exerciseExtra2();
