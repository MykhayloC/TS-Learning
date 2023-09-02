"use strict";
// 4th task
/* function exercise4() {
        
    let firstPoint: [number, number];
    let secondPoint: [number, number];
    
    firstPoint = [1, 1];
    secondPoint = [4, 5];

    function distance(p1: [number, number], p2: [number, number]): number {
        
        const x1:number = p1[0];
        const y1:number = p1[1];
        const x2:number = p2[0];
        const y2:number = p2[1];

        const result:number = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

        return result;
    }

    console.log(`\nThe 4th task:
    Distance between points is ${distance(firstPoint, secondPoint)} units`)
}

exercise4();

//5th task

function exercise5() {
    type TPoint = { x: number; y:number };
    
    let firstPoint: TPoint;
    let secondPoint: TPoint;

    firstPoint = { x:1, y:1 };
    secondPoint = { x:4, y:5 };

    function distance(p1: TPoint, p2: TPoint): number {
        const {x:x1, y:y1} = p1;
        const {x:x2, y:y2} = p2;

        const result:number = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

        return result;
    }

    console.log(`\nThe 5th task:
    Distance between points is ${distance(firstPoint, secondPoint)} units`)
}

exercise5(); */
/* function exercise6() {
    
    const PI = 3.14;

    function circleAreaCalculator (r:number): number {
        const result:number = PI*r**2;
        return result;
    }

    const currentRadius:number = 10;

    console.log(`\nThe 6th task:\n
    The radius of circle is ${circleAreaCalculator(currentRadius)} square units`);
    
    console.log(`
    The type of "PI"-variable is "${typeof(PI)}"`);

    type TPerson = {name: string; age: number};

    const person: TPerson = {name: "John", age: 25};

    function incrementorOfAge (p:TPerson): TPerson {
        const {age} = p;
        p.age++;
        return p;
    }

    const newPerson: TPerson = incrementorOfAge(person);

    console.log(`
    Person data:`)
    Object.entries(newPerson).forEach(item => {
        console.log(`\t${item[0]}: ${item[1]}`)
    })
}
exercise6();
 */
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
