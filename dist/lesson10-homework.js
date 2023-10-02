"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string manipulation utilities type
function exercise52() {
    const obj = {
        name: "point",
    };
    // TODO: remvoe this declaration below and replace it with the one above
    //   type TObjectMethods = {
    //     getName(): string;
    //     setName(name: string): void;
    //     validateName(): boolean;
    //   };
    const object = {
        name: "point",
        getName() {
            return this.name;
        },
        setName(name) {
            this.name = name;
        },
        validateName() {
            return this.name.length > 0;
        },
    };
    // TODO: add property age to object and check if you get type check errors
    // object.age = 10;
    /* Type check error:
      "Property 'age' does not exist on type 'TObjectWitName & TGetters<{ name: string; }> & TSetters<{ name: string; }>
      & TValidators<{ name: string; }>'.ts(2339)"
     */
}
exercise52();
// enums
function exercise53() {
    // TODO: declare enum Color with values Red, Green, Blue
    // TODO: assing Red: 1, Green: 2, Blue: 4
    let Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 4] = "Blue";
    })(Color || (Color = {}));
    // TODO: declare a function that takes a color as a number and returns a string
    // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
    function getColor(color) {
        let result = "";
        // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
        if (color & Color.Red) {
            result += " Red";
        }
        // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
        if (color & Color.Green) {
            result += " Green";
        }
        // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
        if (color & Color.Blue) {
            result += " Blue";
        }
        // TODO: explain how bitmask works
        /*
        Результатом виконанння логічної операції (в умові if) є
        порівняння кожної позиції двійкового представлення одного числа
        (в даному випадку - переданого значення параметра) із відповідною позицією
        двійкового представлення іншого числа (в даному випадку - значення елементу enum Color).
        */
        result = result.trim();
        if (result.split(" ").length > 1) {
            result = result.split(" ").join(", ");
        }
        return result;
    }
    // TODO: add test assertionsns using this table
    console.assert(getColor(0) === ""); //(empty string, no color), bitmask ( 0 0 0 )
    console.assert(getColor(1) === "Red"); // bitmask ( 0 0 1 )
    console.assert(getColor(2) === "Green"); // bitmask ( 0 1 0 )
    console.assert(getColor(3) === "Red, Green"); // bitmask ( 0 1 1 ) line was with mistake - previous edition of string to check - "Green, Blue"
    console.assert(getColor(4) === "Blue"); // bitmask ( 1 0 0 )
    console.assert(getColor(5) === "Red, Blue"); // bitmask ( 1 0 1 )
    console.assert(getColor(6) === "Green, Blue"); // bitmask   ( 1 1 0 ) line was with mistake - previous edition of string to check - "Red, Green"
    console.assert(getColor(7) === "Red, Green, Blue"); // bitmask ( 1 1 1 )
}
exercise53();
// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra3() {
    // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
    function mergeSortedArrays(arr1, arr2) {
        return arr1.concat(arr2).sort((a, b) => a - b);
    }
    console.assert(mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
        [1, 2, 3, 4, 5, 6].toString());
    console.assert(mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
        [3, 4, 4, 5, 5, 6].toString());
    console.assert(mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
        [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString());
    // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
    function convertedMergeSortedArrays(arr1, arr2) {
        const numberType = !!arr1
            .concat(arr2)
            .find((item) => typeof item === "number"); // перевірка наявності чисел в сконкатинованому масиві
        const stringType = !!arr1
            .concat(arr2)
            .find((item) => typeof item === "string"); // перевірка наявності рядків в сконкатинованому масиві
        if (stringType && !numberType) {
            return arr1
                .concat(arr2)
                .sort((a, b) => a.localeCompare(b));
        }
        else if (!stringType && numberType) {
            return arr1.concat(arr2).sort((a, b) => a - b);
        }
        else
            throw new Error("items should have the same type");
    }
}
exerciseExtra3();
