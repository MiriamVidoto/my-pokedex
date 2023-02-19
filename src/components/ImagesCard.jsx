import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledImgCircle } from '../styleds/StyledImgCircle';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledButton } from '../styleds/StyledButton';

export default function ImagesCard({ pokemon }) {
  const [imageDefault, setImageDefault] = useState(true);

  return (
    <StyledColumnContainer width="400px" height="400px">
      <StyledImgCircle>
        {
          imageDefault
            ? <img alt={ pokemon.name } src={ pokemon.image } />
            : <img alt={ pokemon.name } src={ pokemon.shiny } />
        }
      </StyledImgCircle>
      <StyledButton
        type="button"
        onClick={ () => setImageDefault(!imageDefault) }
      >
        { imageDefault ? 'SHINY' : 'DEFAULT' }
      </StyledButton>
    </StyledColumnContainer>
  );
}

ImagesCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    shiny: PropTypes.string,
  }).isRequired,
};
