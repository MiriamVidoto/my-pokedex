import PropTypes from 'prop-types';
import { StyledContainer } from '../styleds/StyledContainer';
import MainDetails from './MainDetails';
import DetailsCard from './DetailsCard';
import EvolutionCard from './EvolutionCard';
import ImagesCard from './ImagesCard';

export default function PokemonDetailsCard({ pokemon }) {
  return (
    <>
      <MainDetails
        id={ pokemon.id }
        name={ pokemon.name }
        color={ pokemon.color }
        types={ pokemon.types }
        image={ pokemon.image }
      />
      <StyledContainer color={ pokemon.color } minHeight="77vh">
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
    types: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.shape({
      shiny: PropTypes.string,
      description: PropTypes.string,
      abilities: PropTypes.arrayOf(PropTypes.string),
    }),
    evolution: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })),
  }).isRequired,
};
