/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import PokedexContext from './PokedexContext';

export default function PokedexProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState();
  const [pokemonsList, setPokemonsList] = useState();

  const value = {
    loading,
    setLoading,
    offset,
    setOffset,
    pokemonsList,
    setPokemonsList,
  };

  return (
    <PokedexContext.Provider value={ value }>
      {children}
    </PokedexContext.Provider>
  );
}

PokedexProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
