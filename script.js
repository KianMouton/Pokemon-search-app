const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const sprite = document.getElementById("sprite");
const regex = /"/g;

const clearTypes = () => {
  types.innerHTML = "";
};

const fetchPokemon = async (input) => {
  try {
    const response = await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + input.toLowerCase())
    const data = await response.json()
    console.log(data);
    clearTypes();
    pokemonName.innerText = data["name"].toUpperCase();
    pokemonId.innerText = data["id"];
    weight.innerText = data["weight"];
    height.innerText = data["height"];
    for (let i = 0; i < data.types.length; i++) {
      types.innerHTML += `<span id="type">${JSON.stringify(data.types[i].type.name).toUpperCase().replace(regex, "")}</span>`;
    }
    hp.innerText = data["stats"][0]["base_stat"];
    attack.innerText =  data["stats"][1]["base_stat"];
    defense.innerText = data["stats"][2]["base_stat"];
    specialAttack.innerText = data["stats"][3]["base_stat"];
    specialDefense.innerText = data["stats"][4]["base_stat"];
    speed.innerText = data["stats"][5]["base_stat"];
    sprite.src = data["sprites"]["front_default"];
  }
  catch(err) {
    alert("Pokémon not found");
  }
  
  
}



searchButton.addEventListener("click", () => fetchPokemon(searchInput.value));