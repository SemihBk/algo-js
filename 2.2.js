/* EXERCICE 2.2 */
const readlineSync = require("readline-sync");

let currentAge = readlineSync.question('Can you give me your age, please ? ');
let minAge = readlineSync.question('Can you give me a min Age, please ? ');
let maxAge = readlineSync.question('Can you give me a max Age, please ? ');


if (minAge > maxAge) {
  console.log("Error404, can you please type a min Age that is under the max Age ?")
}
else if ((minAge < currentAge) && (currentAge < maxAge)) {
  console.log("You have your current age between the min and the max age!");
}
else {
  console.log("Your age isn't between the min and te max age...");
}



