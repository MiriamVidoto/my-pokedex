/* eslint-disable sonarjs/no-duplicate-string */
import { getPokemonByName } from '../services/getPokemonByName';
import { getByUrl } from '../services/getByUrl';

const getSpecies = async (pokemon) => {
  const urlSpecies = pokemon.species.url;
  const species = await getByUrl(urlSpecies);
  return species;
};

const getEvolutionList = async (list) => {
  const promisses = list.map(async (pokemon) => {
    const result = await getPokemonByName(pokemon);
    return result;
  });
  const data = await Promise.all(promisses);
  const evolutionList = data.map((pokemon) => (
    { name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default,
    }
  ));
  return evolutionList;
};

const getEvolutionListData = async (evolutionData) => {
  const listData = [
    evolutionData.chain?.species?.name ?? 'nonexistent',
    evolutionData.chain?.evolves_to[0]?.species.name ?? 'nonexistent',
    evolutionData.chain?.evolves_to[0]?.evolves_to[0]?.species.name ?? 'nonexistent',
  ]
    .filter((ele) => ele !== 'nonexistent');
  const list = await getEvolutionList(listData);
  return list;
};

const getEvolution = async (species) => {
  const urlEvolution = species.evolution_chain.url ?? 'nonexistent';
  const evolutionData = await getByUrl(urlEvolution);
  const evolution = await getEvolutionListData(evolutionData);
  return evolution;
};

const getStats = (pokemon) => {
  const stats = pokemon.stats.map((ele) => (
    { name: ele.stat.name, points: ele.base_stat }
  ));
  return stats;
};

export const getPokemon = async (name) => {
  const pokemon = await getPokemonByName(name);
  if (pokemon.name === 'pokemon not found') return pokemon;
  const species = await getSpecies(pokemon);
  const evolution = await getEvolution(species);
  const stats = await getStats(pokemon);

  const pokemonData = {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other['official-artwork'].front_default,
    color: species.color.name,
    shiny: pokemon.sprites.other['official-artwork'].front_shiny,
    description: species.flavor_text_entries[14].flavor_text,
    details: {
      types: [
        pokemon.types[0].type.name,
        pokemon?.types[1]?.type?.name ?? 'nonexistent'],
      abilities: [
        pokemon.abilities[0].ability.name,
        pokemon?.abilities[1]?.ability?.name ?? 'nonexistent'],
      generation: species.generation.name,
      stats,
    },
    evolution,
  };

  return pokemonData;
};
