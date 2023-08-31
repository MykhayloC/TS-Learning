"use strict";
// 1st task:
function excercise1() {
    let greeting;
    greeting = "Hello World";
    console.log('\nThe first task, output:');
    console.log(greeting);
}
excercise1();
// 2nd task:
function excercise2() {
    let whileLoopGreeting;
    let numberOfGreetings;
    whileLoopGreeting = 'Hello';
    numberOfGreetings = 3;
    console.log('\nThe second task, output:');
    while (numberOfGreetings > 0) {
        console.log(whileLoopGreeting);
        numberOfGreetings--;
    }
    /*      numberOfGreetings = whileLoopGreeting;
            Error: "Type 'string' is not assignable to type 'number'.ts(2322)" */
}
excercise2();
// 3d task:
function excercise3() {
    let n;
    let m;
    let result;
    n = 1;
    m = 10;
    result = [];
    if (m >= n) {
        for (; n <= m; n++) {
            result.push(n);
        }
    }
    else {
        for (; n >= m; n--) {
            result.push(n);
        }
    }
    console.log('\nThe third task, output:');
    console.log(result);
}
excercise3();
