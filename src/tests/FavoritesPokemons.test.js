import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Component test FavoritesPokemons', () => {
  it('On the favorites page there is a navbar with three links', async () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoriteLink = screen.getByRole('link', { name: /favorites/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
  it('On the favorites page there is a list of pokemons', () => {
    renderWithRouter(<App />);
    const pokemonList = screen.getByRole('list');

    expect(pokemonList).toBeInTheDocument();
  });
  it('On the favorites page there is a message if there is no favorite pokemon', () => {
    renderWithRouter(<App />);
    const noFavoriteMessage = screen.getByText(/No favorite pokemon found/i);

    expect(noFavoriteMessage).toBeInTheDocument();
  });
});
