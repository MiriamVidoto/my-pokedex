export async function getAllPokemons(offset) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=36&offset=${offset}`;
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
