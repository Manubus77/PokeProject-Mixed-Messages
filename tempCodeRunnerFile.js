// Event handler for random gen button
pokeButton.onclick = function () {
  const pokeValue = randomPoke(pokeDex);
  const imgPath = `assets/firered-leafgreen/${pokeValue.number}.png`;
  pokeImage.hidden = false;
  pokeImage.src = imgPath;
  pokeImage.alt = pokeValue.name;
  document.getElementById("pokemon-name").textContent = pokeValue.name;
  document.getElementById("pokemon-description").textContent = pokeValue.description;
  
};