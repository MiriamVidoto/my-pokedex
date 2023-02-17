import { useContext, useState } from 'react';
import { StyledSidebar } from '../styleds/StyledSidebar';
import PokedexContext from '../context/PokedexContext';
import { getPokemonByName } from '../services/getPokemonByName';
import { StyledInput } from '../styleds/StyledInput';
import { StyledButton } from '../styleds/StyledButton';

export default function Search() {
  const [name, setName] = useState('');

  const { setPokemonsList, setLoading } = useContext(PokedexContext);

  const handleChange = (event) => setName(event.target.value);

  const handleClickSearch = async () => {
    setLoading(true);
    const result = await getPokemonByName(name);
    setPokemonsList([result]);
    setName('');
    setLoading(false);
  };

  return (
    <StyledSidebar>
      <StyledInput
        type="text"
        placeholder="Enter pokemon's name"
        value={ name }
        onChange={ handleChange }
      />
      <StyledButton
        type="button"
        onClick={ handleClickSearch }
      >
        Search
      </StyledButton>
    </StyledSidebar>
  );
}
