import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';

export default function PokedexProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [pokemonsList, setPokemonsList] = useState([]);

  const value = useMemo(() => ({
    loading,
    setLoading,
    offset,
    setOffset,
    pokemonsList,
    setPokemonsList,
  }), [loading, offset, pokemonsList]);

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
