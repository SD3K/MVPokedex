import { createGlobalStyle } from "styled-components";
import PokemonDPPro from '../../fonts/pokemon-dp-pro.woff';

const fontFace = {
  '@font-face': {
    fontFamily: 'Pokemon-DP Pro',
    src: `local('Pokemon-DP Pro'), url(${PokemonDPPro}) format('woff')`,
    fontWeight: '300',
    fontStyle: 'normal',
  }
};

export default createGlobalStyle`
  ${fontFace}
`;
