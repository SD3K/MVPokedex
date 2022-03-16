import React from 'react';
import PropTypes from 'prop-types';

function PokedexEntryText({ pokedexEntry }) {

  return (
    <div>
      {pokedexEntry.flavor_text_entries[0].flavor_text}
    </div>
  );
}

PokedexEntryText.propTypes = {
  pokedexEntry: PropTypes.object.isRequired
};

export default PokedexEntryText;