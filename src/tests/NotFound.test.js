import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Se existe um h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const pageTitle = screen.getByRole('heading', { level: 2, name: /Page requested/i });
    expect(pageTitle).toBeInTheDocument();
  });
  test('Se existe a imagem da Pokédex', () => {
    render(<NotFound />);
    const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imgNotFound = screen.getByAltText(/Pikachu crying because the page requested/i);
    expect(imgNotFound).toBeInTheDocument();
    expect(imgNotFound.getAttribute('src')).toBe(imgSrc);
  });
});
