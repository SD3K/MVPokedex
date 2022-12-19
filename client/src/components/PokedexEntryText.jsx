import React from 'react';
import { DexEntryWrapper, DexEntryBody } from './styled/styles.js';

const PokedexEntryText = ({ pokedexEntry }) => {
  const format = s => s && s.replace('\f', '\n');

  return (
    <DexEntryWrapper>
      <DexEntryBody>
        {format(pokedexEntry.flavor_text_entries[0].flavor_text)}
      </DexEntryBody>
    </DexEntryWrapper>
  );
}

export default PokedexEntryText;
