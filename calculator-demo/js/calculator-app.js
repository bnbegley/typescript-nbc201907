"use strict";
var rl = require('readline-sync');
console.log("Bienvenidos a mi Calculadora!");
var str = rl.question('Whats your name? ');
console.log("Hola, " +str);
var n1 = rl.questionInt('Enter number 1:');
var n2 = rl.questionInt('Enter number 2:');
var sum = n1 + n2;
var dif = n1 - n2;
var prod = n1 * n2;
var qt = n1 / n2;
var mod = n1 % n2;
console.log("Sum = " + sum);
console.log("Dif = " + dif);
console.log("Prod = " + prod);
console.log("Qt = " + qt);
console.log("Mod = " + mod);
console.log("Adios!");


