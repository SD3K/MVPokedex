import { createGlobalStyle } from "styled-components";
import PokemonDPPro from '../../fonts/pokemon-dp-pro.woff';

export default createGlobalStyle`
@font-face {
  font-family: 'Pokemon-DP Pro';
  src: local('Pokemon-DP Pro'), url(${PokemonDPPro}) format('woff');
  font-weight: 300;
  font-style: normal;
}
`;