import React from 'react';
import PropTypes from 'prop-types';

function PokemonImage({ pokemon, forms }) {

  return (
    <div>
      <h1>{forms[0].name}</h1>
      <img src={pokemon['pokemon']['sprites']['other']['official-artwork']['front_default']} width="250px" />
    </div>
  );
}

PokemonImage.propTypes = {
  pokemon: PropTypes.object.isRequired,
  forms: PropTypes.array.isRequired
};

export default PokemonImage;