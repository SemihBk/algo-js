/* EXERCICE 2.4 */

const readlineSync = require("readline-sync");

var favNum = readlineSync.question('Can you give me your favourite number, please?');

while (favNum != 42) {
    console.log(`Not a good one, right ?`)
    var favNum = readlineSync.question('Another choice ?');
  }
  console.log("42 is a nice choice.")



