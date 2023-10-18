"use strict"

const peopleQuantity = 38;
const charterVansSeats = 15;
const vanCost = 250;

let vansQuantity = Math.round(peopleQuantity / charterVansSeats);
console.log("There are " + vansQuantity + " vans needed.");

let totalVansCost = vanCost * vansQuantity;
console.log("It would cost $" + totalVansCost.toFixed(2) + " to rent all vans.");

let perPersonCost = totalVansCost / peopleQuantity;
let totalCollected = parseFloat(perPersonCost.toFixed(2)) * peopleQuantity
console.log("It would be $" + perPersonCost.toFixed(2) + " per person. With a total collection of $" + totalCollected.toFixed(2) +".");