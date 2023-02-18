import { getAllPokemons } from '../services/getAllPokemons';
import { getPokemon } from './pokemonDetails';

export const allPokemonsList = async (offset) => {
  const results = await getAllPokemons(offset);
  const promisses = results.map(async (pokemon) => {
    const result = await getPokemon(pokemon.name);
    return result;
  });
  const data = await Promise.all(promisses);
  return data;
};
