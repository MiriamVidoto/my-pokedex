import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCard } from '../styleds/StyledCard';

export default function PokemonCard({ name, image }) {
  return (
    <StyledCard>
      <Link to={ `/details/${name}` }>
        {
          image && <img
            alt={ name }
            src={ image }
          />
        }
        <span>{ name.toUpperCase() }</span>
      </Link>
    </StyledCard>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
