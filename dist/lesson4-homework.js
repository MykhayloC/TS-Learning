"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add readonly modifier to prevent props reassignment
function exercise17() {
    console.log(`\noutput of Exercise17:\n`);
    // TODO: define class Student with properties name, age, studentId
    class Student {
        // TODO: add constructor to initialize the properties
        constructor(name, age, studentId) {
            this.name = name;
            this.age = age;
            this.studentId = studentId;
        }
        // TODO: add method printStudent to print the student info to console
        printStudent() {
            console.log(`
            Student info:
            student name is ${this.name};
            student age is ${this.age} years old;
            ID of student is "${this.studentId}"`);
        }
    }
    // TODO: create an instance of the class Student
    const newStudent = new Student("John", 18, 1);
    // TODO: print the student info to console
    newStudent.printStudent();
    // TODO: try to change the studentId property
    /* newStudent.studentId = 5; */
    // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
    /* Error: "Cannot assign to 'studentId' because it is a read-only property.ts(2540)"" */
}
// TODO: compile and run the code
exercise17();
// use optional modifier to fix compile time error
function exercise18() {
    console.log(`\noutput of Exercise18:\n`);
    // TODO: uncomment the code below and update the type definition to fix compile time error
    const widgetWithSize = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
        space: 100,
    };
    const desktopWidget = {
        name: "widget",
        width: 10,
        height: 20,
        os: "windows",
        space: 100,
    };
    // TODO: print the result to console
    console.log(widgetWithSize);
    console.log(desktopWidget);
}
// TODO: compile and run the code
exercise18();
// use uniton types to replace unknown type for compile time type checking
function exercise19() {
    console.log(`\noutput of Exercise19:\n`);
    function formatCommandLine(command) {
        if (typeof command === "string") {
            return command.trim();
        }
        else if (Array.isArray(command)) {
            return command.map((arg) => arg.trim()).join(" ");
        }
        else
            console.log("command must be string or string[]");
    }
    console.log(formatCommandLine("  git status  ")); // git status
    console.log(formatCommandLine(["git ", " status "])); // git status
    // console.log(formatCommandLine(false)); // run time error - should be compile time error instead
    /* Compile time error: "Argument of type 'boolean' is not assignable to parameter of type 'string | string[]'.ts(2345)" */
}
// TODO: compile and run the code
exercise19();
// use literal types for type checking
function exercise20() {
    console.log(`\noutput of Exercise20:\n`);
    // TODO: add type check to the function below
    function rockPaperSizorsVins(me, other) {
        if (me === "rock" && other === "paper") {
            return false;
        }
        if (me === "paper" && other === "scissors") {
            return false;
        }
        if (me === "scissors" && other === "rock") {
            return false;
        }
        return true;
    }
    console.log(rockPaperSizorsVins("rock", "paper")); // false
    console.log(rockPaperSizorsVins("paper", "scissors")); // false
    console.log(rockPaperSizorsVins("scissors", "rock")); // false
    console.log(rockPaperSizorsVins("rock", "scissors")); // true
    // TODO: make sure that the following calls are not allowed
    // console.log(rockPaperSizorsVins("papapaper", "scissors")); // true - no type check
    /* Compile time error: "Argument of type '"papapaper"' is not assignable to parameter of type 'TMove'.ts(2345)" */
}
// TODO: compile and run the code
exercise20();
// use intersection types to improve code readability
function exercise21() {
    console.log(`\noutput of Exercise21:\n`);
    const widget = {
        name: "widget",
    };
    const widgetWithSize = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
    };
    const desktopWidget = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
        os: "windows",
    };
    const mobileWidget = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
        space: 100,
    };
    console.log(widget.name);
    console.log(widgetWithSize.name +
        " " +
        widgetWithSize.width +
        " " +
        widgetWithSize.height +
        " " +
        widgetWithSize.color);
    console.log(desktopWidget.name +
        " " +
        desktopWidget.width +
        " " +
        desktopWidget.height +
        " " +
        desktopWidget.color +
        " " +
        desktopWidget.os);
    console.log(mobileWidget.name +
        " " +
        mobileWidget.width +
        " " +
        mobileWidget.height +
        " " +
        mobileWidget.color +
        " " +
        mobileWidget.space);
    // TODO: print the result to console
}
// TODO: compile and run the code
exercise21();
// rewrite the code using async await
function exercise22() {
    console.log(`\noutput of Exercise22:\n`);
    /*     function printMessagesWithTimeout() {
          setTimeout(() => {
          console.log("1");
    
          setTimeout(() => {
            console.log("2");
          }, 1000);
    
          setTimeout(() => {
            console.log("3");
    
            setTimeout(() => {
              console.log("4");
            }, 1000);
          }, 1000);
        }, 1000);
      } */
    async function printMessagesWithTimeout() {
        await postponement(1000);
        console.log("1");
        await postponement(1000);
        console.log("2");
        await postponement(1000);
        console.log("3");
        await postponement(1000);
        console.log("4");
    }
    const postponement = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    printMessagesWithTimeout();
}
// TODO: compile and run the code
exercise22();
