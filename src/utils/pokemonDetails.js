/* eslint-disable sonarjs/no-duplicate-string */
import { getPokemonByName } from '../services/getPokemonByName';
import { getByUrl } from '../services/getByUrl';

const getSpecies = async (pokemon) => {
  const urlSpecies = pokemon.species.url ?? 'nonexistent';
  const species = await getByUrl(urlSpecies);
  return species;
};

const getEvolution = async (species) => {
  const evolution = await getByUrl(species.evolution_chain.url);
  // const evolvesToName = await evolution.chain?.evolves_to[0]
  //   .evolves_to[0].species.name ?? 'nonexistent';
  // const evolutionTo = await getPokemonByName(evolvesToName);
  // const evolvesFromName = await evolution.chain.species?.name ?? 'nonexistent';
  // const evolutionFrom = await getPokemonByName(evolvesFromName);
  return evolution;
};

export const getPokemon = async (name) => {
  const pokemon = await getPokemonByName(name);
  if (pokemon.name === 'pokemon not found') return pokemon;
  const species = await getSpecies(pokemon);
  const evolution = await getEvolution(species);

  const pokemonData = {
    name: pokemon.name,
    image: pokemon.sprites.other['official-artwork'].front_default,
    color: species.color.name,
    details: {
      shiny: pokemon.sprites.other['official-artwork'].front_shiny,
      description: species.flavor_text_entries[15].flavor_text,
      types: [
        pokemon.types[0].type.name,
        pokemon?.types[1]?.type?.name ?? 'nonexistent'],
      abilities: [
        pokemon.abilities[0].ability.name,
        pokemon?.abilities[1]?.ability?.name ?? 'nonexistent'],
    },
    evolution,
  };

  return pokemonData;
};
