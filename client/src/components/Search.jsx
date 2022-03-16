import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from './App.jsx';

function Search() {
  const { setPokemonId } = useContext(GlobalContext);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios.get('/pokedex/mokemon')
    .then((res) => {
      const newPokemon = res.data.find((pokemon) => pokemon.name.toLowerCase().includes(searchInput));
      if (newPokemon) {
        const newId = newPokemon.id;
        setPokemonId(newId);
      } else {
        window.alert('Pokémon not found');
      }
      setSearchInput('');
    })
    .catch((er) => {
      console.log(err);
    })
  }


  return (
    <div>
      <input placeholder="Search pokédex..." value={searchInput} type="Search" onChange={handleSearchInputChange} />
      <button type="submit">
        Search
      </button>
    </div>
  );
}

export default Search;