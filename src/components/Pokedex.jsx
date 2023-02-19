import React, { useContext } from 'react';
import PokedexContext from '../context/PokedexContext';
import PokemonCard from './PokemonCard';
import { StyledContainer } from '../styleds/StyledContainer';

export default function Pokedex() {
  const { pokemonsList } = useContext(PokedexContext);
  const size = pokemonsList.length === 1 ? '400px' : '150px';

  if (pokemonsList) {
    return (
      <StyledContainer minHeight="78vh">
        {
          pokemonsList.map((pokemon) => (
            <PokemonCard
              key={ pokemon.name }
              name={ pokemon.name }
              image={ pokemon.image }
              color={ pokemon.color }
              width={ size }
              height={ size }
            />
          ))
        }
      </StyledContainer>
    );
  }
}
