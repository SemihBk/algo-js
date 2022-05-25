/* let numbers = [1, 2, 3];
let numbersCopy = [...numbers];

console.log(numbersCopy);
 */

/****/

let array1 = [1, 2, 3];
let arrayClone = []; 

Array.prototype.push.apply(arrayClone, array1)
console.log(array1, arrayClone);