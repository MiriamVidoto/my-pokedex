import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledContainer } from '../styleds/StyledContainer';
import { StyledImg } from '../styleds/StyledImg';
import loading from '../images/loading.svg';

export default function Loading() {
  return (
    <StyledColumnContainer>
      <StyledContainer minHeight="89vh" color="white">
        <StyledImg alt="loading" src={ loading } height="78vh" />
      </StyledContainer>
    </StyledColumnContainer>
  );
}
