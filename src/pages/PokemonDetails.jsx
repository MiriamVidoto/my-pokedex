import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PokemonDetailsCard from '../components/PokemonDetailsCard';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';

import { getPokemon } from '../utils/pokemonDetails';

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState();
  const { name } = useParams();

  const getPokemonData = async () => {
    const pokemonData = await getPokemon(name);
    setPokemon(pokemonData);
  };

  useEffect(() => {
    getPokemonData();
  }, [name]);

  return (
    <div>
      <Header />
      <Navbar />
      <StyledColumnContainer>
        { pokemon && <PokemonDetailsCard pokemon={ pokemon } /> }
      </StyledColumnContainer>
      <Footer />
    </div>
  );
}
