var readlineSync = require('readline-sync');
console.log("Bienvenidos a mi Calculadora!");

let str: string = readlineSync.question('Whats your name? ');
let n1:number = 20;
let n2:number=6;

let sum:number = n1 + n2;
let dif:number = n1 - n2;
let prod:number = n1 * n2;
let qt:number = n1 / n2;
let mod:number = n1 % n2;

console.log("Sum = "+sum);
console.log("Sum = "+dif);
console.log("Sum = "+prod);
console.log("Sum = "+qt);
console.log("Sum = "+mod);


console.log("Adios!");