const Model = require('../model/model.js');

const handleSuccess = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

const getPokemon = (req, res) => {
  const params = req.query;
  Model.getPokemon(params, (err, pokemon) => {
    if (err) {
      handleError(res, err);
    } else {
      handleSuccess(res, pokemon);
    }
  });
};

const getAllPokemon = (req, res) => {
  const params = req.query;
  Model.getAllPokemon(params, (err, pokemon) => {
    if (err) {
      handleError(res, err);
    } else {
      handleSuccess(res, pokemon);
    }
  });
};

const getPokemonSpecies = (req, res) => {
  const params = req.query;
  Model.getPokemonSpecies(params, (err, pokemonSpecies) => {
    if (err) {
      handleError(res, err);
    } else {
      handleSuccess(res, pokemonSpecies);
    }
  });
};

module.exports = {
  getPokemon,
  getAllPokemon,
  getPokemonSpecies
};
