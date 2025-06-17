// Imports
import pokeDex from "./data/pokeData.js";

// Generating a randum number from 1 to 151 to retrieve a random Pokemon
const randomPoke = (object) => {
  const random = Math.floor(Math.random() * 151) + 1;
  return object[random];
};

// Testing module
const test1 = randomPoke(pokeDex);
console.log(test1);
