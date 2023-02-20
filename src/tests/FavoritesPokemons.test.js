import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../pages/FavoritesPokemons';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Component test FavoritesPokemons', () => {
  it('On the home page there is a link that directs to the favorites page', async () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /favorites/i });

    userEvent.click(aboutLink);

    expect(history.location.pathname).toBe('/favorites');
  });
  it('on the favorites page there is a image in the header', () => {
    renderWithRouter(<FavoritePokemons />);

    const aboutHeader = screen.getByRole('banner');
    const imageHeader = screen.getByRole('img', { name: /my-pokedex/i });

    expect(aboutHeader).toBeInTheDocument();
    expect(imageHeader).toBeInTheDocument();
  });
  it('on the favorites page there is a link to Home', () => {
    const { history } = renderWithRouter(<FavoritePokemons />);

    const homeLink = screen.getByRole('link', { name: /my-pokedex/i });
    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });
  it('On the favorites page there is a navbar with three links', async () => {
    renderWithRouter(<FavoritePokemons />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoriteLink = screen.getByRole('link', { name: /favorites/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
  it('On the favorites page there is a title MY FAVORITES POKEMONS', () => {
    renderWithRouter(<FavoritePokemons />);
    const titleFavorites = screen.getByRole('heading', { name: /my favorites pokemons/i, level: 1 });

    expect(titleFavorites).toBeInTheDocument();
  });
});
