import { useContext } from 'react';
import { StyledSidebar } from '../styleds/StyledSidebar';
import PokedexContext from '../context/PokedexContext';
import { StyledButton } from '../styleds/StyledButton';

export default function Pagination() {
  const { offset, setOffset } = useContext(PokedexContext);

  const cardPerPage = 36;
  const limitCards = 1080;

  const handleClickNext = () => setOffset(offset + cardPerPage);

  const handleClickPrevious = () => setOffset(offset - cardPerPage);

  return (
    <StyledSidebar>
      <StyledButton
        type="button"
        onClick={ handleClickPrevious }
        disabled={ offset === 0 }
      >
        Previous
      </StyledButton>
      <StyledButton
        type="button"
        onClick={ handleClickNext }
        disabled={ offset === limitCards }
      >
        Next
      </StyledButton>
    </StyledSidebar>
  );
}
