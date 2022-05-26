const readlineSync = require("readline-sync");

let n = readlineSync.question('Can you give me a number ?');

let array1 = [];
let sum = 0;



function rand10(max) {
  return (Math.floor(Math.random() * max));
}

function multiRand(a, tab) {
  for (i = 0; i < a; i++) {
    tab.push(rand10(11));
  }
  return tab
}

let array = multiRand(n, array1)

console.log(array);


/***** */



function average(arr) {
  let i = 0;
  let sum = 0;
  let ArrayLen = arr.length;
  while (i < ArrayLen) {
      sum = sum + arr[i++];
}
  return sum / ArrayLen;
}

let sumAverage = average(array);
/* 
console.log(sumAverage); */


/* var myArray = [1, 5, 2, 3, 7];
var a = ArrayAvg(myArray);
console.log(a) */

function min(arr) {
  return Math.min(...arr);
}

let minNum = min(array);


function max(arr) {
  return Math.max(...arr);
}

let maxNum = max(array);

console.log(`La moyenne de l'array est de ${sumAverage}, le nombre minimum de l'array est de ${minNum} et son nombre maximum est de ${maxNum}`);