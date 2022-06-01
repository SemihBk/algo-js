// Exercise 5.2
// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.


const readlineSync = require("readline-sync");

const askTvSerie = () => {
  let name = readlineSync.question('Can you give me the name of your favourite movie, please?');
  let year = readlineSync.question('Its year of production ?');
  let cast = readlineSync.question('The cast members ?');
  let arrayCast = [];
  arrayCast.push(cast);

  for (i = 1; cast !== "No"; i++){
    cast = readlineSync.question('Another one ? Write No to stop.');
    arrayCast[i] = cast;
  }

  arrayCast.pop();

  arrayCast = arrayCast.sort(() => Math.random() - 0.5);

  let tvSerie = {name, year, arrayCast};

  return {
    name: name,
    year: year,
    cast: arrayCast
  }; 
};

console.log(askTvSerie());


const randomizeCast = (randocast) => {
  randocast.cast.sort(() => Math.random() - 0.5);
  return randocast;
}

console.log(randomizeCast(askTvSerie()));