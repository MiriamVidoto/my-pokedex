import { Link } from 'react-router-dom';
import { StyledNav } from '../styleds/StyledNav';

export default function Navbar() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
    </StyledNav>
  );
}
