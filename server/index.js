const express = require('express');
const Controller = require('./controller/controller.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/pokemon/', (req, res) => {
  Controller.getPokemon(req, res);
});

app.get('/pokemon/', (req, res) => {
  Controller.getPokemon(req, res);
});

app.get('/pokemon/species', (req, res) => {
  Controller.getPokemonSpecies(req, res);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});