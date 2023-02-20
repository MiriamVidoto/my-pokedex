import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import { pokemonsMock } from './mocks/pokemonsMock';
import { allPokemonsList } from '../utils/allPokemonsList';

const path = 'details/bulbasaur';

describe('Component test PokemonDetails', () => {
  beforeEach(() => {
    jest.fn(allPokemonsList, 'allPokemonsList').mockResolvedValue({
      json: jest.fn().mockResolvedValue(pokemonsMock),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('On the details page there is a navbar with three links', async () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoriteLink = screen.getByRole('link', { name: /favorites/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
  it('On the details page there is a link to Home', () => {
    const { history } = renderWithRouter(<App />);
    history.push(path);

    const homeLink = screen.getByRole('link', { name: /my-pokedex/i });
    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });
});
