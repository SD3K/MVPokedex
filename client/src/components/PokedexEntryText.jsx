import React from 'react';
import { DexEntryWrapper, DexEntryBody } from './styled/styles.js';

function PokedexEntryText({ pokedexEntry }) {

  const format = (s) => {
    if (typeof s !== 'string') {
      return '';
    }
    return s.replace('\f', '\n');
  }

  return (
    <DexEntryWrapper>
      <DexEntryBody>
        {format(pokedexEntry.flavor_text_entries[0].flavor_text)}
      </DexEntryBody>
    </DexEntryWrapper>
  );
}

export default PokedexEntryText;