const readlineSync = require("readline-sync");

/* Demander un nombre et le store dans une variable n */
let n = readlineSync.question('Can you give me a number ?');

/* Créer une array vide */
let array1 = [];

/* Créer une variable pour la somme 0 */
/* let sum = 0; */


/* Créer une fonction qui permet de choisir un nombre random */
function rand10(max) {
  return (Math.floor(Math.random() * max));
}

/* Créer une fonction qui permet de  */
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
    console.log(i);  
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





// Create a function named average(arr) that takes an array of numbers as argument and returns the average.

///// +=
// let money = 100;
// money = money + 50;
// money += 50;
// console.log(money);

// const arr1 = [1, 2, 8, 18, 3, 22];
// const average = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + arr1[i];
//   }
//   const avg = sum / array.length;
//   console.log(avg);
//   return avg;
// };
// average(arr1);

// Exercise 4.7 : Elevator
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function "elevator" accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator call
// - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0-2.
// Examples: elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"
