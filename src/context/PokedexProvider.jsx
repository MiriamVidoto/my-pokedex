import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';

export default function PokedexProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState();
  const [pokemonsList, setPokemonsList] = useState();

  const value = useMemo(() => ({
    loading,
    setLoading,
    offset,
    setOffset,
    pokemonsList,
    setPokemonsList,
  }), [loading, setLoading, offset, setOffset, pokemonsList, setPokemonsList]);

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
