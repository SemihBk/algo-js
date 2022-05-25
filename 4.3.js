const readlineSync = require("readline-sync");

let arr1 = [];

let n = readlineSync.question('Can you give me a number ?');

function rand10(max) {
  return (Math.floor(Math.random() * max));
}

function multiRand(a, tab) {
  for (i = 0; i < a; i++) {
    tab.push(rand10(11));
  }
  return tab

}

console.log(multiRand(n, arr1));
