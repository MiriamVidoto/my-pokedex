import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Component test Home', () => {
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

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('after loading it shows pagination buttons', async () => {
    renderWithRouter(<App />);
    const loading = screen.getByRole('img', { name: /loading/i });
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(loading);

    const NextButtons = await screen.findAllByRole('button', { name: /next/i });

    expect(NextButtons).toHaveLength(2);
  });
  it('On the home page there is a list of pokemons', () => {
    renderWithRouter(<App />);
    const pokemonList = screen.getByRole('list');

    expect(pokemonList).toBeInTheDocument();
  });
});
