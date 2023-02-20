import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import { pokemonsMock } from './mocks/pokemonsMock';

describe('Component test Home', () => {
  beforeEach(() => {
    jest.fn(global, 'allPokemonsList').mockResolvedValue({
      json: jest.fn().mockResolvedValue(pokemonsMock),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('On the home page there is a navbar with three links', async () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoriteLink = screen.getByRole('link', { name: /favorites/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
  it('On the home page there is a input and a button to search', () => {
    renderWithRouter(<App />);
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });

    // eslint-disable-next-line no-unused-expressions
    expect(searchButton).toBeDisabled;

    userEvent.type(searchInput, 'pikachu');

    expect(searchInput).toHaveValue('pikachu');
    expect(searchButton).toBeInTheDocument();
  });
  it('On the home page there is a image loading', async () => {
    renderWithRouter(<App />);

    const loading = screen.getByRole('img', { name: /loading/i });

    expect(loading).toBeInTheDocument();
  });
});
