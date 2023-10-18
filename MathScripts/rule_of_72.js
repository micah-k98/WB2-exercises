"use strict"

const interestRate = 6;
const doubledSavings =  100000;

let doubleTimeInYears = 72 / interestRate;
console.log("At a " + interestRate + "% interest rate, your savings account will be worth $" + doubledSavings.toFixed(2) + " in " + doubleTimeInYears.toFixed(1));