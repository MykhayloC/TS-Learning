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
