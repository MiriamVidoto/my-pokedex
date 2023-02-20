import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledImgCircle } from '../styleds/StyledImgCircle';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledButton } from '../styleds/StyledButton';
import { StyledTag } from '../styleds/StyledTag';

export default function ImagesCard({ pokemon }) {
  const [imageDefault, setImageDefault] = useState(true);

  return (
    <StyledColumnContainer width="400px">
      <StyledImgCircle>
        {
          imageDefault
            ? <img alt={ pokemon.name } src={ pokemon.image } />
            : <img alt={ pokemon.name } src={ pokemon.shiny } />
        }
      </StyledImgCircle>
      <StyledTag
        column="column"
        height="80px"
      >
        <p>{ pokemon.description }</p>
      </StyledTag>
      <StyledButton
        type="button"
        width="280px"
        onClick={ () => setImageDefault(!imageDefault) }
      >
        { imageDefault ? 'SEE SHINY MODE' : 'SEE DEFAULT MODE' }
      </StyledButton>
    </StyledColumnContainer>
  );
}

ImagesCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    shiny: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
