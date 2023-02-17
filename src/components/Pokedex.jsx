import React, { useEffect, useContext } from 'react';
import PokedexContext from '../context/PokedexContext';
import { getAllPokemons } from '../services/getAllPokemons';
import { getByUrl } from '../services/getByUrl';
import PokemonCard from './PokemonCard';
import { StyledContainer } from '../styleds/StyledContainer';

export default function Pokedex() {
  const {
    loading,
    setLoading,
    offset,
    setOffset,
    pokemonsList,
    setPokemonsList,
  } = useContext(PokedexContext);

  const getPokemons = async () => {
    if (!offset) {
      setOffset(0);
    }

    const data = await getAllPokemons(0);
    const promisses = data.map(async (pokemon) => {
      const response = await getByUrl(pokemon.url);
      return response;
    });
    const result = await Promise.all(promisses);

    setPokemonsList(result);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  if (loading) return (<h1>Loading...</h1>);

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
