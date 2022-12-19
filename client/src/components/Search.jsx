import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from './App.jsx';
import { HeaderWrapper, SearchButton, InputBar } from './styled/styles.js';

function Search() {
  const { setPokemonName } = useContext(GlobalContext);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    axios.get('/pokedex/allpokemon')
      .then((response) => {
        const newPokemon = response.data.results.find((pokemon) =>
          pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        if (newPokemon) {
          setPokemonName(newPokemon.name);
        } else {
          window.alert('Pokémon not found');
        }
        setSearchInput('');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <HeaderWrapper>
      <form>
        <InputBar
          placeholder="Search pokédex..."
          value={searchInput}
          type="text"
          onChange={handleSearchInputChange}
        />
        <SearchButton type="submit" onClick={handleSearchSubmit}>
          Search
        </SearchButton>
      </form>
    </HeaderWrapper>
  );
}

export default Search;
