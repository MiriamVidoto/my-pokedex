export async function getAllPokemons(offset) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=40&offset=${offset}`;
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
