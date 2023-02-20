import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import About from '../pages/About';
import renderWithRouter from './helpers/renderWithRouter';

describe('Component test About', () => {
  it('On the home page there is a link that directs to the about page', async () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);

    expect(history.location.pathname).toBe('/about');
  });
  it('on the about page there is a image in the header', () => {
    renderWithRouter(<About />);

    const aboutHeader = screen.getByRole('banner');
    const imageHeader = screen.getByRole('img', { name: /my-pokedex/i });

    expect(aboutHeader).toBeInTheDocument();
    expect(imageHeader).toBeInTheDocument();
  });
  it('on the about page there is a text about the pokedex', () => {
    renderWithRouter(<About />);

    const aboutText = screen.getByText(/provide information regarding the various species/i);
    const aboutFont = screen.getByRole('link', { name: /font: fandom\.com/i });

    expect(aboutText).toBeInTheDocument();
    expect(aboutFont).toBeInTheDocument();
  });
  it('on the about page there is an image of the pokedex', () => {
    renderWithRouter(<About />);

    const aboutImage = screen.getAllByRole('img', { name: /Pokedex/i });

    expect(aboutImage).toHaveLength(2);
  });
  it('on the about page there is a link that directs to the home page', () => {
    const { history } = renderWithRouter(<About />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });
});
