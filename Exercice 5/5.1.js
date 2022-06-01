// Créer une fonction askTvSerie() qui demandera ces données : Name, production year, actors

/* const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me the name of your favourite movie, please?');
let year = readlineSync.question('Its year of production ?');
let cast = readlineSync.question('The cast members ?');

let tvSerie = {name, year, cast};

const askTvSerie = (name, year, cast) => {
  this.name = name;
  this.year = year;
  this.cast = cast;
  return;
};


console.log(askTvSerie); */

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

  let tvSerie = {name, year, arrayCast};
  return {
    name: name,
    year: year,
    cast: arrayCast
  }; 
  //  */console.log(tvSerie);
};

console.log(askTvSerie());

