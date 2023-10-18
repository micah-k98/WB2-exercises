"use strict"

// Description: This script tests various numeric
// conversion techniques
// Author: Jordan Q. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

console.log("a in pareseInt() " + parseInt(a));
console.log("b in pareseInt() " + parseInt(b));
console.log("c in pareseInt() " + parseInt(c));
console.log("d in pareseInt() " + parseInt(d));

console.log("");

console.log("a in parseFloat() " + parseFloat(a));
console.log("b in parseFloat() " + parseFloat(b));
console.log("c in parseFloat() " + parseFloat(c));
console.log("d in parseFloat() " + parseFloat(d));

console.log("");

console.log("a in Number() " + Number(a));
console.log("b in Number() " + Number(b));
console.log("c in Number() " + Number(c));
console.log("d in Number() " + Number(d));

console.log("");

console.log("a in unary+ operator " + (+a));
console.log("b in unary+ operator " + (+b));
console.log("c in unary+ operator " + (+c));
console.log("d in unary+ operator " + (+d));