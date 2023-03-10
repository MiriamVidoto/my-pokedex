import { useContext } from 'react';
import { StyledSidebar } from '../styleds/StyledSidebar';
import PokedexContext from '../context/PokedexContext';
import { allPokemonsList } from '../utils/allPokemonsList';
import { StyledButton } from '../styleds/StyledButton';

export default function Search() {
  const { setPokemonsList, setLoading } = useContext(PokedexContext);

  const handleClickAll = async () => {
    setLoading(true);
    const result = await allPokemonsList();
    setPokemonsList(result);
    setLoading(false);
  };

  return (
    <StyledSidebar>
      <StyledButton
        type="button"
        onClick={ () => handleClickAll() }
      >
        All Pokemons
      </StyledButton>
    </StyledSidebar>
  );
}
