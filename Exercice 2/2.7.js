const readlineSync = require("readline-sync");

var n = new Number (readlineSync.question('Give me a number.'));
let sum = 0;

for (i = 0; i < n; i += 1) {
  var nombreSomme = new Number (readlineSync.question('Give me one number.'));
  sum += nombreSomme; 
}

console.log(sum);