import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from './App.jsx';
import { HeaderWrapper, SearchButton, InputBar } from './styled/styles.js';

function Search() {
  const { setPokemonName } = useContext(GlobalContext);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios.get('/pokedex/allpokemon')
    .then((res) => {
      const newPokemon = res.data.results.find((pokemon) => pokemon.name.toLowerCase().includes(searchInput));
      if (newPokemon) {
        const newName = newPokemon.name;
        setPokemonName(newName);
      } else {
        window.alert('Pokémon not found');
      }
      setSearchInput('');
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <HeaderWrapper>
      <form>
        <InputBar placeholder="Search pokédex..." value={searchInput} type="Search" onChange={handleSearchInputChange} />
        <SearchButton type="submit" onClick={handleSearchSubmit}>
          Search
        </SearchButton>
      </form>
    </HeaderWrapper>
  );
}

export default Search;