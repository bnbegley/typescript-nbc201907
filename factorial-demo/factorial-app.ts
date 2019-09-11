var rl = require('readline-sync');
console.log("Welcome to the Factorial App!");
let n: number = rl.questionInt('Enter number: ')
console.log("Number = " +n)
let f:number = 1;
for (let i:number = 1; i<=n; i++){
    f *= i; 
    console.log("Factorial " +i+" = " + f);
}
console.log("Adios!");    