"use strict"

const givenYear = 2017;

// variables here saves the remainder when divided by 100, 400, and 4, respectively
const divisibleBy100 = givenYear % 100; // through divisibleBy100, it's verifrying if the GIVEN YEAR is the end-of-century year
const divisibleBy400 = givenYear % 400;  // verifies if divisible by 400
const divisibleBy4 = givenYear % 4;



if (divisibleBy100 == 0 && divisibleBy400 != 0) {
    console.log(givenYear + " is NOT a leap year!");
}

else if (divisibleBy4 == 0) {
    console.log(givenYear + " is a leap year!");
}

else {
    console.log(givenYear + " is NOT a leap year!");
}