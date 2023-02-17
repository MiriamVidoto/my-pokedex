export async function getPokemonByName(name) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return { name: 'pokemon not found' };
  }
}
