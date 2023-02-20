import PokemonCard from './PokemonCard';
import { StyledContainer } from '../styleds/StyledContainer';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function FavoritesCard() {
  const favoritesPokemons = getDataFromLocalStorage('favorites')
    ? getDataFromLocalStorage('favorites')
    : [];

  const minCards = 4;

  const size = favoritesPokemons.length < minCards ? '300px' : '150px';

  if (favoritesPokemons) {
    return (
      <StyledContainer minHeight="81vh">
        {
          favoritesPokemons.map((pokemon) => (
            <PokemonCard
              key={ pokemon.name }
              name={ pokemon.name }
              image={ pokemon.image }
              color={ pokemon.color }
              width={ size }
              height={ size }
            />
          ))
        }
      </StyledContainer>
    );
  }
}
