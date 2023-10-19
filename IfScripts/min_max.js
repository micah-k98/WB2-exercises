"use strict"

const a = 60;
const b = 60;
const c = 60;

let smallestNumber = 0;
let largestNumber = 0;


if (a >= b && a >= c) {
    largestNumber = a;
}
else if (b >= a && b >= c) {
    largestNumber = b;
}
else if (c >= a && c >= b) {
    largestNumber = c;
}

if (a <= b && a <= c) {
    smallestNumber = a;
}
else if (b <= a && b <= c) {
    smallestNumber = b;
}
else if (c <= a && c <= b) {
    smallestNumber = c;
}



console.log("The largest number is " + largestNumber);
console.log("The smallest number is " + smallestNumber);