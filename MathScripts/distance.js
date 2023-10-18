"use strict"

// find the distance between (x1, y1) and (x2, y2)

// answer: use the pythagoren Theorem
//points are (4, 8) (12, 14)
const x1 = 3, x2 = 1;
const y1 = -1, y2 = -3;

let a = Math.abs(x1 - x2);
let b = Math.abs(y1 - y2);

let a2 = Math.pow(a, 2);
// console.log(a2);
let b2 = Math.pow(b, 2);
// console.log(b2);
let c2 = a2 + b2;

let c = Math.sqrt(c2);
console.log("The distance between (" + x1 + ", " + x2 + ") and (" + y1 + ", " + y2 + ") is " + c.toFixed(2));