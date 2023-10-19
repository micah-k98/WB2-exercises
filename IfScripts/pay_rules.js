"use strict"

const payRate = 17.30;
const hoursWorked = 45;

let grossPay = payRate * hoursWorked;
console.log("Pay Rate          Hours Worked          Gross Pay          Reason");

if (hoursWorked < 40) {
    console.log(payRate.toFixed(2) + "                 " + hoursWorked + "                  " + grossPay.toFixed(2) + "         Under 40 hours");
}

else if (hoursWorked == 40) {
    console.log(payRate.toFixed(2) + "                 " + hoursWorked + "                  " + grossPay.toFixed(2) + "         Exactly 40 hours");
}

if (hoursWorked > 40) {
    let overtimeRate = payRate * 1.5;
    let overtimeHours = hoursWorked - 40;
    let overtimePay = overtimeRate * overtimeHours;
    grossPay = (payRate * 40) + overtimePay;
    console.log(payRate.toFixed(2) + "                 " + hoursWorked + "                  " + grossPay.toFixed(2) + "         Over 40 hours");
}
    