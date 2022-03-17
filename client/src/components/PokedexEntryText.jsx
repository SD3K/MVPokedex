import React from 'react';
import { DexEntryWrapper, DexEntryBody } from './styled/styles.js';

function PokedexEntryText({ pokedexEntry }) {

  return (
    <DexEntryWrapper>
      <DexEntryBody>
        {pokedexEntry.flavor_text_entries[0].flavor_text}
      </DexEntryBody>
    </DexEntryWrapper>
  );
}

export default PokedexEntryText;