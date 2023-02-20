import PropTypes from 'prop-types';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import PokemonCard from './PokemonCard';
import { StyledTag } from '../styleds/StyledTag';

export default function EvolutionCard({ evolution }) {
  return (
    <StyledColumnContainer width="400px" margin="16px">
      <StyledTag borderRadius="4px">EVOLUTIONS</StyledTag>
      {
        evolution.map((pokemon) => (
          <PokemonCard
            key={ pokemon.name }
            name={ pokemon.name }
            image={ pokemon.image }
            color="white"
            width="270px"
            height="100px"
          />
        ))
      }
    </StyledColumnContainer>
  );
}

EvolutionCard.propTypes = {
  evolution: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};
