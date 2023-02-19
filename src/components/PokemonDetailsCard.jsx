import PropTypes from 'prop-types';
import { StyledContainer } from '../styleds/StyledContainer';
import { StyledTitle } from '../styleds/StyledTitle';

import DetailsCard from './DetailsCard';
import EvolutionCard from './EvolutionCard';
import ImagesCard from './ImagesCard';

export default function PokemonDetailsCard({ pokemon }) {
  return (
    <>
      <StyledTitle color={ pokemon.color }>
        {`#${pokemon.id} ${(pokemon.name).toUpperCase()}`}
      </StyledTitle>
      <StyledContainer color={ pokemon.color } minHeight="82vh">
        <ImagesCard pokemon={ pokemon } />
        <DetailsCard details={ pokemon.details } />
        <EvolutionCard evolution={ pokemon.evolution } />
      </StyledContainer>
    </>
  );
}

PokemonDetailsCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    color: PropTypes.string,
    details: PropTypes.shape({
      shiny: PropTypes.string,
      description: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      abilities: PropTypes.arrayOf(PropTypes.string),
    }),
    evolution: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })),
  }).isRequired,
};
