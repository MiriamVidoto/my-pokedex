import { Link } from 'react-router-dom';
import { StyledHeader } from '../styleds/StyledHeader';
import pokedex from '../images/my-pokedex.svg';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={ pokedex } alt="my-pokedex" />
      </Link>
    </StyledHeader>
  );
}
