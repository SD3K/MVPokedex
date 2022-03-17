const axios = require('axios');
// const Pokedex = require('pokeapi-js-wrapper');

// const P = new Pokedex.Pokedex();

const API = `https://pokeapi.co/api/v2/pokemon`;

const getPokemon = (params, callback) => {
  axios.get(API + '/' + params.name + '/')
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getAllPokemon = (params, callback) => {
  axios.get(API + '/', {params: {limit: 1200}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getPokemonSpecies = (params, callback) => {
  axios.get(API + '-species/' + params.name + '/')
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

module.exports = {
  getPokemon,
  getAllPokemon,
  getPokemonSpecies
}