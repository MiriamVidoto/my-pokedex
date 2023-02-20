import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledContainer } from '../styleds/StyledContainer';
import { StyledImg } from '../styleds/StyledImg';
import { StyledTag } from '../styleds/StyledTag';
import pokedex from '../images/pokedex.svg';
import { data, font } from '../utils/aboutData';

export default function AboutCard() {
  return (
    <StyledColumnContainer>
      <StyledContainer minHeight="86vh">
        <StyledImg alt="pokedex" src={ pokedex } height="50vh" maxWidth="70" />
        <StyledTag
          borderRadius="5px"
          height="40vh"
          width="50vh"
          margin="20px"
          column="column"
          padding="12px"
          textAlign="left"
        >
          <p>{ data }</p>
          <a href={ font }>font: fandom.com</a>
        </StyledTag>
      </StyledContainer>
    </StyledColumnContainer>
  );
}
