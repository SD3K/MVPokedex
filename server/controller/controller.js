import axios from 'axios';
import Pokedex from 'pokedex-promise-v2';
const Model = require('./model/model.js');

const P = new Pokedex();

const getPokemon = (req, res) => {
  Model.getPokemon((err, pokemon) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pokemon);
    }
  })
};

const getPokemonSpecies = () => {
  Model.getPokemonSpecies((err, pokemonSpecies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pokemonSpecies);
    }
  })
};

module.exports = {
  getPokemon,
  getPokemonSpecies
}