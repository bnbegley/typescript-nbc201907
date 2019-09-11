"use strict";
var rl = require('readline-sync');
console.log("Welcome to the Factorial App!");
var n = rl.questionInt('Enter number: ');
console.log("Number = " + n);
var f = 1;
for (var i = 1; i <= n; i++) {
    f *= i;
    console.log("Factorial " + i + " = " + f);
}
console.log("Adios!");
