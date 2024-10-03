// Create an array to store pokemon data
let pokemonList = [];

// Add pokemon to the created array
pokemonList.push({
  name: 'Machop',
  types: ['fighting'],
  height: 0.8,
  weight: 19.5
})

pokemonList.push({
  name: 'Litwick',
  types: ['fire', 'ghost'],
  height: 0.3,
  weight: 3.1
})

pokemonList.push({
  name: 'Houndour',
  types: ['dark', 'fire'],
  height: 0.6,
  weight: 10.8 
})

pokemonList.push({
  name: 'Croagunk',
  types: ['poison', 'fighting'],
  height: 0.7,
  weight: 23
})

// Iterate through the pokemonList array and print each Pokemon's name and height
for (let i=0; i < pokemonList.length; i++){
  statMessage = (`${pokemonList[i].name} (height: ${pokemonList[i].height}m)`);
  if (pokemonList[i].height > 0.7){
    statMessage = statMessage + " - Wow, that's big!"
  }
  document.write(statMessage + "<br><br>")
}