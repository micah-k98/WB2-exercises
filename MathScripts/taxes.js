"use strict"

const taxRate = .23;
const salaryPerMonth = 3000;

let withheldAmount = (salaryPerMonth * taxRate) * 12;
console.log("The total Federal withheld for taxes for the whole year is $" + withheldAmount.toFixed(2)) ;

const grossIncome = (salaryPerMonth * 12) - withheldAmount;
console.log("The total gross income is $" + grossIncome.toFixed(2));