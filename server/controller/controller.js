const Model = require('../model/model.js');

const getPokemon = (req, res) => {
  const params = req.query;
  Model.getPokemon(params, (err, pokemon) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pokemon);
    }
  })
};

const getAllPokemon = (req, res) => {
  const params = req.query;
  Model.getAllPokemon(params, (err, pokemon) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pokemon);
    }
  })
};

const getPokemonSpecies = (req, res) => {
  const params = req.query;
  Model.getPokemonSpecies(params, (err, pokemonSpecies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pokemonSpecies);
    }
  })
};

module.exports = {
  getPokemon,
  getAllPokemon,
  getPokemonSpecies
}