import PropTypes from 'prop-types';
import { StyledImgCircle } from '../styleds/StyledImgCircle';
import { StyledContainer } from '../styleds/StyledContainer';
import { StyledTitle } from '../styleds/StyledTitle';

import DetailsCard from './DetailsCard';

export default function PokemonDetailsCard({ pokemon }) {
  return (
    <>
      <StyledTitle color={ pokemon.color }>
        {(pokemon.name).toUpperCase()}
      </StyledTitle>
      <StyledContainer color={ pokemon.color } minHeight="70vh">
        <StyledImgCircle>
          <img alt={ pokemon.name } src={ pokemon.image } />
        </StyledImgCircle>
        <DetailsCard details={ pokemon.details } />
      </StyledContainer>
    </>
  );
}

PokemonDetailsCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    color: PropTypes.string,
    details: PropTypes.shape({
      shiny: PropTypes.string,
      description: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      abilities: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};
