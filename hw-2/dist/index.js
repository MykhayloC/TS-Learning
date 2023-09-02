"use strict";
// 4th task
function exercise4() {
    let firstPoint;
    firstPoint = [1, 1];
    let secondPoint;
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
