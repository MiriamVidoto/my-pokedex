import { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';
import ButtonAllPokemons from '../components/ButtonAllPokemons';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import PokedexContext from '../context/PokedexContext';
import { allPokemonsList } from '../utils/allPokemonsList';

export default function Home() {
  const {
    loading,
    setLoading,
    offset,
    pokemonsList,
    setPokemonsList,
  } = useContext(PokedexContext);

  const getPokemons = async () => {
    setLoading(true);
    const data = await allPokemonsList(offset);
    setPokemonsList(data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  return (
    <>
      <Header />
      <Navbar />
      <StyledColumnContainer minHeight="86vh">
        <Search />
        { pokemonsList.length === 1 && <ButtonAllPokemons />}
        { loading && <h1>Loading...</h1> }
        { (loading || pokemonsList.length) > 1 && <Pagination />}
        { !loading && <Pokedex />}
        { (loading || pokemonsList.length) > 1 && <Pagination />}
      </StyledColumnContainer>
      <Footer />
    </>
  );
}
