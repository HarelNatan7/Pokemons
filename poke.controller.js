'use strict'


let gPokemons = []

function onInIt() {
    getPokemons(renderPokemons)
}

function renderPokemons(pokemons) {
    let strHTMLs = ''
    gPokemons = pokemons.results
    gPokemons.map(pokemon => {
        getPokemonDetails(pokemon, renderPokemon)
        let strHTML = `<div id="${pokemon.name}" class="pokemon"><h1 class="name">${pokemon.name}</h1></div>`
        strHTMLs += strHTML
    })
    const elPokemons = document.querySelector('.pokemons-container')
    elPokemons.innerHTML = strHTMLs
}

function renderPokemon(pokemon) {
    const elPokemon = document.getElementById(`${pokemon.name}`)
    elPokemon.innerHTML = `<div class="pokemon">
     <h1 class="name">${pokemon.name}</h1>
     <h4 class="weight">Weight: ${pokemon.weight}</h4>
     <img src="${pokemon.sprites['front_default']}">
     </div>`
}