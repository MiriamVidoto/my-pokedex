import PropTypes from 'prop-types';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledTag } from '../styleds/StyledTag';

export default function DetailsCard({ details }) {
  return (
    <StyledColumnContainer
      width="400px"
      justifyContent="space-around"
      margin="16px"
    >
      <StyledTag
        column="column"
        height="80px"
      >
        <p>{ details.description }</p>
      </StyledTag>
      <StyledTag justifyContent="space-around">
        {
          details.abilities.filter((ability) => ability !== 'nonexistent')
            .map((ability, i) => <span key={ i }>{ability.toUpperCase()}</span>)
        }
      </StyledTag>
      {
        details.stats.map((stat) => (
          <StyledTag justifyContent="space-around" key={ stat.name }>
            <span>{(stat.name).toUpperCase()}</span>
            <span>{ stat.points }</span>
          </StyledTag>
        ))
      }
    </StyledColumnContainer>
  );
}

DetailsCard.propTypes = {
  details: PropTypes.shape({
    description: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    abilities: PropTypes.arrayOf(PropTypes.string),
    generation: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number,
    })),
  }).isRequired,
};
