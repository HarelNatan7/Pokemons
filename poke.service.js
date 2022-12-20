'use strict'

function getPokemons(cb) {
    $.get('https://pokeapi.co/api/v2/pokemon', cb)
}

function getPokemonDetails(pokemon, cb) {
    $.get(pokemon.url, cb)
}