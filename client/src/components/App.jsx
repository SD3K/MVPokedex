import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import GlobalFonts from './styled/fontStyles.js';
import Header from './Header.jsx';
import Search from './Search.jsx';
import PokedexEntryText from './PokedexEntryText.jsx';
import testData from './testData.js';
import PokemonBasicInfo from './PokemonBasicInfo.jsx';

export const GlobalContext = createContext();

function App() {
  const [pokemon, setPokemon] = useState(testData.pokemon);
  const [pokemonName, setPokemonName] = useState(testData.pokemon.name);
  const [pokemonSpecies, setPokemonSpecies] = useState(testData.pokemonSpecies);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPokemon = () => {
    setIsLoading(true);
    axios.get('/pokedex/pokemon/', { params: { name: pokemonName } })
      .then(res => {
        setPokemon(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Unable to get new pokemon, ', err);
        setError(err);
        setIsLoading(false);
      });
  }

  const getPokemonSpecies = () => {
    setIsLoading(true);
    axios.get('/pokedex/pokemon/species', { params: { name: pokemonName } })
      .then(res => {
        setPokemonSpecies(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Unable to get new pokemon species, ', err);
        setError(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPokemon();
    getPokemonSpecies();
  }, [pokemonName]);

  return (
    <GlobalContext.Provider value= {{
      pokemonName,
      setPokemonName,
    }}>
      <div>
        <GlobalFonts />
        <Header />
        <Search />
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurred: {error.message}</p>
        ) : (
          <>
            <PokemonBasicInfo
              pokemon={pokemon}
              name={pokemonName}
              genus={pokemonSpecies.genera[7].genus} />
            <PokedexEntryText pokedexEntry={pokemonSpecies} />
          </>
        )}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
