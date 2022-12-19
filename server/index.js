const express = require('express');
const Controller = require('./controller/controller.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handleGetPokemon = (req, res) => Controller.getPokemon(req, res);
const handleGetAllPokemon = (req, res) => Controller.getAllPokemon(req, res);
const handleGetPokemonSpecies = (req, res) => Controller.getPokemonSpecies(req, res);

app.get('/pokedex/pokemon/', handleGetPokemon);
app.get('/pokedex/allpokemon/', handleGetAllPokemon);
app.get('/pokedex/pokemon/species', handleGetPokemonSpecies);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
