/* EXERCICE 1.6 */
const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me a decimal number please?');
let number2 = readlineSync.question('Can you give me another decimal number please?');

console.log(parseInt(number1 % number2));
