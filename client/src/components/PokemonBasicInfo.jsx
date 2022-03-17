import React from 'react';
import PropTypes from 'prop-types';
import {
  BasicInfoWrapper,
  PokemonName,
  PokemonIdNum,
  PokemonGenus,
  PokemonTypes,
  DexPhotoWrapper,
  DexNameIdWrapper,
  Flex
} from './styled/styles.js';

function PokemonBasicInfo({ pokemon, name, genus }) {

  function pad(n, length) {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return (
    <BasicInfoWrapper>
      <Flex>
        <DexPhotoWrapper>
          <img src={pokemon['sprites']['other']['official-artwork']['front_default']} width="250px" />
        </DexPhotoWrapper>
        <DexNameIdWrapper>
          <Flex>
            <PokemonName>{capitalize(name)}</PokemonName>
            <PokemonIdNum>{pad(pokemon.id, 3)}</PokemonIdNum>
          </Flex>
          <Flex>
            <PokemonGenus>{genus}</PokemonGenus>
            <PokemonTypes>{pokemon.types.length === 2 ? pokemon.types[0].type.name + ' / ' + pokemon.types[1].type.name : pokemon.types[0].type.name}</PokemonTypes>
          </Flex>
        </DexNameIdWrapper>
      </Flex>
    </BasicInfoWrapper>
  );
}

export default PokemonBasicInfo;