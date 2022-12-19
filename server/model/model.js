const axios = require('axios');

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemon = (params, callback) => {
  const url = `${API_BASE_URL}/${params.name}/`;
  axios.get(url)
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
};

const getAllPokemon = (params, callback) => {
  const url = `${API_BASE_URL}/`;
  axios.get(url, { params: { limit: 1200 } })
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
};

const getPokemonSpecies = (params, callback) => {
  const url = `${API_BASE_URL}-species/${params.name}/`;
  axios.get(url)
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
};

module.exports = {
  getPokemon,
  getAllPokemon,
  getPokemonSpecies
};
