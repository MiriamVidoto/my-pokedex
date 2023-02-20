import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import NotFound from '../pages/NotFound';
import renderWithRouter from './helpers/renderWithRouter';

describe('Component test NotFound', () => {
  it('On the not found page there is a image', () => {
    renderWithRouter(<NotFound />);
    const notFoundMessage = screen.getByRole('img', { name: /not found/i });

    expect(notFoundMessage).toBeInTheDocument();
  });
  it('on the NotFound page there is a image in the header', () => {
    renderWithRouter(<NotFound />);

    const aboutHeader = screen.getByRole('banner');
    const imageHeader = screen.getByRole('img', { name: /my-pokedex/i });

    expect(aboutHeader).toBeInTheDocument();
    expect(imageHeader).toBeInTheDocument();
  });
  it('on the NotFound page there is a link to Home', () => {
    const { history } = renderWithRouter(<NotFound />);

    const homeLink = screen.getByRole('link', { name: /my-pokedex/i });
    userEvent.click(homeLink);

    expect(history.location.pathname).toBe('/');
  });
});
