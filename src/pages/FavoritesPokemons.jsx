import FavoritesCard from '../components/FavoritesCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledTitle } from '../styleds/StyledTitle';

export default function FavoritePokemons() {
  return (
    <div>
      <Header />
      <Navbar />
      <StyledColumnContainer>
        <StyledTitle color="#EFEFED" width="90%">
          MY FAVORITES POKEMONS
        </StyledTitle>
        <FavoritesCard />
      </StyledColumnContainer>
      <Footer />
    </div>
  );
}
