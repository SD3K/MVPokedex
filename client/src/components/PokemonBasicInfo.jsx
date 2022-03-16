import React from 'react';
import PropTypes from 'prop-types';

function PokemonBasicInfo({ pokemon, forms, id, category }) {

  function pad(n, length) {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
  }

  return (
    <div>
      <h1>{forms[0].name}</h1>
      <h3>{pad(id, 3)}</h3>
      <h3>{category}</h3>
      <img src={pokemon['sprites']['other']['official-artwork']['front_default']} width="250px" />
    </div>
  );
}

PokemonBasicInfo.propTypes = {
  pokemon: PropTypes.object.isRequired,
  forms: PropTypes.array.isRequired
};

export default PokemonBasicInfo;