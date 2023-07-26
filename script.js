async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonNameInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayPokemonInfo(data);
    } catch (error) {
      displayError();
    }
  }
  
  function displayPokemonInfo(data) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `
      <h2>${capitalizeFirstLetter(data.name)}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}" height="200">
      <p>Height: ${data.height / 10} m</p>
      <p>Weight: ${data.weight / 10} kg</p>
      <p>Abilities: ${data.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ')}</p>
    `;
  }
  
  function displayError() {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = '<p>Pokémon not found. Please try again!</p>';
  }
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  