import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCard } from '../styleds/StyledCard';
import pokemonNotFound from '../images/pokemon-note-found.svg';

export default function PokemonCard({ name, image, color, height, width }) {
  return (
    <StyledCard color={ color } height={ height } width={ width }>
      <Link to={ `/details/${name}` }>
        {
          image && <img
            alt={ name }
            src={ image }
          />
        }
        {
          (name === 'pokemon not found') && <img
            alt={ name }
            src={ pokemonNotFound }
          />
        }
        <h4>{ name.toUpperCase() }</h4>
      </Link>
    </StyledCard>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
