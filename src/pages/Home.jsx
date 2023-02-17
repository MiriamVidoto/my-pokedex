import { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';
import ButtonAllPokemons from '../components/ButtonAllPokemons';
import { StyledMain } from '../styleds/StyledMain';
import PokedexContext from '../context/PokedexContext';
import { getAllPokemons } from '../services/getAllPokemons';

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
    const data = await getAllPokemons(offset);
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
      <StyledMain>
        <Search />
        { pokemonsList.length === 1 && <ButtonAllPokemons />}
        { loading && <h1>Loading...</h1> }
        { (loading || pokemonsList.length) > 1 && <Pagination />}
        { !loading && <Pokedex />}
        { (loading || pokemonsList.length) > 1 && <Pagination />}
      </StyledMain>
      <Footer />
    </>
  );
}
