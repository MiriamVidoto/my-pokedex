import React, { useContext } from 'react';
import PokedexContext from '../context/PokedexContext';
import PokemonCard from './PokemonCard';
import { StyledContainer } from '../styleds/StyledContainer';

export default function Pokedex() {
  const { pokemonsList } = useContext(PokedexContext);

  if (pokemonsList) {
    return (
      <StyledContainer>
        {
          pokemonsList.map((pokemon) => (
            <PokemonCard
              key={ pokemon.name }
              name={ pokemon.name }
              image={ pokemon.sprites.other['official-artwork'].front_default }
            />
          ))
        }
      </StyledContainer>
    );
  }
}
