import { getByUrl } from './getByUrl';

export async function getAllPokemons(offset) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=36&offset=${offset}`;
    const response = await fetch(url);
    const { results } = await response.json();
    const promisses = results.map(async (pokemon) => {
      const result = await getByUrl(pokemon.url);
      return result;
    });
    const data = await Promise.all(promisses);
    return data;
  } catch (error) {
    console.log(error);
  }
}
