// Imports
import pokeDex from "./data/pokeData.js";

// Generating a randum number from 1 to 151 to retrieve a random Pokemon
const randomPoke = (object) => {
  const random = Math.floor(Math.random() * 151) + 1;
  return object[random];
};

// Getting the pokemon image according to the random poke generated
let pokeImage = document.getElementById("pokemon-sprite");
let pokeButton = document.getElementById("generate-btn");

pokeImage.hidden = true;

// Event handler for random gen button
pokeButton.onclick = function () {
  const pokeValue = randomPoke(pokeDex);
  const imgPath = `assets/firered-leafgreen/${pokeValue[number]}.png`;
  pokeImage.hidden = false;
};

// Testing module
const test1 = randomPoke(pokeDex);
console.log(test1);
