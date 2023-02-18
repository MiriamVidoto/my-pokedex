import PropTypes from 'prop-types';
// import { StyledImg } from '../styleds/StyledImg';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledTag } from '../styleds/StyledTag';

export default function DetailsCard({ details }) {
  return (
    <div>
      <StyledColumnContainer width="300px">
        <StyledTag
          color="white"
          column="column"
          borderRadius="16px"
          width="250px"
          margin="4px"
        >
          <h4>Description:</h4>
          <p>{ details.description }</p>
        </StyledTag>
        {/* <h4>Shiny:</h4>
      <StyledImg src={ details.shiny } alt="pokemon=shiny" /> */}
        <StyledTag
          color="white"
          borderRadius="16px"
          width="250px"
          margin="4px"
          justifyContent="space-around"
        >
          <h4>Type:</h4>
          {
            details.types.filter((type) => type !== 'nonexistent')
              .map((type, i) => <p key={ i }>{type}</p>)
          }
        </StyledTag>
        <StyledTag
          color="white"
          borderRadius="16px"
          width="250px"
          margin="4px"
          justifyContent="space-around"
        >
          <h4>Abilities:</h4>
          {
            details.abilities.filter((ability) => ability !== 'nonexistent')
              .map((ability, i) => <p key={ i }>{ability}</p>)
          }
        </StyledTag>
      </StyledColumnContainer>
    </div>
  );
}

DetailsCard.propTypes = {
  details: PropTypes.shape({
    shiny: PropTypes.string,
    description: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    abilities: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
