import styled from 'styled-components';
import FontStyles from './fontStyles.js';

export const HeaderWrapper = styled.div`
  max-height: 450px;
  width: 60%;
  align: center;
  margin: auto;
  padding: 5px;
`

export const BasicInfoWrapper = styled.div`
  max-height: 450px;
  width: 60%;
  align: center;
  margin: auto;
`

export const DexEntryWrapper = styled.div`
  width: 59%;
  height: 225px;
  align: center;
  margin: auto;
  border-style: solid;
  border-width: 5px;
  border-color: #356ABC;
  border-radius: 20px;
  margin-top: 10px;
`

export const DexPhotoWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-style: solid;
  border-width: 5px;
  border-color: #356ABC;
  border-radius: 20px;
  margin-right: 5px;
`

export const DexNameIdWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-style: solid;
  border-width: 5px;
  border-color: #356ABC;
  border-radius: 20px;
  margin-left: 5px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PokemonName = styled.div`
  font-family: 'Pokemon-DP Pro', sans-serif;
  font-size: 42px;
  padding-top: 101px;
  padding-left: 50px;
`

export const PokemonIdNum = styled.div`
  font-family: 'Pokemon-DP Pro', sans-serif;
  padding: 3px;
  font-size: 24px;
  color: black;
  padding-right: 10px;
`

export const PokemonGenus = styled.div`
  font-family: 'Pokemon-DP Pro', sans-serif;
  padding: 3px;
  font-size: 24px;
  color: black;
  align-items: flex-end;
  padding-left: 10px;
`

export const PokemonTypes = styled.div`
  font-family: 'Pokemon-DP Pro', sans-serif;
  padding: 3px;
  font-size: 24px;
  color: green;
  padding-right: 10px;
`

export const DexEntryBody = styled.div`
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: 'Pokemon-DP Pro', sans-serif;
  font-size: 24px;
  padding-top: 10px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchButton = styled.button`
  font-family: 'Pokemon-DP Pro', sans-serif;
  font-size: 24px;
  background-color: #FFCD00;
  border-style: solid;
  border-width: 5px;
  border-radius: 10px;
  border-color: #356ABC;
  margin: 10px;
`

export const InputBar = styled.input`
  font-family: 'Pokemon-DP Pro', sans-serif;
  font-size: 24px;
  border-style: solid;
  border-width: 5px;
  border-radius: 10px;
  border-color: #356ABC;
`