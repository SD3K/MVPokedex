import React, { useState, useEffect, useContext, createContext } from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import PokedexEntryText from './PokedexEntryText.jsx';
import testData from './testData.js';
import PokemonBasicInfo from './PokemonBasicInfo.jsx';

export const GlobalContext = createContext(0);

function App() {
  const [pokemon, setPokemon] = useState(testData.pokemon);
  const [pokemonId, setPokemonId] = useState(testData.pokemon.id);
  const [pokemonSpecies, setPokemonSpecies] = useState(testData.pokemonSpecies);

  return (
    <GlobalContext.Provider value= {{
      pokemonId,
      setPokemonId,
    }}>
      <div>
        <Header />
        <Search />
        <PokemonBasicInfo
          pokemon={pokemon}
          forms={pokemon.forms}
          id={pokemonId}
          category={pokemonSpecies.genera[7].genus} />
        <PokedexEntryText pokedexEntry={pokemonSpecies} />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;