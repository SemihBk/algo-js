// Exercise 5.2
// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

// Créer une fonction randomizeCast(tvSerie) qui prendra en argument la data structure de l'exercice 5.1 et retourner une liste du même cast dans un ordre aléatoire

const readlineSync = require("readline-sync");

const askTvSerie = () => {
  let name = readlineSync.question('Can you give me the name of your favourite movie, please?');
  let year = readlineSync.question('Its year of production ?');
  let cast = readlineSync.question('The cast members ?');

  let tvSerie = {name, year, cast};
  return console.log(`Ton film préféré est ${name}, sorti en ${year}, avec un cast d'enfer, avec ${cast}`); 
  //  */console.log(tvSerie);
};

const randomizeCast= (tvSerie) => {
  return console.log(Math.random(askTvSerie["cast"]));
}

console.log(askTvSerie["cast"])

askTvSerie();
/* randomizeCast();
 */
