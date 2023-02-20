import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Component test PokemonDetails', () => {
  it('On the details page there is a navbar with three links', async () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoriteLink = screen.getByRole('link', { name: /favorites/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
  it('On the details page there is a image of the pokemon', () => {
    renderWithRouter(<App />);
    const pokemonImage = screen.getByRole('img', { name: /bulbasaur/i });

    expect(pokemonImage).toBeInTheDocument();
  });
  it('On the details page there is a name of the pokemon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByText(/bulbasaur/i);

    expect(pokemonName).toBeInTheDocument();
  });
  it('On the details page there is a type of the pokemon', () => {
    renderWithRouter(<App />);
    const pokemonType = screen.getByText(/grass/i);

    expect(pokemonType).toBeInTheDocument();
  });
  it('On the details page there is a weight of the pokemon', () => {
    renderWithRouter(<App />);
    const pokemonWeight = screen.getByText(/6.9 kg/i);

    expect(pokemonWeight).toBeInTheDocument();
  });
  it('On the details page there is a summary of the pokemon', () => {
    renderWithRouter(<App />);
    const pokemonSummary = screen.getByText(/bulbasaur can be seen/i);

    expect(pokemonSummary).toBeInTheDocument();
  });
  it('On the details page there is a link to Home', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /my-pokedex/i });
    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });
  it('On the details page there is a link to About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    expect(history.location.pathname).toBe('/about');
  });
  it('On the details  page there is a link to Favorites', () => {
    const { history } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /favorites/i });
    userEvent.click(favoriteLink);

    expect(history.location.pathname).toBe('/favorites');
  });
});
