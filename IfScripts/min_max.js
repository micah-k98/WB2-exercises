"use strict"

const a = 12;
const b = 60;
const c = 60;

let smallestNumber = 0;
let largestNumber = 0;

//  tests the largest number
if (a >= b && a >= c) {
    largestNumber = a;
}
else if (b >= a && b >= c) {
    largestNumber = b;
}
else {
    largestNumber = c;
}


// tests the smallest number
if (a <= b && a <= c) {
    smallestNumber = a;
}
else if (b <= a && b <= c) {
    smallestNumber = b;
}
else {
    smallestNumber = c;
}


console.log("The largest number is " + largestNumber);
console.log("The smallest number is " + smallestNumber);